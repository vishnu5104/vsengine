/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var AddToDOM = require("../dom/AddToDOM");
var AnimationManager = require("../animations/AnimationManager");
var CacheManager = require("../cache/CacheManager");
var CanvasPool = require("../display/canvas/CanvasPool");
var Class = require("../utils/Class");
var Config = require("./Config");
var CreateDOMContainer = require("../dom/CreateDOMContainer");
var CreateRenderer = require("./CreateRenderer");
var DataManager = require("../data/DataManager");
var DebugHeader = require("./DebugHeader");
var Device = require("../device");
var DOMContentLoaded = require("../dom/DOMContentLoaded");
var EventEmitter = require("eventemitter3");
var Events = require("./events");
var InputManager = require("../input/InputManager");
var PluginCache = require("../plugins/PluginCache");
var PluginManager = require("../plugins/PluginManager");
var ScaleManager = require("../scale/ScaleManager");
var SceneManager = require("../scene/SceneManager");
var TextureEvents = require("../textures/events");
var TextureManager = require("../textures/TextureManager");
var TimeStep = require("./TimeStep");
var VisibilityHandler = require("./VisibilityHandler");

if (typeof FEATURE_SOUND) {
    var SoundManagerCreator = require("../sound/SoundManagerCreator");
}

if (typeof PLUGIN_FBINSTANT) {
    var FacebookInstantGamesPlugin = require("../../plugins/fbinstant/src/FacebookInstantGamesPlugin");
}

/**
 * @classdesc
 * The Vsengine.Game instance is the main controller for the entire Vsengine game. It is responsible
 * for handling the boot process, parsing the configuration values, creating the renderer,
 * and setting-up all of the global Vsengine systems, such as sound and input.
 * Once that is complete it will start the Scene Manager and then begin the main game loop.
 *
 * You should generally avoid accessing any of the systems created by Game, and instead use those
 * made available to you via the Vsengine.Scene Systems class instead.
 *
 * @class Game
 * @memberof Vsengine
 * @constructor
 * @fires Vsengine.Core.Events#BLUR
 * @fires Vsengine.Core.Events#FOCUS
 * @fires Vsengine.Core.Events#HIDDEN
 * @fires Vsengine.Core.Events#VISIBLE
 * @since 3.0.0
 *
 * @param {Vsengine.Types.Core.GameConfig} [GameConfig] - The configuration object for your Vsengine Game instance.
 */
