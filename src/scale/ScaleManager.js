/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("./const");
var Class = require("../utils/Class");
var EventEmitter = require("eventemitter3");
var Events = require("./events");
var GameEvents = require("../core/events");
var GetInnerHeight = require("../dom/GetInnerHeight");
var GetTarget = require("../dom/GetTarget");
var GetScreenOrientation = require("../dom/GetScreenOrientation");
var NOOP = require("../utils/NOOP");
var Rectangle = require("../geom/rectangle/Rectangle");
var Size = require("../structs/Size");
var SnapFloor = require("../math/snap/SnapFloor");
var Vector2 = require("../math/Vector2");
var Camera = require("../cameras/2d/Camera");

/**
 * @classdesc
 * The Scale Manager handles the scaling, resizing and alignment of the game canvas.
 *
 * The way scaling is handled is by setting the game canvas to a fixed size, which is defined in the
 * game configuration. You also define the parent container in the game config. If no parent is given,
 * it will default to using the document body. The Scale Manager will then look at the available space
 * within the _parent_ and scale the canvas accordingly. Scaling is handled by setting the canvas CSS
 * width and height properties, leaving the width and height of the canvas element itself untouched.
 * Scaling is therefore achieved by keeping the core canvas the same size and 'stretching'
 * it via its CSS properties. This gives the same result and speed as using the `transform-scale` CSS
 * property, without the need for browser prefix handling.
 *
 * The calculations for the scale are heavily influenced by the bounding parent size, which is the computed
 * dimensions of the canvas's parent. The CSS rules of the parent element play an important role in the
 * operation of the Scale Manager. For example, if the parent has no defined width or height, then actions
 * like auto-centering will fail to achieve the required result. The Scale Manager works in tandem with the
 * CSS you set-up on the page hosting your game, rather than taking control of it.
 *
 * #### Parent and Display canvas containment guidelines:
 *
 * - Style the Parent element (of the game canvas) to control the Parent size and thus the games size and layout.
 *
 * - The Parent element's CSS styles should _effectively_ apply maximum (and minimum) bounding behavior.
 *
 * - The Parent element should _not_ apply a padding as this is not accounted for.
 *   If a padding is required apply it to the Parent's parent or apply a margin to the Parent.
 *   If you need to add a border, margin or any other CSS around your game container, then use a parent element and
 *   apply the CSS to this instead, otherwise you'll be constantly resizing the shape of the game container.
 *
 * - The Display canvas layout CSS styles (i.e. margins, size) should not be altered / specified as
 *   they may be updated by the Scale Manager.
 *
 * #### Scale Modes
 *
 * The way the scaling is handled is determined by the `scaleMode` property. The default is `NONE`,
 * which prevents Vsengine from scaling or touching the canvas, or its parent, at all. In this mode, you are
 * responsible for all scaling. The other scaling modes afford you automatic scaling.
 *
 * If you wish to scale your game so that it always fits into the available space within the parent, you
 * should use the scale mode `FIT`. Look at the documentation for other scale modes to see what options are
 * available. Here is a basic config showing how to set this scale mode:
 *
 * ```javascript
 * scale: {
 *     parent: 'yourgamediv',
 *     mode: Vsengine.Scale.FIT,
 *     width: 800,
 *     height: 600
 * }
 * ```
 *
 * Place the `scale` config object within your game config.
 *
 * If you wish for the canvas to be resized directly, so that the canvas itself fills the available space
 * (i.e. it isn't scaled, it's resized) then use the `RESIZE` scale mode. This will give you a 1:1 mapping
 * of canvas pixels to game size. In this mode CSS isn't used to scale the canvas, it's literally adjusted
 * to fill all available space within the parent. You should be extremely careful about the size of the
 * canvas you're creating when doing this, as the larger the area, the more work the GPU has to do and it's
 * very easy to hit fill-rate limits quickly.
 *
 * For complex, custom-scaling requirements, you should probably consider using the `RESIZE` scale mode,
 * with your own limitations in place re: canvas dimensions and managing the scaling with the game scenes
 * yourself. For the vast majority of games, however, the `FIT` mode is likely to be the most used.
 *
 * Please appreciate that the Scale Manager cannot perform miracles. All it does is scale your game canvas
 * as best it can, based on what it can infer from its surrounding area. There are all kinds of environments
 * where it's up to you to guide and help the canvas position itself, especially when built into rendering
 * frameworks like React and Vue. If your page requires meta tags to prevent user scaling gestures, or such
 * like, then it's up to you to ensure they are present in the html.
 *
 * #### Centering
 *
 * You can also have the game canvas automatically centered. Again, this relies heavily on the parent being
 * properly configured and styled, as the centering offsets are based entirely on the available space
 * within the parent element. Centering is disabled by default, or can be applied horizontally, vertically,
 * or both. Here's an example:
 *
 * ```javascript
 * scale: {
 *     parent: 'yourgamediv',
 *     autoCenter: Vsengine.Scale.CENTER_BOTH,
 *     width: 800,
 *     height: 600
 * }
 * ```
 *
 * #### Fullscreen API
 *
 * If the browser supports it, you can send your game into fullscreen mode. In this mode, the game will fill
 * the entire display, removing all browser UI and anything else present on the screen. It will remain in this
 * mode until your game either disables it, or until the user tabs out or presses ESCape if on desktop. It's a
 * great way to achieve a desktop-game like experience from the browser, but it does require a modern browser
 * to handle it. Some mobile browsers also support this.
 *
 * @class ScaleManager
 * @memberof Vsengine.Scale
 * @extends Vsengine.Events.EventEmitter
 * @constructor
 * @since 3.16.0
 *
 * @param {Vsengine.Game} game - A reference to the Vsengine.Game instance.
 */
