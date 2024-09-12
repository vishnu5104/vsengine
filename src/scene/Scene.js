/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../utils/Class");
var Systems = require("./Systems");

/**
 * @classdesc
 * A base Vsengine.Scene class which can be extended for your own use.
 *
 * You can also define the optional methods {@link Vsengine.Types.Scenes.SceneInitCallback init()}, {@link Vsengine.Types.Scenes.ScenePreloadCallback preload()}, and {@link Vsengine.Types.Scenes.SceneCreateCallback create()}.
 *
 * @class Scene
 * @memberof Vsengine
 * @constructor
 * @since 3.0.0
 *
 * @param {(string|Vsengine.Types.Scenes.SettingsConfig)} [config] - The scene key or scene specific configuration settings.
 */
var Scene = new Class({
    initialize: function Scene(config) {
        /**
         * The Scene Systems. You must never overwrite this property, or all hell will break lose.
         *
         * @name Vsengine.Scene#sys
         * @type {Vsengine.Scenes.Systems}
         * @since 3.0.0
         */
        this.sys = new Systems(this, config);

        /**
         * A reference to the Vsengine.Game instance.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#game
         * @type {Vsengine.Game}
         * @since 3.0.0
         */
        this.game;

        /**
         * A reference to the global Animation Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#anims
         * @type {Vsengine.Animations.AnimationManager}
         * @since 3.0.0
         */
        this.anims;

        /**
         * A reference to the global Cache.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#cache
         * @type {Vsengine.Cache.CacheManager}
         * @since 3.0.0
         */
        this.cache;

        /**
         * A reference to the global Data Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#registry
         * @type {Vsengine.Data.DataManager}
         * @since 3.0.0
         */
        this.registry;

        /**
         * A reference to the Sound Manager.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#sound
         * @type {(Vsengine.Sound.NoAudioSoundManager|Vsengine.Sound.HTML5AudioSoundManager|Vsengine.Sound.WebAudioSoundManager)}
         * @since 3.0.0
         */
        this.sound;

        /**
         * A reference to the Texture Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#textures
         * @type {Vsengine.Textures.TextureManager}
         * @since 3.0.0
         */
        this.textures;

        /**
         * A Scene specific Event Emitter.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#events
         * @type {Vsengine.Events.EventEmitter}
         * @since 3.0.0
         */
        this.events;

        /**
         * The Scene Camera Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#cameras
         * @type {Vsengine.Cameras.Scene2D.CameraManager}
         * @since 3.0.0
         */
        this.cameras;

        /**
         * The Scene Game Object Factory.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#add
         * @type {Vsengine.GameObjects.GameObjectFactory}
         * @since 3.0.0
         */
        this.add;

        /**
         * The Scene Game Object Creator.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#make
         * @type {Vsengine.GameObjects.GameObjectCreator}
         * @since 3.0.0
         */
        this.make;

        /**
         * A reference to the Scene Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#scene
         * @type {Vsengine.Scenes.ScenePlugin}
         * @since 3.0.0
         */
        this.scene;

        /**
         * The Game Object Display List belonging to this Scene.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#children
         * @type {Vsengine.GameObjects.DisplayList}
         * @since 3.0.0
         */
        this.children;

        /**
         * The Scene Lights Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#lights
         * @type {Vsengine.GameObjects.LightsManager}
         * @since 3.0.0
         */
        this.lights;

        /**
         * A Scene specific Data Manager Plugin.
         *
         * See the `registry` property for the global Data Manager.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#data
         * @type {Vsengine.Data.DataManager}
         * @since 3.0.0
         */
        this.data;

        /**
         * The Scene Input Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#input
         * @type {Vsengine.Input.InputPlugin}
         * @since 3.0.0
         */
        this.input;

        /**
         * The Scene Loader Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#load
         * @type {Vsengine.Loader.LoaderPlugin}
         * @since 3.0.0
         */
        this.load;

        /**
         * The Scene Time and Clock Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#time
         * @type {Vsengine.Time.Clock}
         * @since 3.0.0
         */
        this.time;

        /**
         * The Scene Tween Manager Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map and the plugin is installed.
         *
         * @name Vsengine.Scene#tweens
         * @type {Vsengine.Tweens.TweenManager}
         * @since 3.0.0
         */
        this.tweens;

        /**
         * The Scene Arcade Physics Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.
         *
         * @name Vsengine.Scene#physics
         * @type {Vsengine.Physics.Arcade.ArcadePhysics}
         * @since 3.0.0
         */
        this.physics;

        /**
         * The Scene Matter Physics Plugin.
         *
         * This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.
         *
         * @name Vsengine.Scene#matter
         * @type {Vsengine.Physics.Matter.MatterPhysics}
         * @since 3.0.0
         */
        this.matter;

        if (typeof PLUGIN_FBINSTANT) {
            /**
             * The Facebook Instant Games Plugin.
             *
             * This property will only be available if defined in the Scene Injection Map, the plugin is installed and configured.
             *
             * @name Vsengine.Scene#facebook
             * @type {Vsengine.FacebookInstantGamesPlugin}
             * @since 3.12.0
             */
            this.facebook;
        }

        /**
         * A reference to the global Scale Manager.
         *
         * This property will only be available if defined in the Scene Injection Map.
         *
         * @name Vsengine.Scene#scale
         * @type {Vsengine.Scale.ScaleManager}
         * @since 3.16.2
         */
        this.scale;

        /**
         * A reference to the global Plugin Manager.
         *
         * The Plugin Manager is a global system that allows plugins to register themselves with it, and can then install
         * those plugins into Scenes as required.
         *
         * @name Vsengine.Scene#plugins
         * @type {Vsengine.Plugins.PluginManager}
         * @since 3.0.0
         */
        this.plugins;

        /**
         * A reference to the renderer instance Vsengine is using, either Canvas Renderer or WebGL Renderer.
         *
         * @name Vsengine.Scene#renderer
         * @type {(Vsengine.Renderer.Canvas.CanvasRenderer|Vsengine.Renderer.WebGL.WebGLRenderer)}
         * @since 3.50.0
         */
        this.renderer;
    },

    /**
     * This method should be overridden by your own Scenes.
     *
     * This method is called once per game step while the scene is running.
     *
     * @method Vsengine.Scene#update
     * @since 3.0.0
     *
     * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    update: function () {},
});

module.exports = Scene;