var Game = new Class({
    initialize: function Game(config) {
        /**
         * The parsed Game Configuration object.
         *
         * The values stored within this object are read-only and should not be changed at run-time.
         *
         * @name Vsengine.Game#config
         * @type {Vsengine.Core.Config}
         * @readonly
         * @since 3.0.0
         */
        this.config = new Config(config);

        /**
         * A reference to either the Canvas or WebGL Renderer that this Game is using.
         *
         * @name Vsengine.Game#renderer
         * @type {(Vsengine.Renderer.Canvas.CanvasRenderer|Vsengine.Renderer.WebGL.WebGLRenderer)}
         * @since 3.0.0
         */
        this.renderer = null;

        /**
         * A reference to an HTML Div Element used as the DOM Element Container.
         *
         * Only set if `createDOMContainer` is `true` in the game config (by default it is `false`) and
         * if you provide a parent element to insert the Vsengine Game inside.
         *
         * See the DOM Element Game Object for more details.
         *
         * @name Vsengine.Game#domContainer
         * @type {HTMLDivElement}
         * @since 3.17.0
         */
        this.domContainer = null;

        /**
         * A reference to the HTML Canvas Element that Vsengine uses to render the game.
         * This is created automatically by Vsengine unless you provide a `canvas` property
         * in your Game Config.
         *
         * @name Vsengine.Game#canvas
         * @type {HTMLCanvasElement}
         * @since 3.0.0
         */
        this.canvas = null;

        /**
         * A reference to the Rendering Context belonging to the Canvas Element this game is rendering to.
         * If the game is running under Canvas it will be a 2d Canvas Rendering Context.
         * If the game is running under WebGL it will be a WebGL Rendering Context.
         * This context is created automatically by Vsengine unless you provide a `context` property
         * in your Game Config.
         *
         * @name Vsengine.Game#context
         * @type {(CanvasRenderingContext2D|WebGLRenderingContext)}
         * @since 3.0.0
         */
        this.context = null;

        /**
         * A flag indicating when this Game instance has finished its boot process.
         *
         * @name Vsengine.Game#isBooted
         * @type {boolean}
         * @readonly
         * @since 3.0.0
         */
        this.isBooted = false;

        /**
         * A flag indicating if this Game is currently running its game step or not.
         *
         * @name Vsengine.Game#isRunning
         * @type {boolean}
         * @readonly
         * @since 3.0.0
         */
        this.isRunning = false;

        /**
         * An Event Emitter which is used to broadcast game-level events from the global systems.
         *
         * @name Vsengine.Game#events
         * @type {Vsengine.Events.EventEmitter}
         * @since 3.0.0
         */
        this.events = new EventEmitter();

        /**
         * An instance of the Animation Manager.
         *
         * The Animation Manager is a global system responsible for managing all animations used within your game.
         *
         * @name Vsengine.Game#anims
         * @type {Vsengine.Animations.AnimationManager}
         * @since 3.0.0
         */
        this.anims = new AnimationManager(this);

        /**
         * An instance of the Texture Manager.
         *
         * The Texture Manager is a global system responsible for managing all textures being used by your game.
         *
         * @name Vsengine.Game#textures
         * @type {Vsengine.Textures.TextureManager}
         * @since 3.0.0
         */
        this.textures = new TextureManager(this);

        /**
         * An instance of the Cache Manager.
         *
         * The Cache Manager is a global system responsible for caching, accessing and releasing external game assets.
         *
         * @name Vsengine.Game#cache
         * @type {Vsengine.Cache.CacheManager}
         * @since 3.0.0
         */
        this.cache = new CacheManager(this);

        /**
         * An instance of the Data Manager. This is a global manager, available from any Scene
         * and allows you to share and exchange your own game-level data or events without having
         * to use an internal event system.
         *
         * @name Vsengine.Game#registry
         * @type {Vsengine.Data.DataManager}
         * @since 3.0.0
         */
        this.registry = new DataManager(this, new EventEmitter());

        /**
         * An instance of the Input Manager.
         *
         * The Input Manager is a global system responsible for the capture of browser-level input events.
         *
         * @name Vsengine.Game#input
         * @type {Vsengine.Input.InputManager}
         * @since 3.0.0
         */
        this.input = new InputManager(this, this.config);

        /**
         * An instance of the Scene Manager.
         *
         * The Scene Manager is a global system responsible for creating, modifying and updating the Scenes in your game.
         *
         * @name Vsengine.Game#scene
         * @type {Vsengine.Scenes.SceneManager}
         * @since 3.0.0
         */
        this.scene = new SceneManager(this, this.config.sceneConfig);

        /**
         * A reference to the Device inspector.
         *
         * Contains information about the device running this game, such as OS, browser vendor and feature support.
         * Used by various systems to determine capabilities and code paths.
         *
         * @name Vsengine.Game#device
         * @type {Vsengine.DeviceConf}
         * @since 3.0.0
         */
        this.device = Device;

        /**
         * An instance of the Scale Manager.
         *
         * The Scale Manager is a global system responsible for handling scaling of the game canvas.
         *
         * @name Vsengine.Game#scale
         * @type {Vsengine.Scale.ScaleManager}
         * @since 3.16.0
         */
        this.scale = new ScaleManager(this, this.config);

        /**
         * An instance of the base Sound Manager.
         *
         * The Sound Manager is a global system responsible for the playback and updating of all audio in your game.
         *
         * You can disable the inclusion of the Sound Manager in your build by toggling the webpack `FEATURE_SOUND` flag.
         *
         * @name Vsengine.Game#sound
         * @type {(Vsengine.Sound.NoAudioSoundManager|Vsengine.Sound.HTML5AudioSoundManager|Vsengine.Sound.WebAudioSoundManager)}
         * @since 3.0.0
         */
        this.sound = null;

        if (typeof FEATURE_SOUND) {
            this.sound = SoundManagerCreator.create(this);
        }

        /**
         * An instance of the Time Step.
         *
         * The Time Step is a global system responsible for setting-up and responding to the browser frame events, processing
         * them and calculating delta values. It then automatically calls the game step.
         *
         * @name Vsengine.Game#loop
         * @type {Vsengine.Core.TimeStep}
         * @since 3.0.0
         */
        this.loop = new TimeStep(this, this.config.fps);

        /**
         * An instance of the Plugin Manager.
         *
         * The Plugin Manager is a global system that allows plugins to register themselves with it, and can then install
         * those plugins into Scenes as required.
         *
         * @name Vsengine.Game#plugins
         * @type {Vsengine.Plugins.PluginManager}
         * @since 3.0.0
         */
        this.plugins = new PluginManager(this, this.config);

        if (typeof PLUGIN_FBINSTANT) {
            /**
             * An instance of the Facebook Instant Games Plugin.
             *
             * This will only be available if the plugin has been built into Vsengine,
             * or you're using the special Facebook Instant Games custom build.
             *
             * @name Vsengine.Game#facebook
             * @type {Vsengine.FacebookInstantGamesPlugin}
             * @since 3.13.0
             */
            this.facebook = new FacebookInstantGamesPlugin(this);
        }

        /**
         * Is this Game pending destruction at the start of the next frame?
         *
         * @name Vsengine.Game#pendingDestroy
         * @type {boolean}
         * @private
         * @since 3.5.0
         */
        this.pendingDestroy = false;

        /**
         * Remove the Canvas once the destroy is over?
         *
         * @name Vsengine.Game#removeCanvas
         * @type {boolean}
         * @private
         * @since 3.5.0
         */
        this.removeCanvas = false;

        /**
         * Remove everything when the game is destroyed.
         * You cannot create a new Vsengine instance on the same web page after doing this.
         *
         * @name Vsengine.Game#noReturn
         * @type {boolean}
         * @private
         * @since 3.12.0
         */
        this.noReturn = false;

        /**
         * Does the window the game is running in currently have focus or not?
         * This is modified by the VisibilityHandler.
         *
         * @name Vsengine.Game#hasFocus
         * @type {boolean}
         * @readonly
         * @since 3.9.0
         */
        this.hasFocus = false;

        /**
         * Is the Game currently paused? This will stop everything from updating,
         * except the `TimeStep` and related RequestAnimationFrame or setTimeout.
         * Those will continue stepping, but the core Game step will be skipped.
         *
         * @name Vsengine.Game#isPaused
         * @type {boolean}
         * @since 3.60.0
         */
        this.isPaused = false;

        //  Wait for the DOM Ready event, then call boot.
        DOMContentLoaded(this.boot.bind(this));
    },

    /**
     * This method is called automatically when the DOM is ready. It is responsible for creating the renderer,
     * displaying the Debug Header, adding the game canvas to the DOM and emitting the 'boot' event.
     * It listens for a 'ready' event from the base systems and once received it will call `Game.start`.
     *
     * @method Vsengine.Game#boot
     * @protected
     * @fires Vsengine.Core.Events#BOOT
     * @listens Vsengine.Textures.Events#READY
     * @since 3.0.0
     */
    boot: function () {
        if (!PluginCache.hasCore("EventEmitter")) {
            console.warn("Aborting. Core Plugins missing.");
            return;
        }

        this.isBooted = true;

        this.config.preBoot(this);

        this.scale.preBoot();

        CreateRenderer(this);

        CreateDOMContainer(this);

        DebugHeader(this);

        AddToDOM(this.canvas, this.config.parent);

        //  The Texture Manager has to wait on a couple of non-blocking events before it's fully ready.
        //  So it will emit this internal event when done:
        this.textures.once(TextureEvents.READY, this.texturesReady, this);

        this.events.emit(Events.BOOT);

        if (typeof WEBGL_DEBUG && window) {
            window.PHASER_GAME = this;
        }
    },

    /**
     * Called automatically when the Texture Manager has finished setting up and preparing the
     * default textures.
     *
     * @method Vsengine.Game#texturesReady
     * @private
     * @fires Vsengine.Game#READY
     * @since 3.12.0
     */
    texturesReady: function () {
        //  Start all the other systems
        this.events.emit(Events.READY);

        this.start();
    },

    /**
     * Called automatically by Game.boot once all of the global systems have finished setting themselves up.
     * By this point the Game is now ready to start the main loop running.
     * It will also enable the Visibility Handler.
     *
     * @method Vsengine.Game#start
     * @protected
     * @since 3.0.0
     */
    start: function () {
        this.isRunning = true;

        this.config.postBoot(this);

        if (this.renderer) {
            this.loop.start(this.step.bind(this));
        } else {
            this.loop.start(this.headlessStep.bind(this));
        }

        VisibilityHandler(this);

        var eventEmitter = this.events;

        eventEmitter.on(Events.HIDDEN, this.onHidden, this);
        eventEmitter.on(Events.VISIBLE, this.onVisible, this);
        eventEmitter.on(Events.BLUR, this.onBlur, this);
        eventEmitter.on(Events.FOCUS, this.onFocus, this);
    },

    /**
     * The main Game Step. Called automatically by the Time Step, once per browser frame (typically as a result of
     * Request Animation Frame, or Set Timeout on very old browsers.)
     *
     * The step will update the global managers first, then proceed to update each Scene in turn, via the Scene Manager.
     *
     * It will then render each Scene in turn, via the Renderer. This process emits `prerender` and `postrender` events.
     *
     * @method Vsengine.Game#step
     * @fires Vsengine.Core.Events#PRE_STEP
     * @fires Vsengine.Core.Events#STEP
     * @fires Vsengine.Core.Events#POST_STEP
     * @fires Vsengine.Core.Events#PRE_RENDER
     * @fires Vsengine.Core.Events#POST_RENDER
     * @since 3.0.0
     *
     * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    step: function (time, delta) {
        if (this.pendingDestroy) {
            return this.runDestroy();
        }

        if (this.isPaused) {
            return;
        }

        var eventEmitter = this.events;

        //  Global Managers like Input and Sound update in the prestep

        eventEmitter.emit(Events.PRE_STEP, time, delta);

        //  This is mostly meant for user-land code and plugins

        eventEmitter.emit(Events.STEP, time, delta);

        //  Update the Scene Manager and all active Scenes

        this.scene.update(time, delta);

        //  Our final event before rendering starts

        eventEmitter.emit(Events.POST_STEP, time, delta);

        var renderer = this.renderer;

        //  Run the Pre-render (clearing the canvas, setting background colors, etc)

        renderer.preRender();

        eventEmitter.emit(Events.PRE_RENDER, renderer, time, delta);

        //  The main render loop. Iterates all Scenes and all Cameras in those scenes, rendering to the renderer instance.

        this.scene.render(renderer);

        //  The Post-Render call. Tidies up loose end, takes snapshots, etc.

        renderer.postRender();

        //  The final event before the step repeats. Your last chance to do anything to the canvas before it all starts again.

        eventEmitter.emit(Events.POST_RENDER, renderer, time, delta);
    },

    /**
     * A special version of the Game Step for the HEADLESS renderer only.
     *
     * The main Game Step. Called automatically by the Time Step, once per browser frame (typically as a result of
     * Request Animation Frame, or Set Timeout on very old browsers.)
     *
     * The step will update the global managers first, then proceed to update each Scene in turn, via the Scene Manager.
     *
     * This process emits `prerender` and `postrender` events, even though nothing actually displays.
     *
     * @method Vsengine.Game#headlessStep
     * @fires Vsengine.Game#PRE_RENDER
     * @fires Vsengine.Game#POST_RENDER
     * @since 3.2.0
     *
     * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    headlessStep: function (time, delta) {
        if (this.pendingDestroy) {
            return this.runDestroy();
        }

        if (this.isPaused) {
            return;
        }

        var eventEmitter = this.events;

        //  Global Managers like Input and Sound update in the prestep

        eventEmitter.emit(Events.PRE_STEP, time, delta);

        //  This is mostly meant for user-land code and plugins

        eventEmitter.emit(Events.STEP, time, delta);

        //  Update the Scene Manager and all active Scenes

        this.scene.update(time, delta);

        //  Our final event before rendering starts

        eventEmitter.emit(Events.POST_STEP, time, delta);

        //  Render
        this.scene.isProcessing = false;

        eventEmitter.emit(Events.PRE_RENDER, null, time, delta);

        eventEmitter.emit(Events.POST_RENDER, null, time, delta);
    },

    /**
     * Called automatically by the Visibility Handler.
     * This will pause the main loop and then emit a pause event.
     *
     * @method Vsengine.Game#onHidden
     * @protected
     * @fires Vsengine.Core.Events#PAUSE
     * @since 3.0.0
     */
    onHidden: function () {
        this.loop.pause();

        this.events.emit(Events.PAUSE);
    },

    /**
     * This will pause the entire game and emit a `PAUSE` event.
     *
     * All of Vsengine's internal systems will be paused and the game will not re-render.
     *
     * Note that it does not pause any Loader requests that are currently in-flight.
     *
     * @method Vsengine.Game#pause
     * @fires Vsengine.Core.Events#PAUSE
     * @since 3.60.0
     */
    pause: function () {
        var wasPaused = this.isPaused;

        this.isPaused = true;

        if (!wasPaused) {
            this.events.emit(Events.PAUSE);
        }
    },

    /**
     * Called automatically by the Visibility Handler.
     * This will resume the main loop and then emit a resume event.
     *
     * @method Vsengine.Game#onVisible
     * @protected
     * @fires Vsengine.Core.Events#RESUME
     * @since 3.0.0
     */
    onVisible: function () {
        this.loop.resume();

        this.events.emit(Events.RESUME, this.loop.pauseDuration);
    },

    /**
     * This will resume the entire game and emit a `RESUME` event.
     *
     * All of Vsengine's internal systems will be resumed and the game will start rendering again.
     *
     * @method Vsengine.Game#resume
     * @fires Vsengine.Core.Events#RESUME
     * @since 3.60.0
     */
    resume: function () {
        var wasPaused = this.isPaused;

        this.isPaused = false;

        if (wasPaused) {
            this.events.emit(Events.RESUME, 0);
        }
    },

    /**
     * Called automatically by the Visibility Handler.
     * This will set the main loop into a 'blurred' state, which pauses it.
     *
     * @method Vsengine.Game#onBlur
     * @protected
     * @since 3.0.0
     */
    onBlur: function () {
        this.hasFocus = false;

        this.loop.blur();
    },

    /**
     * Called automatically by the Visibility Handler.
     * This will set the main loop into a 'focused' state, which resumes it.
     *
     * @method Vsengine.Game#onFocus
     * @protected
     * @since 3.0.0
     */
    onFocus: function () {
        this.hasFocus = true;

        this.loop.focus();
    },

    /**
     * Returns the current game frame.
     *
     * When the game starts running, the frame is incremented every time Request Animation Frame, or Set Timeout, fires.
     *
     * @method Vsengine.Game#getFrame
     * @since 3.16.0
     *
     * @return {number} The current game frame.
     */
    getFrame: function () {
        return this.loop.frame;
    },

    /**
     * Returns the time that the current game step started at, as based on `performance.now`.
     *
     * @method Vsengine.Game#getTime
     * @since 3.16.0
     *
     * @return {number} The current game timestamp.
     */
    getTime: function () {
        return this.loop.now;
    },

    /**
     * Flags this Game instance as needing to be destroyed on the _next frame_, making this an asynchronous operation.
     *
     * It will wait until the current frame has completed and then call `runDestroy` internally.
     *
     * If you need to react to the games eventual destruction, listen for the `DESTROY` event.
     *
     * If you **do not** need to run Vsengine again on the same web page you can set the `noReturn` argument to `true` and it will free-up
     * memory being held by the core Vsengine plugins. If you do need to create another game instance on the same page, leave this as `false`.
     *
     * @method Vsengine.Game#destroy
     * @fires Vsengine.Core.Events#DESTROY
     * @since 3.0.0
     *
     * @param {boolean} removeCanvas - Set to `true` if you would like the parent canvas element removed from the DOM, or `false` to leave it in place.
     * @param {boolean} [noReturn=false] - If `true` all the core Vsengine plugins are destroyed. You cannot create another instance of Vsengine on the same web page if you do this.
     */
    destroy: function (removeCanvas, noReturn) {
        if (noReturn === undefined) {
            noReturn = false;
        }

        this.pendingDestroy = true;

        this.removeCanvas = removeCanvas;
        this.noReturn = noReturn;
    },

    /**
     * Destroys this Vsengine.Game instance, all global systems, all sub-systems and all Scenes.
     *
     * @method Vsengine.Game#runDestroy
     * @private
     * @since 3.5.0
     */
    runDestroy: function () {
        this.scene.destroy();

        this.events.emit(Events.DESTROY);

        this.events.removeAllListeners();

        if (this.renderer) {
            this.renderer.destroy();
        }

        if (this.removeCanvas && this.canvas) {
            CanvasPool.remove(this.canvas);

            if (this.canvas.parentNode) {
                this.canvas.parentNode.removeChild(this.canvas);
            }
        }

        if (this.domContainer && this.domContainer.parentNode) {
            this.domContainer.parentNode.removeChild(this.domContainer);
        }

        this.loop.destroy();

        this.pendingDestroy = false;
    },
});

module.exports = Game;

/**
 * "Computers are good at following instructions, but not at reading your mind." - Donald Knuth
 */