var ScaleManager = new Class({
    Extends: EventEmitter,

    initialize: function ScaleManager(game) {
        EventEmitter.call(this);

        /**
         * A reference to the Vsengine.Game instance.
         *
         * @name Vsengine.Scale.ScaleManager#game
         * @type {Vsengine.Game}
         * @readonly
         * @since 3.15.0
         */
        this.game = game;

        /**
         * A reference to the HTML Canvas Element that Vsengine uses to render the game.
         *
         * @name Vsengine.Scale.ScaleManager#canvas
         * @type {HTMLCanvasElement}
         * @since 3.16.0
         */
        this.canvas;

        /**
         * The DOM bounds of the canvas element.
         *
         * @name Vsengine.Scale.ScaleManager#canvasBounds
         * @type {Vsengine.Geom.Rectangle}
         * @since 3.16.0
         */
        this.canvasBounds = new Rectangle();

        /**
         * The parent object of the Canvas. Often a div, or the browser window, or nothing in non-browser environments.
         *
         * This is set in the Game Config as the `parent` property. If undefined (or just not present), it will default
         * to use the document body. If specifically set to `null` Vsengine will ignore all parent operations.
         *
         * @name Vsengine.Scale.ScaleManager#parent
         * @type {?any}
         * @since 3.16.0
         */
        this.parent = null;

        /**
         * Is the parent element the browser window?
         *
         * @name Vsengine.Scale.ScaleManager#parentIsWindow
         * @type {boolean}
         * @since 3.16.0
         */
        this.parentIsWindow = false;

        /**
         * The Parent Size component.
         *
         * @name Vsengine.Scale.ScaleManager#parentSize
         * @type {Vsengine.Structs.Size}
         * @since 3.16.0
         */
        this.parentSize = new Size();

        /**
         * The Game Size component.
         *
         * The un-modified game size, as requested in the game config (the raw width / height),
         * as used for world bounds, cameras, etc
         *
         * @name Vsengine.Scale.ScaleManager#gameSize
         * @type {Vsengine.Structs.Size}
         * @since 3.16.0
         */
        this.gameSize = new Size();

        /**
         * The Base Size component.
         *
         * The modified game size, which is the auto-rounded gameSize, used to set the canvas width and height
         * (but not the CSS style)
         *
         * @name Vsengine.Scale.ScaleManager#baseSize
         * @type {Vsengine.Structs.Size}
         * @since 3.16.0
         */
        this.baseSize = new Size();

        /**
         * The Display Size component.
         *
         * The size used for the canvas style, factoring in the scale mode, parent and other values.
         *
         * @name Vsengine.Scale.ScaleManager#displaySize
         * @type {Vsengine.Structs.Size}
         * @since 3.16.0
         */
        this.displaySize = new Size();

        /**
         * The game scale mode.
         *
         * @name Vsengine.Scale.ScaleManager#scaleMode
         * @type {Vsengine.Scale.ScaleModeType}
         * @since 3.16.0
         */
        this.scaleMode = CONST.SCALE_MODE.NONE;

        /**
         * The game zoom factor.
         *
         * This value allows you to multiply your games base size by the given zoom factor.
         * This is then used when calculating the display size, even in `NONE` situations.
         * If you don't want Vsengine to touch the canvas style at all, this value should be 1.
         *
         * Can also be set to `MAX_ZOOM` in which case the zoom value will be derived based
         * on the game size and available space within the parent.
         *
         * @name Vsengine.Scale.ScaleManager#zoom
         * @type {number}
         * @since 3.16.0
         */
        this.zoom = 1;

        /**
         * Internal flag set when the game zoom factor is modified.
         *
         * @name Vsengine.Scale.ScaleManager#_resetZoom
         * @type {boolean}
         * @readonly
         * @since 3.19.0
         */
        this._resetZoom = false;

        /**
         * The scale factor between the baseSize and the canvasBounds.
         *
         * @name Vsengine.Scale.ScaleManager#displayScale
         * @type {Vsengine.Math.Vector2}
         * @since 3.16.0
         */
        this.displayScale = new Vector2(1, 1);

        /**
         * If set, the canvas sizes will be automatically passed through Math.floor.
         * This results in rounded pixel display values, which is important for performance on legacy
         * and low powered devices, but at the cost of not achieving a 'perfect' fit in some browser windows.
         *
         * @name Vsengine.Scale.ScaleManager#autoRound
         * @type {boolean}
         * @since 3.16.0
         */
        this.autoRound = false;

        /**
         * Automatically center the canvas within the parent? The different centering modes are:
         *
         * 1. No centering.
         * 2. Center both horizontally and vertically.
         * 3. Center horizontally.
         * 4. Center vertically.
         *
         * Please be aware that in order to center the game canvas, you must have specified a parent
         * that has a size set, or the canvas parent is the document.body.
         *
         * @name Vsengine.Scale.ScaleManager#autoCenter
         * @type {Vsengine.Scale.CenterType}
         * @since 3.16.0
         */
        this.autoCenter = CONST.CENTER.NO_CENTER;

        /**
         * The current device orientation.
         *
         * Orientation events are dispatched via the Device Orientation API, typically only on mobile browsers.
         *
         * @name Vsengine.Scale.ScaleManager#orientation
         * @type {Vsengine.Scale.OrientationType}
         * @since 3.16.0
         */
        this.orientation = CONST.ORIENTATION.LANDSCAPE;

        /**
         * A reference to the Device.Fullscreen object.
         *
         * @name Vsengine.Scale.ScaleManager#fullscreen
         * @type {Vsengine.Device.Fullscreen}
         * @since 3.16.0
         */
        this.fullscreen;

        /**
         * The DOM Element which is sent into fullscreen mode.
         *
         * @name Vsengine.Scale.ScaleManager#fullscreenTarget
         * @type {?any}
         * @since 3.16.0
         */
        this.fullscreenTarget = null;

        /**
         * Did Vsengine create the fullscreen target div, or was it provided in the game config?
         *
         * @name Vsengine.Scale.ScaleManager#_createdFullscreenTarget
         * @type {boolean}
         * @private
         * @since 3.16.0
         */
        this._createdFullscreenTarget = false;

        /**
         * The dirty state of the Scale Manager.
         * Set if there is a change between the parent size and the current size.
         *
         * @name Vsengine.Scale.ScaleManager#dirty
         * @type {boolean}
         * @since 3.16.0
         */
        this.dirty = false;

        /**
         * How many milliseconds should elapse before checking if the browser size has changed?
         *
         * Most modern browsers dispatch a 'resize' event, which the Scale Manager will listen for.
         * However, older browsers fail to do this, or do it consistently, so we fall back to a
         * more traditional 'size check' based on a time interval. You can control how often it is
         * checked here.
         *
         * @name Vsengine.Scale.ScaleManager#resizeInterval
         * @type {number}
         * @since 3.16.0
         */
        this.resizeInterval = 500;

        /**
         * Internal size interval tracker.
         *
         * @name Vsengine.Scale.ScaleManager#_lastCheck
         * @type {number}
         * @private
         * @since 3.16.0
         */
        this._lastCheck = 0;

        /**
         * Internal flag to check orientation state.
         *
         * @name Vsengine.Scale.ScaleManager#_checkOrientation
         * @type {boolean}
         * @private
         * @since 3.16.0
         */
        this._checkOrientation = false;

        /**
         * Internal object containing our defined event listeners.
         *
         * @name Vsengine.Scale.ScaleManager#domlisteners
         * @type {object}
         * @private
         * @since 3.16.0
         */
        this.domlisteners = {
            orientationChange: NOOP,
            windowResize: NOOP,
            fullScreenChange: NOOP,
            fullScreenError: NOOP,
        };
    },

    /**
     * Called _before_ the canvas object is created and added to the DOM.
     *
     * @method Vsengine.Scale.ScaleManager#preBoot
     * @protected
     * @listens Vsengine.Core.Events#BOOT
     * @since 3.16.0
     */
    preBoot: function () {
        //  Parse the config to get the scaling values we need
        this.parseConfig(this.game.config);

        this.game.events.once(GameEvents.BOOT, this.boot, this);
    },

    /**
     * The Boot handler is called by Vsengine.Game when it first starts up.
     * The renderer is available by now and the canvas has been added to the DOM.
     *
     * @method Vsengine.Scale.ScaleManager#boot
     * @protected
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     */
    boot: function () {
        var game = this.game;

        this.canvas = game.canvas;

        this.fullscreen = game.device.fullscreen;

        if (
            this.scaleMode !== CONST.SCALE_MODE.RESIZE &&
            this.scaleMode !== CONST.SCALE_MODE.EXPAND
        ) {
            this.displaySize.setAspectMode(this.scaleMode);
        }

        if (this.scaleMode === CONST.SCALE_MODE.NONE) {
            this.resize(this.width, this.height);
        } else {
            this.getParentBounds();

            //  Only set the parent bounds if the parent has an actual size
            if (this.parentSize.width > 0 && this.parentSize.height > 0) {
                this.displaySize.setParent(this.parentSize);
            }

            this.refresh();
        }

        game.events.on(GameEvents.PRE_STEP, this.step, this);
        game.events.once(GameEvents.READY, this.refresh, this);
        game.events.once(GameEvents.DESTROY, this.destroy, this);

        this.startListeners();
    },

    /**
     * Parses the game configuration to set-up the scale defaults.
     *
     * @method Vsengine.Scale.ScaleManager#parseConfig
     * @protected
     * @since 3.16.0
     *
     * @param {Vsengine.Types.Core.GameConfig} config - The Game configuration object.
     */
    parseConfig: function (config) {
        //  Get the parent element, if any
        this.getParent(config);

        //  Get the size of the parent element
        //  This can often set a height of zero (especially for un-styled divs)
        this.getParentBounds();

        var width = config.width;
        var height = config.height;
        var scaleMode = config.scaleMode;
        var zoom = config.zoom;
        var autoRound = config.autoRound;

        //  If width = '100%', or similar value
        if (typeof width === "string") {
            //  Does width have a % character at the end? If not, we use it as a numeric value.
            if (width.substr(-1) !== "%") {
                width = parseInt(width, 10);
            } else {
                //  If we have a parent with a width, we'll work it out from that
                var parentWidth = this.parentSize.width;

                if (parentWidth === 0) {
                    parentWidth = window.innerWidth;
                }

                var parentScaleX = parseInt(width, 10) / 100;

                width = Math.floor(parentWidth * parentScaleX);
            }
        }

        //  If height = '100%', or similar value
        if (typeof height === "string") {
            //  Does height have a % character at the end? If not, we use it as a numeric value.
            if (height.substr(-1) !== "%") {
                height = parseInt(height, 10);
            } else {
                //  If we have a parent with a height, we'll work it out from that
                var parentHeight = this.parentSize.height;

                if (parentHeight === 0) {
                    parentHeight = window.innerHeight;
                }

                var parentScaleY = parseInt(height, 10) / 100;

                height = Math.floor(parentHeight * parentScaleY);
            }
        }

        this.scaleMode = scaleMode;

        this.autoRound = autoRound;

        this.autoCenter = config.autoCenter;

        this.resizeInterval = config.resizeInterval;

        if (autoRound) {
            width = Math.floor(width);
            height = Math.floor(height);
        }

        //  The un-modified game size, as requested in the game config (the raw width / height) as used for world bounds, etc
        this.gameSize.setSize(width, height);

        if (zoom === CONST.ZOOM.MAX_ZOOM) {
            zoom = this.getMaxZoom();
        }

        this.zoom = zoom;

        if (zoom !== 1) {
            this._resetZoom = true;
        }

        //  The modified game size
        this.baseSize.setSize(width, height);

        if (autoRound) {
            this.baseSize.width = Math.floor(this.baseSize.width);
            this.baseSize.height = Math.floor(this.baseSize.height);
        }

        if (config.minWidth > 0) {
            this.displaySize.setMin(
                config.minWidth * zoom,
                config.minHeight * zoom
            );
        }

        if (config.maxWidth > 0) {
            this.displaySize.setMax(
                config.maxWidth * zoom,
                config.maxHeight * zoom
            );
        }

        //  The size used for the canvas style, factoring in the scale mode and parent and zoom value
        //  We just use the w/h here as this is what sets the aspect ratio (which doesn't then change)
        this.displaySize.setSize(width, height);

        if (config.snapWidth > 0 || config.snapHeight > 0) {
            this.displaySize.setSnap(config.snapWidth, config.snapHeight);
        }

        this.orientation = GetScreenOrientation(width, height);
    },

    /**
     * Determines the parent element of the game canvas, if any, based on the game configuration.
     *
     * @method Vsengine.Scale.ScaleManager#getParent
     * @since 3.16.0
     *
     * @param {Vsengine.Types.Core.GameConfig} config - The Game configuration object.
     */
    getParent: function (config) {
        var parent = config.parent;

        if (parent === null) {
            //  User is responsible for managing the parent
            return;
        }

        this.parent = GetTarget(parent);
        this.parentIsWindow = this.parent === document.body;

        if (config.expandParent && config.scaleMode !== CONST.SCALE_MODE.NONE) {
            var DOMRect = this.parent.getBoundingClientRect();

            if (this.parentIsWindow || DOMRect.height === 0) {
                document.documentElement.style.height = "100%";
                document.body.style.height = "100%";

                DOMRect = this.parent.getBoundingClientRect();

                //  The parent STILL has no height, clearly no CSS
                //  has been set on it even though we fixed the body :(
                if (!this.parentIsWindow && DOMRect.height === 0) {
                    this.parent.style.overflow = "hidden";
                    this.parent.style.width = "100%";
                    this.parent.style.height = "100%";
                }
            }
        }

        //  And now get the fullscreenTarget
        if (config.fullscreenTarget && !this.fullscreenTarget) {
            this.fullscreenTarget = GetTarget(config.fullscreenTarget);
        }
    },

    /**
     * Calculates the size of the parent bounds and updates the `parentSize`
     * properties, only if the canvas has a dom parent.
     *
     * @method Vsengine.Scale.ScaleManager#getParentBounds
     * @since 3.16.0
     *
     * @return {boolean} `true` if the parent bounds have changed size or position, otherwise `false`.
     */
    getParentBounds: function () {
        if (!this.parent) {
            return false;
        }

        var parentSize = this.parentSize;

        // Ref. http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx for getBoundingClientRect

        // The returned value is a DOMRect object which is the smallest rectangle which contains the entire element,
        // including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties
        // describe the position and size of the overall rectangle in pixels. Properties other than width and height
        // are relative to the top-left of the viewport.

        var DOMRect = this.parent.getBoundingClientRect();

        if (this.parentIsWindow && this.game.device.os.iOS) {
            DOMRect.height = GetInnerHeight(true);
        }

        var newWidth = DOMRect.width;
        var newHeight = DOMRect.height;

        if (parentSize.width !== newWidth || parentSize.height !== newHeight) {
            parentSize.setSize(newWidth, newHeight);

            return true;
        } else if (this.canvas) {
            var canvasBounds = this.canvasBounds;
            var canvasRect = this.canvas.getBoundingClientRect();

            if (
                canvasRect.x !== canvasBounds.x ||
                canvasRect.y !== canvasBounds.y
            ) {
                return true;
            }
        }

        return false;
    },

    /**
     * Attempts to lock the orientation of the web browser using the Screen Orientation API.
     *
     * This API is only available on modern mobile browsers.
     * See https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation for details.
     *
     * @method Vsengine.Scale.ScaleManager#lockOrientation
     * @since 3.16.0
     *
     * @param {string} orientation - The orientation you'd like to lock the browser in. Should be an API string such as 'landscape', 'landscape-primary', 'portrait', etc.
     *
     * @return {boolean} `true` if the orientation was successfully locked, otherwise `false`.
     */
    lockOrientation: function (orientation) {
        var lock =
            screen.lockOrientation ||
            screen.mozLockOrientation ||
            screen.msLockOrientation;

        if (lock) {
            return lock.call(screen, orientation);
        }

        return false;
    },

    /**
     * This method will set the size of the Parent Size component, which is used in scaling
     * and centering calculations. You only need to call this method if you have explicitly
     * disabled the use of a parent in your game config, but still wish to take advantage of
     * other Scale Manager features.
     *
     * @method Vsengine.Scale.ScaleManager#setParentSize
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {number} width - The new width of the parent.
     * @param {number} height - The new height of the parent.
     *
     * @return {this} The Scale Manager instance.
     */
    setParentSize: function (width, height) {
        this.parentSize.setSize(width, height);

        return this.refresh();
    },

    /**
     * This method will set a new size for your game.
     *
     * It should only be used if you're looking to change the base size of your game and are using
     * one of the Scale Manager scaling modes, i.e. `FIT`. If you're using `NONE` and wish to
     * change the game and canvas size directly, then please use the `resize` method instead.
     *
     * @method Vsengine.Scale.ScaleManager#setGameSize
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {number} width - The new width of the game.
     * @param {number} height - The new height of the game.
     *
     * @return {this} The Scale Manager instance.
     */
    setGameSize: function (width, height) {
        var autoRound = this.autoRound;

        if (autoRound) {
            width = Math.floor(width);
            height = Math.floor(height);
        }

        var previousWidth = this.width;
        var previousHeight = this.height;

        //  The un-modified game size, as requested in the game config (the raw width / height) as used for world bounds, etc
        this.gameSize.resize(width, height);

        //  The modified game size
        this.baseSize.resize(width, height);

        if (autoRound) {
            this.baseSize.width = Math.floor(this.baseSize.width);
            this.baseSize.height = Math.floor(this.baseSize.height);
        }

        //  The size used for the canvas style, factoring in the scale mode and parent and zoom value
        //  Update the aspect ratio
        this.displaySize.setAspectRatio(width / height);

        this.canvas.width = this.baseSize.width;
        this.canvas.height = this.baseSize.height;

        return this.refresh(previousWidth, previousHeight);
    },

    /**
     * Call this to modify the size of the Vsengine canvas element directly.
     * You should only use this if you are using the `NONE` scale mode,
     * it will update all internal components completely.
     *
     * If all you want to do is change the size of the parent, see the `setParentSize` method.
     *
     * If all you want is to change the base size of the game, but still have the Scale Manager
     * manage all the scaling (i.e. you're **not** using `NONE`), then see the `setGameSize` method.
     *
     * This method will set the `gameSize`, `baseSize` and `displaySize` components to the given
     * dimensions. It will then resize the canvas width and height to the values given, by
     * directly setting the properties. Finally, if you have set the Scale Manager zoom value
     * to anything other than 1 (the default), it will set the canvas CSS width and height to
     * be the given size multiplied by the zoom factor (the canvas pixel size remains untouched).
     *
     * If you have enabled `autoCenter`, it is then passed to the `updateCenter` method and
     * the margins are set, allowing the canvas to be centered based on its parent element
     * alone. Finally, the `displayScale` is adjusted and the RESIZE event dispatched.
     *
     * @method Vsengine.Scale.ScaleManager#resize
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {number} width - The new width of the game.
     * @param {number} height - The new height of the game.
     *
     * @return {this} The Scale Manager instance.
     */
    resize: function (width, height) {
        var zoom = this.zoom;
        var autoRound = this.autoRound;

        if (autoRound) {
            width = Math.floor(width);
            height = Math.floor(height);
        }

        var previousWidth = this.width;
        var previousHeight = this.height;

        //  The un-modified game size, as requested in the game config (the raw width / height) as used for world bounds, etc
        this.gameSize.resize(width, height);

        //  The modified game size
        this.baseSize.resize(width, height);

        if (autoRound) {
            this.baseSize.width = Math.floor(this.baseSize.width);
            this.baseSize.height = Math.floor(this.baseSize.height);
        }

        //  The size used for the canvas style, factoring in the scale mode and parent and zoom value
        //  We just use the w/h here as this is what sets the aspect ratio (which doesn't then change)
        this.displaySize.setSize(width * zoom, height * zoom);

        this.canvas.width = this.baseSize.width;
        this.canvas.height = this.baseSize.height;

        var style = this.canvas.style;

        var styleWidth = width * zoom;
        var styleHeight = height * zoom;

        if (autoRound) {
            styleWidth = Math.floor(styleWidth);
            styleHeight = Math.floor(styleHeight);
        }

        if (styleWidth !== width || styleHeight !== height) {
            style.width = styleWidth + "px";
            style.height = styleHeight + "px";
        }

        return this.refresh(previousWidth, previousHeight);
    },

    /**
     * Sets the zoom value of the Scale Manager.
     *
     * @method Vsengine.Scale.ScaleManager#setZoom
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {number} value - The new zoom value of the game.
     *
     * @return {this} The Scale Manager instance.
     */
    setZoom: function (value) {
        this.zoom = value;
        this._resetZoom = true;

        return this.refresh();
    },

    /**
     * Sets the zoom to be the maximum possible based on the _current_ parent size.
     *
     * @method Vsengine.Scale.ScaleManager#setMaxZoom
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @return {this} The Scale Manager instance.
     */
    setMaxZoom: function () {
        this.zoom = this.getMaxZoom();
        this._resetZoom = true;

        return this.refresh();
    },

    /**
     * By setting a Snap value, when the browser size is modified, its dimensions will automatically
     * be snapped to the nearest grid slice, using floor. For example, if you have snap value of 16,
     * and the width changes to 68, then it will snap down to 64 (the closest multiple of 16 when floored)
     *
     * This mode is best used with the `FIT` scale mode.
     *
     * Call this method with no arguments to reset the snap values.
     *
     * Calling this method automatically invokes `ScaleManager.refresh` which emits a `RESIZE` event.
     *
     * @method Vsengine.Scale.ScaleManager#setSnap
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.80.0
     *
     * @param {number} [snapWidth=0] - The amount to snap the width to. If you don't want to snap the width, pass a value of zero.
     * @param {number} [snapHeight=snapWidth] - The amount to snap the height to. If not provided it will use the `snapWidth` value. If you don't want to snap the height, pass a value of zero.
     *
     * @return {this} The Scale Manager instance.
     */
    setSnap: function (snapWidth, snapHeight) {
        if (snapWidth === undefined) {
            snapWidth = 0;
        }
        if (snapHeight === undefined) {
            snapHeight = snapWidth;
        }

        this.displaySize.setSnap(snapWidth, snapHeight);

        return this.refresh();
    },

    /**
     * Refreshes the internal scale values, bounds sizes and orientation checks.
     *
     * Once finished, dispatches the resize event.
     *
     * This is called automatically by the Scale Manager when the browser window size changes,
     * as long as it is using a Scale Mode other than 'NONE'.
     *
     * @method Vsengine.Scale.ScaleManager#refresh
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {number} [previousWidth] - The previous width of the game. Only set if the gameSize has changed.
     * @param {number} [previousHeight] - The previous height of the game. Only set if the gameSize has changed.
     *
     * @return {this} The Scale Manager instance.
     */
    refresh: function (previousWidth, previousHeight) {
        if (previousWidth === undefined) {
            previousWidth = this.width;
        }
        if (previousHeight === undefined) {
            previousHeight = this.height;
        }

        this.updateScale();
        this.updateBounds();
        this.updateOrientation();

        this.displayScale.set(
            this.baseSize.width / this.canvasBounds.width,
            this.baseSize.height / this.canvasBounds.height
        );

        var domContainer = this.game.domContainer;

        if (domContainer) {
            this.baseSize.setCSS(domContainer);

            var canvasStyle = this.canvas.style;
            var domStyle = domContainer.style;

            domStyle.transform =
                "scale(" +
                this.displaySize.width / this.baseSize.width +
                "," +
                this.displaySize.height / this.baseSize.height +
                ")";

            domStyle.marginLeft = canvasStyle.marginLeft;
            domStyle.marginTop = canvasStyle.marginTop;
        }

        this.emit(
            Events.RESIZE,
            this.gameSize,
            this.baseSize,
            this.displaySize,
            previousWidth,
            previousHeight
        );

        return this;
    },

    /**
     * Internal method that checks the current screen orientation, only if the internal check flag is set.
     *
     * If the orientation has changed it updates the orientation property and then dispatches the orientation change event.
     *
     * @method Vsengine.Scale.ScaleManager#updateOrientation
     * @fires Vsengine.Scale.Events#ORIENTATION_CHANGE
     * @since 3.16.0
     */
    updateOrientation: function () {
        if (this._checkOrientation) {
            this._checkOrientation = false;

            var newOrientation = GetScreenOrientation(this.width, this.height);

            if (newOrientation !== this.orientation) {
                this.orientation = newOrientation;

                this.emit(Events.ORIENTATION_CHANGE, newOrientation);
            }
        }
    },

    /**
     * Internal method that manages updating the size components based on the scale mode.
     *
     * @method Vsengine.Scale.ScaleManager#updateScale
     * @since 3.16.0
     */
    updateScale: function () {
        var style = this.canvas.style;

        var width = this.gameSize.width;
        var height = this.gameSize.height;

        var styleWidth;
        var styleHeight;

        var zoom = this.zoom;
        var autoRound = this.autoRound;

        if (this.scaleMode === CONST.SCALE_MODE.NONE) {
            //  No scale
            this.displaySize.setSize(width * zoom, height * zoom);

            styleWidth = this.displaySize.width;
            styleHeight = this.displaySize.height;

            if (autoRound) {
                styleWidth = Math.floor(styleWidth);
                styleHeight = Math.floor(styleHeight);
            }

            if (this._resetZoom) {
                style.width = styleWidth + "px";
                style.height = styleHeight + "px";

                this._resetZoom = false;
            }
        } else if (this.scaleMode === CONST.SCALE_MODE.RESIZE) {
            //  Resize to match parent

            //  This will constrain using min/max
            this.displaySize.setSize(
                this.parentSize.width,
                this.parentSize.height
            );

            this.gameSize.setSize(
                this.displaySize.width,
                this.displaySize.height
            );

            this.baseSize.setSize(
                this.displaySize.width,
                this.displaySize.height
            );

            styleWidth = this.displaySize.width;
            styleHeight = this.displaySize.height;

            if (autoRound) {
                styleWidth = Math.floor(styleWidth);
                styleHeight = Math.floor(styleHeight);
            }

            this.canvas.width = styleWidth;
            this.canvas.height = styleHeight;
        } else if (this.scaleMode === CONST.SCALE_MODE.EXPAND) {
            var baseWidth = this.game.config.width;
            var baseHeight = this.game.config.height;

            //  Resize to match parent, like RESIZE mode

            //  This will constrain using min/max
            this.displaySize.setSize(
                this.parentSize.width,
                this.parentSize.height
            );

            styleWidth = this.displaySize.width;
            styleHeight = this.displaySize.height;

            if (autoRound) {
                styleWidth = Math.floor(styleWidth);
                styleHeight = Math.floor(styleHeight);
            }

            style.width = styleWidth + "px";
            style.height = styleHeight + "px";

            // Expand canvas size to fit game size's width or height

            var scaleX = this.parentSize.width / baseWidth;

            var scaleY = this.parentSize.height / baseHeight;

            if (scaleX < scaleY) {
                this.baseSize.setSize(
                    baseWidth,
                    this.parentSize.height / scaleX
                );
            } else {
                this.baseSize.setSize(
                    this.displaySize.width / scaleY,
                    baseHeight
                );
            }

            this.gameSize.setSize(this.baseSize.width, this.baseSize.height);

            styleWidth = this.baseSize.width;
            styleHeight = this.baseSize.height;

            if (autoRound) {
                styleWidth = Math.floor(styleWidth);
                styleHeight = Math.floor(styleHeight);
            }

            this.canvas.width = styleWidth;
            this.canvas.height = styleHeight;
        } else {
            //  All other scale modes
            this.displaySize.setSize(
                this.parentSize.width,
                this.parentSize.height
            );

            styleWidth = this.displaySize.width;
            styleHeight = this.displaySize.height;

            if (autoRound) {
                styleWidth = Math.floor(styleWidth);
                styleHeight = Math.floor(styleHeight);
            }

            style.width = styleWidth + "px";
            style.height = styleHeight + "px";
        }

        //  Update the parentSize in case the canvas / style change modified it
        this.getParentBounds();

        //  Finally, update the centering
        this.updateCenter();
    },

    /**
     * Calculates and returns the largest possible zoom factor, based on the current
     * parent and game sizes. If the parent has no dimensions (i.e. an unstyled div),
     * or is smaller than the un-zoomed game, then this will return a value of 1 (no zoom)
     *
     * @method Vsengine.Scale.ScaleManager#getMaxZoom
     * @since 3.16.0
     *
     * @return {number} The maximum possible zoom factor. At a minimum this value is always at least 1.
     */
    getMaxZoom: function () {
        var zoomH = SnapFloor(
            this.parentSize.width,
            this.gameSize.width,
            0,
            true
        );
        var zoomV = SnapFloor(
            this.parentSize.height,
            this.gameSize.height,
            0,
            true
        );

        return Math.max(Math.min(zoomH, zoomV), 1);
    },

    /**
     * Calculates and updates the canvas CSS style in order to center it within the
     * bounds of its parent. If you have explicitly set parent to be `null` in your
     * game config then this method will likely give incorrect results unless you have called the
     * `setParentSize` method first.
     *
     * It works by modifying the canvas CSS `marginLeft` and `marginTop` properties.
     *
     * If they have already been set by your own style sheet, or code, this will overwrite them.
     *
     * To prevent the Scale Manager from centering the canvas, either do not set the
     * `autoCenter` property in your game config, or make sure it is set to `NO_CENTER`.
     *
     * @method Vsengine.Scale.ScaleManager#updateCenter
     * @since 3.16.0
     */
    updateCenter: function () {
        var autoCenter = this.autoCenter;

        if (autoCenter === CONST.CENTER.NO_CENTER) {
            return;
        }

        var canvas = this.canvas;

        var style = canvas.style;

        var bounds = canvas.getBoundingClientRect();

        // var width = parseInt(canvas.style.width, 10) || canvas.width;
        // var height = parseInt(canvas.style.height, 10) || canvas.height;

        var width = bounds.width;
        var height = bounds.height;

        var offsetX = Math.floor((this.parentSize.width - width) / 2);
        var offsetY = Math.floor((this.parentSize.height - height) / 2);

        if (autoCenter === CONST.CENTER.CENTER_HORIZONTALLY) {
            offsetY = 0;
        } else if (autoCenter === CONST.CENTER.CENTER_VERTICALLY) {
            offsetX = 0;
        }

        style.marginLeft = offsetX + "px";
        style.marginTop = offsetY + "px";
    },

    /**
     * Updates the `canvasBounds` rectangle to match the bounding client rectangle of the
     * canvas element being used to track input events.
     *
     * @method Vsengine.Scale.ScaleManager#updateBounds
     * @since 3.16.0
     */
    updateBounds: function () {
        var bounds = this.canvasBounds;
        var clientRect = this.canvas.getBoundingClientRect();

        bounds.x =
            clientRect.left +
            (window.pageXOffset || 0) -
            (document.documentElement.clientLeft || 0);
        bounds.y =
            clientRect.top +
            (window.pageYOffset || 0) -
            (document.documentElement.clientTop || 0);
        bounds.width = clientRect.width;
        bounds.height = clientRect.height;
    },

    /**
     * Transforms the pageX value into the scaled coordinate space of the Scale Manager.
     *
     * @method Vsengine.Scale.ScaleManager#transformX
     * @since 3.16.0
     *
     * @param {number} pageX - The DOM pageX value.
     *
     * @return {number} The translated value.
     */
    transformX: function (pageX) {
        return (pageX - this.canvasBounds.left) * this.displayScale.x;
    },

    /**
     * Transforms the pageY value into the scaled coordinate space of the Scale Manager.
     *
     * @method Vsengine.Scale.ScaleManager#transformY
     * @since 3.16.0
     *
     * @param {number} pageY - The DOM pageY value.
     *
     * @return {number} The translated value.
     */
    transformY: function (pageY) {
        return (pageY - this.canvasBounds.top) * this.displayScale.y;
    },

    /**
     * Sends a request to the browser to ask it to go in to full screen mode, using the {@link https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API Fullscreen API}.
     *
     * If the browser does not support this, a `FULLSCREEN_UNSUPPORTED` event will be emitted.
     *
     * This method _must_ be called from a `pointerup` user-input gesture (**not** `pointerdown`). You cannot launch
     * games fullscreen without this, as most browsers block it. Games within an iframe will also be blocked
     * from fullscreen unless the iframe has the `allowfullscreen` attribute.
     *
     * On touch devices, such as Android and iOS Safari, you should always use `pointerup` and NOT `pointerdown`,
     * otherwise the request will fail unless the document in which your game is embedded has already received
     * some form of touch input, which you cannot guarantee. Activating fullscreen via `pointerup` circumvents
     * this issue.
     *
     * Performing an action that navigates to another page, or opens another tab, will automatically cancel
     * fullscreen mode, as will the user pressing the ESC key. To cancel fullscreen mode directly from your game,
     * i.e. by clicking an icon, call the `stopFullscreen` method.
     *
     * A browser can only send one DOM element into fullscreen. You can control which element this is by
     * setting the `fullscreenTarget` property in your game config, or changing the property in the Scale Manager.
     * Note that the game canvas _must_ be a child of the target. If you do not give a target, Vsengine will
     * automatically create a blank `<div>` element and move the canvas into it, before going fullscreen.
     * When it leaves fullscreen, the div will be removed.
     *
     * @method Vsengine.Scale.ScaleManager#startFullscreen
     * @fires Vsengine.Scale.Events#ENTER_FULLSCREEN
     * @fires Vsengine.Scale.Events#FULLSCREEN_FAILED
     * @fires Vsengine.Scale.Events#FULLSCREEN_UNSUPPORTED
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {object} [fullscreenOptions] - The FullscreenOptions dictionary is used to provide configuration options when entering full screen.
     */
    startFullscreen: function (fullscreenOptions) {
        if (fullscreenOptions === undefined) {
            fullscreenOptions = { navigationUI: "hide" };
        }

        var fullscreen = this.fullscreen;

        if (!fullscreen.available) {
            this.emit(Events.FULLSCREEN_UNSUPPORTED);

            return;
        }

        if (!fullscreen.active) {
            var fsTarget = this.getFullscreenTarget();

            if (fullscreen.keyboard) {
                fsTarget[fullscreen.request](Element.ALLOW_KEYBOARD_INPUT);
            } else {
                fsTarget[fullscreen.request](fullscreenOptions);
            }
        }
    },

    /**
     * The browser has successfully entered fullscreen mode.
     *
     * @method Vsengine.Scale.ScaleManager#fullscreenSuccessHandler
     * @private
     * @fires Vsengine.Scale.Events#ENTER_FULLSCREEN
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.17.0
     */
    fullscreenSuccessHandler: function () {
        this.getParentBounds();

        this.refresh();

        this.emit(Events.ENTER_FULLSCREEN);
    },

    /**
     * The browser failed to enter fullscreen mode.
     *
     * @method Vsengine.Scale.ScaleManager#fullscreenErrorHandler
     * @private
     * @fires Vsengine.Scale.Events#FULLSCREEN_FAILED
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.17.0
     *
     * @param {any} error - The DOM error event.
     */
    fullscreenErrorHandler: function (error) {
        this.removeFullscreenTarget();

        this.emit(Events.FULLSCREEN_FAILED, error);
    },

    /**
     * An internal method that gets the target element that is used when entering fullscreen mode.
     *
     * @method Vsengine.Scale.ScaleManager#getFullscreenTarget
     * @since 3.16.0
     *
     * @return {object} The fullscreen target element.
     */
    getFullscreenTarget: function () {
        if (!this.fullscreenTarget) {
            var fsTarget = document.createElement("div");

            fsTarget.style.margin = "0";
            fsTarget.style.padding = "0";
            fsTarget.style.width = "100%";
            fsTarget.style.height = "100%";

            this.fullscreenTarget = fsTarget;

            this._createdFullscreenTarget = true;
        }

        if (this._createdFullscreenTarget) {
            var canvasParent = this.canvas.parentNode;

            canvasParent.insertBefore(this.fullscreenTarget, this.canvas);

            this.fullscreenTarget.appendChild(this.canvas);
        }

        return this.fullscreenTarget;
    },

    /**
     * Removes the fullscreen target that was added to the DOM.
     *
     * @method Vsengine.Scale.ScaleManager#removeFullscreenTarget
     * @since 3.17.0
     */
    removeFullscreenTarget: function () {
        if (this._createdFullscreenTarget) {
            var fsTarget = this.fullscreenTarget;

            if (fsTarget && fsTarget.parentNode) {
                var parent = fsTarget.parentNode;

                parent.insertBefore(this.canvas, fsTarget);

                parent.removeChild(fsTarget);
            }
        }
    },

    /**
     * Calling this method will cancel fullscreen mode, if the browser has entered it.
     *
     * @method Vsengine.Scale.ScaleManager#stopFullscreen
     * @fires Vsengine.Scale.Events#FULLSCREEN_UNSUPPORTED
     * @since 3.16.0
     */
    stopFullscreen: function () {
        var fullscreen = this.fullscreen;

        if (!fullscreen.available) {
            this.emit(Events.FULLSCREEN_UNSUPPORTED);

            return false;
        }

        if (fullscreen.active) {
            document[fullscreen.cancel]();
        }

        this.removeFullscreenTarget();
    },

    /**
     * The browser has successfully left fullscreen mode.
     *
     * @method Vsengine.Scale.ScaleManager#leaveFullScreenSuccessHandler
     * @fires Vsengine.Scale.Events#LEAVE_FULLSCREEN
     * @since 3.85.0
     */
    leaveFullScreenSuccessHandler: function () {
        //  Get the parent size again as it will have changed
        this.getParentBounds();

        this.emit(Events.LEAVE_FULLSCREEN);

        this.refresh();
    },

    /**
     * Toggles the fullscreen mode. If already in fullscreen, calling this will cancel it.
     * If not in fullscreen, this will request the browser to enter fullscreen mode.
     *
     * If the browser does not support this, a `FULLSCREEN_UNSUPPORTED` event will be emitted.
     *
     * This method _must_ be called from a user-input gesture, such as `pointerdown`. You cannot launch
     * games fullscreen without this, as most browsers block it. Games within an iframe will also be blocked
     * from fullscreen unless the iframe has the `allowfullscreen` attribute.
     *
     * @method Vsengine.Scale.ScaleManager#toggleFullscreen
     * @fires Vsengine.Scale.Events#ENTER_FULLSCREEN
     * @fires Vsengine.Scale.Events#LEAVE_FULLSCREEN
     * @fires Vsengine.Scale.Events#FULLSCREEN_UNSUPPORTED
     * @fires Vsengine.Scale.Events#RESIZE
     * @since 3.16.0
     *
     * @param {object} [fullscreenOptions] - The FullscreenOptions dictionary is used to provide configuration options when entering full screen.
     */
    toggleFullscreen: function (fullscreenOptions) {
        if (this.fullscreen.active) {
            this.stopFullscreen();
        } else {
            this.startFullscreen(fullscreenOptions);
        }
    },

    /**
     * An internal method that starts the different DOM event listeners running.
     *
     * @method Vsengine.Scale.ScaleManager#startListeners
     * @since 3.16.0
     */
    startListeners: function () {
        var _this = this;
        var listeners = this.domlisteners;

        listeners.orientationChange = function () {
            _this.updateBounds();

            _this._checkOrientation = true;
            _this.dirty = true;

            _this.refresh();
        };

        listeners.windowResize = function () {
            _this.updateBounds();

            _this.dirty = true;
        };

        //  Only dispatched on mobile devices
        if (screen.orientation && screen.orientation.addEventListener) {
            screen.orientation.addEventListener(
                "change",
                listeners.orientationChange,
                false
            );
        } else {
            window.addEventListener(
                "orientationchange",
                listeners.orientationChange,
                false
            );
        }

        window.addEventListener("resize", listeners.windowResize, false);

        if (this.fullscreen.available) {
            listeners.fullScreenChange = function (event) {
                return _this.onFullScreenChange(event);
            };

            listeners.fullScreenError = function (event) {
                return _this.onFullScreenError(event);
            };

            var vendors = ["webkit", "moz", ""];

            vendors.forEach(function (prefix) {
                document.addEventListener(
                    prefix + "fullscreenchange",
                    listeners.fullScreenChange,
                    false
                );
                document.addEventListener(
                    prefix + "fullscreenerror",
                    listeners.fullScreenError,
                    false
                );
            });

            //  MS Specific
            document.addEventListener(
                "MSFullscreenChange",
                listeners.fullScreenChange,
                false
            );
            document.addEventListener(
                "MSFullscreenError",
                listeners.fullScreenError,
                false
            );
        }
    },

    /**
     * Triggered when a fullscreenchange event is dispatched by the DOM.
     *
     * @method Vsengine.Scale.ScaleManager#onFullScreenChange
     * @protected
     * @since 3.16.0
     */
    onFullScreenChange: function () {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement ||
            document.mozFullScreenElement
        ) {
            this.fullscreenSuccessHandler();
        } else {
            //  They pressed ESC while in fullscreen mode
            this.stopFullscreen();
            this.leaveFullScreenSuccessHandler();
        }
    },

    /**
     * Triggered when a fullscreenerror event is dispatched by the DOM.
     *
     * @method Vsengine.Scale.ScaleManager#onFullScreenError
     * @since 3.16.0
     */
    onFullScreenError: function () {
        this.removeFullscreenTarget();
    },

    /**
     * Get Rectange of visible area.
     *
     * @method Vsengine.Scale.ScaleManager#getViewPort
     * @since 3.60.0
     *
     * @param {Vsengine.Cameras.Scene2D.Camera} [camera] - The camera this viewport is respond upon.
     * @param {Vsengine.Geom.Rectangle} [out] - The Rectangle of visible area.
     *
     * @return {Vsengine.Geom.Rectangle} The Rectangle of visible area.
     */
    getViewPort: function (camera, out) {
        if (!(camera instanceof Camera)) {
            out = camera;
            camera = undefined;
        }

        if (out === undefined) {
            out = new Rectangle();
        }

        var baseSize = this.baseSize;
        var parentSize = this.parentSize;
        var canvasBounds = this.canvasBounds;
        var displayScale = this.displayScale;

        var x = canvasBounds.x >= 0 ? 0 : -(canvasBounds.x * displayScale.x);

        var y = canvasBounds.y >= 0 ? 0 : -(canvasBounds.y * displayScale.y);

        var width;
        if (parentSize.width >= canvasBounds.width) {
            width = baseSize.width;
        } else {
            width =
                baseSize.width -
                (canvasBounds.width - parentSize.width) * displayScale.x;
        }

        var height;
        if (parentSize.height >= canvasBounds.height) {
            height = baseSize.height;
        } else {
            height =
                baseSize.height -
                (canvasBounds.height - parentSize.height) * displayScale.y;
        }

        out.setTo(x, y, width, height);

        if (camera) {
            out.width /= camera.zoomX;
            out.height /= camera.zoomY;
            out.centerX = camera.centerX + camera.scrollX;
            out.centerY = camera.centerY + camera.scrollY;
        }

        return out;
    },

    /**
     * Internal method, called automatically by the game step.
     * Monitors the elapsed time and resize interval to see if a parent bounds check needs to take place.
     *
     * @method Vsengine.Scale.ScaleManager#step
     * @since 3.16.0
     *
     * @param {number} time - The time value from the most recent Game step. Typically a high-resolution timer value, or Date.now().
     * @param {number} delta - The delta value since the last frame. This is smoothed to avoid delta spikes by the TimeStep class.
     */
    step: function (time, delta) {
        if (!this.parent) {
            return;
        }

        this._lastCheck += delta;

        if (this.dirty || this._lastCheck > this.resizeInterval) {
            //  Returns true if the parent bounds have changed size
            if (this.getParentBounds()) {
                this.refresh();
            }

            this.dirty = false;
            this._lastCheck = 0;
        }
    },

    /**
     * Stops all DOM event listeners.
     *
     * @method Vsengine.Scale.ScaleManager#stopListeners
     * @since 3.16.0
     */
    stopListeners: function () {
        var listeners = this.domlisteners;

        if (screen.orientation && screen.orientation.addEventListener) {
            screen.orientation.removeEventListener(
                "change",
                listeners.orientationChange,
                false
            );
        } else {
            window.removeEventListener(
                "orientationchange",
                listeners.orientationChange,
                false
            );
        }

        window.removeEventListener("resize", listeners.windowResize, false);

        var vendors = ["webkit", "moz", ""];

        vendors.forEach(function (prefix) {
            document.removeEventListener(
                prefix + "fullscreenchange",
                listeners.fullScreenChange,
                false
            );
            document.removeEventListener(
                prefix + "fullscreenerror",
                listeners.fullScreenError,
                false
            );
        });

        //  MS Specific
        document.removeEventListener(
            "MSFullscreenChange",
            listeners.fullScreenChange,
            false
        );
        document.removeEventListener(
            "MSFullscreenError",
            listeners.fullScreenError,
            false
        );
    },

    /**
     * Destroys this Scale Manager, releasing all references to external resources.
     * Once destroyed, the Scale Manager cannot be used again.
     *
     * @method Vsengine.Scale.ScaleManager#destroy
     * @since 3.16.0
     */
    destroy: function () {
        this.removeAllListeners();

        this.stopListeners();

        this.game = null;
        this.canvas = null;
        this.canvasBounds = null;
        this.parent = null;
        this.fullscreenTarget = null;

        this.parentSize.destroy();
        this.gameSize.destroy();
        this.baseSize.destroy();
        this.displaySize.destroy();
    },

    /**
     * Is the browser currently in fullscreen mode or not?
     *
     * @name Vsengine.Scale.ScaleManager#isFullscreen
     * @type {boolean}
     * @readonly
     * @since 3.16.0
     */
    isFullscreen: {
        get: function () {
            return this.fullscreen.active;
        },
    },

    /**
     * The game width.
     *
     * This is typically the size given in the game configuration.
     *
     * @name Vsengine.Scale.ScaleManager#width
     * @type {number}
     * @readonly
     * @since 3.16.0
     */
    width: {
        get: function () {
            return this.gameSize.width;
        },
    },

    /**
     * The game height.
     *
     * This is typically the size given in the game configuration.
     *
     * @name Vsengine.Scale.ScaleManager#height
     * @type {number}
     * @readonly
     * @since 3.16.0
     */
    height: {
        get: function () {
            return this.gameSize.height;
        },
    },

    /**
     * Is the device in a portrait orientation as reported by the Orientation API?
     * This value is usually only available on mobile devices.
     *
     * @name Vsengine.Scale.ScaleManager#isPortrait
     * @type {boolean}
     * @readonly
     * @since 3.16.0
     */
    isPortrait: {
        get: function () {
            return this.orientation === CONST.ORIENTATION.PORTRAIT;
        },
    },

    /**
     * Is the device in a landscape orientation as reported by the Orientation API?
     * This value is usually only available on mobile devices.
     *
     * @name Vsengine.Scale.ScaleManager#isLandscape
     * @type {boolean}
     * @readonly
     * @since 3.16.0
     */
    isLandscape: {
        get: function () {
            return this.orientation === CONST.ORIENTATION.LANDSCAPE;
        },
    },

    /**
     * Are the game dimensions portrait? (i.e. taller than they are wide)
     *
     * This is different to the device itself being in a portrait orientation.
     *
     * @name Vsengine.Scale.ScaleManager#isGamePortrait
     * @type {boolean}
     * @readonly
     * @since 3.16.0
     */
    isGamePortrait: {
        get: function () {
            return this.height > this.width;
        },
    },

    /**
     * Are the game dimensions landscape? (i.e. wider than they are tall)
     *
     * This is different to the device itself being in a landscape orientation.
     *
     * @name Vsengine.Scale.ScaleManager#isGameLandscape
     * @type {boolean}
     * @readonly
     * @since 3.16.0
     */
    isGameLandscape: {
        get: function () {
            return this.width > this.height;
        },
    },
});

module.exports = ScaleManager;