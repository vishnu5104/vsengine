/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../utils/Class");
var CONST = require("./const");
var DefaultPlugins = require("../plugins/DefaultPlugins");
var Events = require("./events");
var GetPhysicsPlugins = require("./GetPhysicsPlugins");
var GetScenePlugins = require("./GetScenePlugins");
var NOOP = require("../utils/NOOP");
var Settings = require("./Settings");

/**
 * @classdesc
 * The Scene Systems class.
 *
 * This class is available from within a Scene under the property `sys`.
 * It is responsible for managing all of the plugins a Scene has running, including the display list, and
 * handling the update step and renderer. It also contains references to global systems belonging to Game.
 *
 * @class Systems
 * @memberof Vsengine.Scenes
 * @constructor
 * @since 3.0.0
 *
 * @param {Vsengine.Scene} scene - The Scene that owns this Systems instance.
 * @param {(string|Vsengine.Types.Scenes.SettingsConfig)} config - Scene specific configuration settings.
 */
var Systems = new Class({
    initialize: function Systems(scene, config) {
        /**
         * A reference to the Scene that these Systems belong to.
         *
         * @name Vsengine.Scenes.Systems#scene
         * @type {Vsengine.Scene}
         * @since 3.0.0
         */
        this.scene = scene;

        /**
         * A reference to the Vsengine Game instance.
         *
         * @name Vsengine.Scenes.Systems#game
         * @type {Vsengine.Game}
         * @since 3.0.0
         */
        this.game;

        /**
         * A reference to either the Canvas or WebGL Renderer that this Game is using.
         *
         * @name Vsengine.Scenes.Systems#renderer
         * @type {(Vsengine.Renderer.Canvas.CanvasRenderer|Vsengine.Renderer.WebGL.WebGLRenderer)}
         * @since 3.17.0
         */
        this.renderer;

        if (typeof PLUGIN_FBINSTANT) {
            /**
             * The Facebook Instant Games Plugin.
             *
             * @name Vsengine.Scenes.Systems#facebook
             * @type {Vsengine.FacebookInstantGamesPlugin}
             * @since 3.12.0
             */
            this.facebook;
        }

        /**
         * The Scene Configuration object, as passed in when creating the Scene.
         *
         * @name Vsengine.Scenes.Systems#config
         * @type {(string|Vsengine.Types.Scenes.SettingsConfig)}
         * @since 3.0.0
         */
        this.config = config;

        /**
         * The Scene Settings. This is the parsed output based on the Scene configuration.
         *
         * @name Vsengine.Scenes.Systems#settings
         * @type {Vsengine.Types.Scenes.SettingsObject}
         * @since 3.0.0
         */
        this.settings = Settings.create(config);

        /**
         * A handy reference to the Scene canvas / context.
         *
         * @name Vsengine.Scenes.Systems#canvas
         * @type {HTMLCanvasElement}
         * @since 3.0.0
         */
        this.canvas;

        /**
         * A reference to the Canvas Rendering Context being used by the renderer.
         *
         * @name Vsengine.Scenes.Systems#context
         * @type {CanvasRenderingContext2D}
         * @since 3.0.0
         */
        this.context;

        //  Global Systems - these are single-instance global managers that belong to Game

        /**
         * A reference to the global Animations Manager.
         *
         * In the default set-up you can access this from within a Scene via the `this.anims` property.
         *
         * @name Vsengine.Scenes.Systems#anims
         * @type {Vsengine.Animations.AnimationManager}
         * @since 3.0.0
         */
        this.anims;

        /**
         * A reference to the global Cache. The Cache stores all files bought in to Vsengine via
         * the Loader, with the exception of images. Images are stored in the Texture Manager.
         *
         * In the default set-up you can access this from within a Scene via the `this.cache` property.
         *
         * @name Vsengine.Scenes.Systems#cache
         * @type {Vsengine.Cache.CacheManager}
         * @since 3.0.0
         */
        this.cache;

        /**
         * A reference to the global Plugins Manager.
         *
         * In the default set-up you can access this from within a Scene via the `this.plugins` property.
         *
         * @name Vsengine.Scenes.Systems#plugins
         * @type {Vsengine.Plugins.PluginManager}
         * @since 3.0.0
         */
        this.plugins;

        /**
         * A reference to the global registry. This is a game-wide instance of the Data Manager, allowing
         * you to exchange data between Scenes via a universal and shared point.
         *
         * In the default set-up you can access this from within a Scene via the `this.registry` property.
         *
         * @name Vsengine.Scenes.Systems#registry
         * @type {Vsengine.Data.DataManager}
         * @since 3.0.0
         */
        this.registry;

        /**
         * A reference to the global Scale Manager.
         *
         * In the default set-up you can access this from within a Scene via the `this.scale` property.
         *
         * @name Vsengine.Scenes.Systems#scale
         * @type {Vsengine.Scale.ScaleManager}
         * @since 3.15.0
         */
        this.scale;

        /**
         * A reference to the global Sound Manager.
         *
         * In the default set-up you can access this from within a Scene via the `this.sound` property.
         *
         * @name Vsengine.Scenes.Systems#sound
         * @type {(Vsengine.Sound.NoAudioSoundManager|Vsengine.Sound.HTML5AudioSoundManager|Vsengine.Sound.WebAudioSoundManager)}
         * @since 3.0.0
         */
        this.sound;

        /**
         * A reference to the global Texture Manager.
         *
         * In the default set-up you can access this from within a Scene via the `this.textures` property.
         *
         * @name Vsengine.Scenes.Systems#textures
         * @type {Vsengine.Textures.TextureManager}
         * @since 3.0.0
         */
        this.textures;

        //  Core Plugins - these are non-optional Scene plugins, needed by lots of the other systems

        /**
         * A reference to the Scene's Game Object Factory.
         *
         * Use this to quickly and easily create new Game Object's.
         *
         * In the default set-up you can access this from within a Scene via the `this.add` property.
         *
         * @name Vsengine.Scenes.Systems#add
         * @type {Vsengine.GameObjects.GameObjectFactory}
         * @since 3.0.0
         */
        this.add;

        /**
         * A reference to the Scene's Camera Manager.
         *
         * Use this to manipulate and create Cameras for this specific Scene.
         *
         * In the default set-up you can access this from within a Scene via the `this.cameras` property.
         *
         * @name Vsengine.Scenes.Systems#cameras
         * @type {Vsengine.Cameras.Scene2D.CameraManager}
         * @since 3.0.0
         */
        this.cameras;

        /**
         * A reference to the Scene's Display List.
         *
         * Use this to organize the children contained in the display list.
         *
         * In the default set-up you can access this from within a Scene via the `this.children` property.
         *
         * @name Vsengine.Scenes.Systems#displayList
         * @type {Vsengine.GameObjects.DisplayList}
         * @since 3.0.0
         */
        this.displayList;

        /**
         * A reference to the Scene's Event Manager.
         *
         * Use this to listen for Scene specific events, such as `pause` and `shutdown`.
         *
         * In the default set-up you can access this from within a Scene via the `this.events` property.
         *
         * @name Vsengine.Scenes.Systems#events
         * @type {Vsengine.Events.EventEmitter}
         * @since 3.0.0
         */
        this.events;

        /**
         * A reference to the Scene's Game Object Creator.
         *
         * Use this to quickly and easily create new Game Object's. The difference between this and the
         * Game Object Factory, is that the Creator just creates and returns Game Object instances, it
         * doesn't then add them to the Display List or Update List.
         *
         * In the default set-up you can access this from within a Scene via the `this.make` property.
         *
         * @name Vsengine.Scenes.Systems#make
         * @type {Vsengine.GameObjects.GameObjectCreator}
         * @since 3.0.0
         */
        this.make;

        /**
         * A reference to the Scene Manager Plugin.
         *
         * Use this to manipulate both this and other Scene's in your game, for example to launch a parallel Scene,
         * or pause or resume a Scene, or switch from this Scene to another.
         *
         * In the default set-up you can access this from within a Scene via the `this.scene` property.
         *
         * @name Vsengine.Scenes.Systems#scenePlugin
         * @type {Vsengine.Scenes.ScenePlugin}
         * @since 3.0.0
         */
        this.scenePlugin;

        /**
         * A reference to the Scene's Update List.
         *
         * Use this to organize the children contained in the update list.
         *
         * The Update List is responsible for managing children that need their `preUpdate` methods called,
         * in order to process so internal components, such as Sprites with Animations.
         *
         * In the default set-up there is no reference to this from within the Scene itself.
         *
         * @name Vsengine.Scenes.Systems#updateList
         * @type {Vsengine.GameObjects.UpdateList}
         * @since 3.0.0
         */
        this.updateList;

        /**
         * The Scene Update function.
         *
         * This starts out as NOOP during init, preload and create, and at the end of create
         * it swaps to be whatever the Scene.update function is.
         *
         * @name Vsengine.Scenes.Systems#sceneUpdate
         * @type {function}
         * @private
         * @since 3.10.0
         */
        this.sceneUpdate = NOOP;
    },

    /**
     * This method is called only once by the Scene Manager when the Scene is instantiated.
     * It is responsible for setting up all of the Scene plugins and references.
     * It should never be called directly.
     *
     * @method Vsengine.Scenes.Systems#init
     * @protected
     * @fires Vsengine.Scenes.Events#BOOT
     * @since 3.0.0
     *
     * @param {Vsengine.Game} game - A reference to the Vsengine Game instance.
     */
    init: function (game) {
        this.settings.status = CONST.INIT;

        //  This will get replaced by the SceneManager with the actual update function, if it exists, once create is over.
        this.sceneUpdate = NOOP;

        this.game = game;
        this.renderer = game.renderer;

        this.canvas = game.canvas;
        this.context = game.context;

        var pluginManager = game.plugins;

        this.plugins = pluginManager;

        pluginManager.addToScene(this, DefaultPlugins.Global, [
            DefaultPlugins.CoreScene,
            GetScenePlugins(this),
            GetPhysicsPlugins(this),
        ]);

        this.events.emit(Events.BOOT, this);

        this.settings.isBooted = true;
    },

    /**
     * A single game step. Called automatically by the Scene Manager as a result of a Request Animation
     * Frame or Set Timeout call to the main Game instance.
     *
     * @method Vsengine.Scenes.Systems#step
     * @fires Vsengine.Scenes.Events#PRE_UPDATE
     * @fires Vsengine.Scenes.Events#UPDATE
     * @fires Vsengine.Scenes.Events#POST_UPDATE
     * @since 3.0.0
     *
     * @param {number} time - The time value from the most recent Game step. Typically a high-resolution timer value, or Date.now().
     * @param {number} delta - The delta value since the last frame. This is smoothed to avoid delta spikes by the TimeStep class.
     */
    step: function (time, delta) {
        var events = this.events;

        events.emit(Events.PRE_UPDATE, time, delta);

        events.emit(Events.UPDATE, time, delta);

        this.sceneUpdate.call(this.scene, time, delta);

        events.emit(Events.POST_UPDATE, time, delta);
    },

    /**
     * Called automatically by the Scene Manager.
     * Instructs the Scene to render itself via its Camera Manager to the renderer given.
     *
     * @method Vsengine.Scenes.Systems#render
     * @fires Vsengine.Scenes.Events#PRE_RENDER
     * @fires Vsengine.Scenes.Events#RENDER
     * @since 3.0.0
     *
     * @param {(Vsengine.Renderer.Canvas.CanvasRenderer|Vsengine.Renderer.WebGL.WebGLRenderer)} renderer - The renderer that invoked the render call.
     */
    render: function (renderer) {
        var displayList = this.displayList;

        displayList.depthSort();

        this.events.emit(Events.PRE_RENDER, renderer);

        this.cameras.render(renderer, displayList);

        this.events.emit(Events.RENDER, renderer);
    },

    /**
     * Force a sort of the display list on the next render.
     *
     * @method Vsengine.Scenes.Systems#queueDepthSort
     * @since 3.0.0
     */
    queueDepthSort: function () {
        this.displayList.queueDepthSort();
    },

    /**
     * Immediately sorts the display list if the flag is set.
     *
     * @method Vsengine.Scenes.Systems#depthSort
     * @since 3.0.0
     */
    depthSort: function () {
        this.displayList.depthSort();
    },

    /**
     * Pause this Scene.
     *
     * A paused Scene still renders, it just doesn't run any of its update handlers or systems.
     *
     * @method Vsengine.Scenes.Systems#pause
     * @fires Vsengine.Scenes.Events#PAUSE
     * @since 3.0.0
     *
     * @param {object} [data] - A data object that will be passed in the 'pause' event.
     *
     * @return {Vsengine.Scenes.Systems} This Systems object.
     */
    pause: function (data) {
        var settings = this.settings;
        var status = this.getStatus();

        if (status !== CONST.CREATING && status !== CONST.RUNNING) {
            console.warn("Cannot pause non-running Scene", settings.key);
        } else if (this.settings.active) {
            settings.status = CONST.PAUSED;

            settings.active = false;

            this.events.emit(Events.PAUSE, this, data);
        }

        return this;
    },

    /**
     * Resume this Scene from a paused state.
     *
     * @method Vsengine.Scenes.Systems#resume
     * @fires Vsengine.Scenes.Events#RESUME
     * @since 3.0.0
     *
     * @param {object} [data] - A data object that will be passed in the 'resume' event.
     *
     * @return {Vsengine.Scenes.Systems} This Systems object.
     */
    resume: function (data) {
        var events = this.events;
        var settings = this.settings;

        if (!this.settings.active) {
            settings.status = CONST.RUNNING;

            settings.active = true;

            events.emit(Events.RESUME, this, data);
        }

        return this;
    },

    /**
     * Send this Scene to sleep.
     *
     * A sleeping Scene doesn't run its update step or render anything, but it also isn't shut down
     * or has any of its systems or children removed, meaning it can be re-activated at any point and
     * will carry on from where it left off. It also keeps everything in memory and events and callbacks
     * from other Scenes may still invoke changes within it, so be careful what is left active.
     *
     * @method Vsengine.Scenes.Systems#sleep
     * @fires Vsengine.Scenes.Events#SLEEP
     * @since 3.0.0
     *
     * @param {object} [data] - A data object that will be passed in the 'sleep' event.
     *
     * @return {Vsengine.Scenes.Systems} This Systems object.
     */
    sleep: function (data) {
        var settings = this.settings;
        var status = this.getStatus();

        if (status !== CONST.CREATING && status !== CONST.RUNNING) {
            console.warn("Cannot sleep non-running Scene", settings.key);
        } else {
            settings.status = CONST.SLEEPING;

            settings.active = false;
            settings.visible = false;

            this.events.emit(Events.SLEEP, this, data);
        }

        return this;
    },

    /**
     * Wake-up this Scene if it was previously asleep.
     *
     * @method Vsengine.Scenes.Systems#wake
     * @fires Vsengine.Scenes.Events#WAKE
     * @since 3.0.0
     *
     * @param {object} [data] - A data object that will be passed in the 'wake' event.
     *
     * @return {Vsengine.Scenes.Systems} This Systems object.
     */
    wake: function (data) {
        var events = this.events;
        var settings = this.settings;

        settings.status = CONST.RUNNING;

        settings.active = true;
        settings.visible = true;

        events.emit(Events.WAKE, this, data);

        if (settings.isTransition) {
            events.emit(
                Events.TRANSITION_WAKE,
                settings.transitionFrom,
                settings.transitionDuration
            );
        }

        return this;
    },

    /**
     * Returns any data that was sent to this Scene by another Scene.
     *
     * The data is also passed to `Scene.init` and in various Scene events, but
     * you can access it at any point via this method.
     *
     * @method Vsengine.Scenes.Systems#getData
     * @since 3.22.0
     *
     * @return {any} The Scene Data.
     */
    getData: function () {
        return this.settings.data;
    },

    /**
     * Returns the current status of this Scene.
     *
     * @method Vsengine.Scenes.Systems#getStatus
     * @since 3.60.0
     *
     * @return {number} The status of this Scene. One of the `Vsengine.Scene` constants.
     */
    getStatus: function () {
        return this.settings.status;
    },

    /**
     * Can this Scene receive Input events?
     *
     * @method Vsengine.Scenes.Systems#canInput
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Scene can receive Input events.
     */
    canInput: function () {
        var status = this.settings.status;

        return status > CONST.PENDING && status <= CONST.RUNNING;
    },

    /**
     * Is this Scene sleeping?
     *
     * @method Vsengine.Scenes.Systems#isSleeping
     * @since 3.0.0
     *
     * @return {boolean} `true` if this Scene is asleep, otherwise `false`.
     */
    isSleeping: function () {
        return this.settings.status === CONST.SLEEPING;
    },

    /**
     * Is this Scene running?
     *
     * @method Vsengine.Scenes.Systems#isActive
     * @since 3.0.0
     *
     * @return {boolean} `true` if this Scene is running, otherwise `false`.
     */
    isActive: function () {
        return this.settings.status === CONST.RUNNING;
    },

    /**
     * Is this Scene paused?
     *
     * @method Vsengine.Scenes.Systems#isPaused
     * @since 3.13.0
     *
     * @return {boolean} `true` if this Scene is paused, otherwise `false`.
     */
    isPaused: function () {
        return this.settings.status === CONST.PAUSED;
    },

    /**
     * Is this Scene currently transitioning out to, or in from another Scene?
     *
     * @method Vsengine.Scenes.Systems#isTransitioning
     * @since 3.5.0
     *
     * @return {boolean} `true` if this Scene is currently transitioning, otherwise `false`.
     */
    isTransitioning: function () {
        return this.settings.isTransition || this.scenePlugin._target !== null;
    },

    /**
     * Is this Scene currently transitioning out from itself to another Scene?
     *
     * @method Vsengine.Scenes.Systems#isTransitionOut
     * @since 3.5.0
     *
     * @return {boolean} `true` if this Scene is in transition to another Scene, otherwise `false`.
     */
    isTransitionOut: function () {
        return (
            this.scenePlugin._target !== null && this.scenePlugin._duration > 0
        );
    },

    /**
     * Is this Scene currently transitioning in from another Scene?
     *
     * @method Vsengine.Scenes.Systems#isTransitionIn
     * @since 3.5.0
     *
     * @return {boolean} `true` if this Scene is transitioning in from another Scene, otherwise `false`.
     */
    isTransitionIn: function () {
        return this.settings.isTransition;
    },

    /**
     * Is this Scene visible and rendering?
     *
     * @method Vsengine.Scenes.Systems#isVisible
     * @since 3.0.0
     *
     * @return {boolean} `true` if this Scene is visible, otherwise `false`.
     */
    isVisible: function () {
        return this.settings.visible;
    },

    /**
     * Sets the visible state of this Scene.
     * An invisible Scene will not render, but will still process updates.
     *
     * @method Vsengine.Scenes.Systems#setVisible
     * @since 3.0.0
     *
     * @param {boolean} value - `true` to render this Scene, otherwise `false`.
     *
     * @return {Vsengine.Scenes.Systems} This Systems object.
     */
    setVisible: function (value) {
        this.settings.visible = value;

        return this;
    },

    /**
     * Set the active state of this Scene.
     *
     * An active Scene will run its core update loop.
     *
     * @method Vsengine.Scenes.Systems#setActive
     * @since 3.0.0
     *
     * @param {boolean} value - If `true` the Scene will be resumed, if previously paused. If `false` it will be paused.
     * @param {object} [data] - A data object that will be passed in the 'resume' or 'pause' events.
     *
     * @return {Vsengine.Scenes.Systems} This Systems object.
     */
    setActive: function (value, data) {
        if (value) {
            return this.resume(data);
        } else {
            return this.pause(data);
        }
    },

    /**
     * Start this Scene running and rendering.
     * Called automatically by the SceneManager.
     *
     * @method Vsengine.Scenes.Systems#start
     * @fires Vsengine.Scenes.Events#START
     * @fires Vsengine.Scenes.Events#READY
     * @since 3.0.0
     *
     * @param {object} data - Optional data object that may have been passed to this Scene from another.
     */
    start: function (data) {
        var events = this.events;
        var settings = this.settings;

        if (data) {
            settings.data = data;
        }

        settings.status = CONST.START;

        settings.active = true;
        settings.visible = true;

        //  For plugins to listen out for
        events.emit(Events.START, this);

        //  For user-land code to listen out for
        events.emit(Events.READY, this, data);
    },

    /**
     * Shutdown this Scene and send a shutdown event to all of its systems.
     * A Scene that has been shutdown will not run its update loop or render, but it does
     * not destroy any of its plugins or references. It is put into hibernation for later use.
     * If you don't ever plan to use this Scene again, then it should be destroyed instead
     * to free-up resources.
     *
     * @method Vsengine.Scenes.Systems#shutdown
     * @fires Vsengine.Scenes.Events#SHUTDOWN
     * @since 3.0.0
     *
     * @param {object} [data] - A data object that will be passed in the 'shutdown' event.
     */
    shutdown: function (data) {
        var events = this.events;
        var settings = this.settings;

        events.off(Events.TRANSITION_INIT);
        events.off(Events.TRANSITION_START);
        events.off(Events.TRANSITION_COMPLETE);
        events.off(Events.TRANSITION_OUT);

        settings.status = CONST.SHUTDOWN;

        settings.active = false;
        settings.visible = false;

        events.emit(Events.SHUTDOWN, this, data);
    },

    /**
     * Destroy this Scene and send a destroy event all of its systems.
     * A destroyed Scene cannot be restarted.
     * You should not call this directly, instead use `SceneManager.remove`.
     *
     * @method Vsengine.Scenes.Systems#destroy
     * @private
     * @fires Vsengine.Scenes.Events#DESTROY
     * @since 3.0.0
     */
    destroy: function () {
        var events = this.events;
        var settings = this.settings;

        settings.status = CONST.DESTROYED;

        settings.active = false;
        settings.visible = false;

        events.emit(Events.DESTROY, this);

        events.removeAllListeners();

        var props = [
            "scene",
            "game",
            "anims",
            "cache",
            "plugins",
            "registry",
            "sound",
            "textures",
            "add",
            "camera",
            "displayList",
            "events",
            "make",
            "scenePlugin",
            "updateList",
        ];

        for (var i = 0; i < props.length; i++) {
            this[props[i]] = null;
        }
    },
});

module.exports = Systems;
