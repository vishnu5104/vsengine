/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../utils/Class");
var LightsManager = require("./LightsManager");
var PluginCache = require("../../plugins/PluginCache");
var SceneEvents = require("../../scene/events");

/**
 * @classdesc
 * A Scene plugin that provides a {@link Vsengine.GameObjects.LightsManager} for the Light2D pipeline.
 *
 * Available from within a Scene via `this.lights`.
 *
 * Add Lights using the {@link Vsengine.GameObjects.LightsManager#addLight} method:
 *
 * ```javascript
 * // Enable the Lights Manager because it is disabled by default
 * this.lights.enable();
 *
 * // Create a Light at [400, 300] with a radius of 200
 * this.lights.addLight(400, 300, 200);
 * ```
 *
 * For Game Objects to be affected by the Lights when rendered, you will need to set them to use the `Light2D` pipeline like so:
 *
 * ```javascript
 * sprite.setPipeline('Light2D');
 * ```
 *
 * Note that you cannot use this pipeline on Graphics Game Objects or Shape Game Objects.
 *
 * @class LightsPlugin
 * @extends Vsengine.GameObjects.LightsManager
 * @memberof Vsengine.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {Vsengine.Scene} scene - The Scene that this Lights Plugin belongs to.
 */
var LightsPlugin = new Class({
    Extends: LightsManager,

    initialize: function LightsPlugin(scene) {
        /**
         * A reference to the Scene that this Lights Plugin belongs to.
         *
         * @name Vsengine.GameObjects.LightsPlugin#scene
         * @type {Vsengine.Scene}
         * @since 3.0.0
         */
        this.scene = scene;

        /**
         * A reference to the Scene's systems.
         *
         * @name Vsengine.GameObjects.LightsPlugin#systems
         * @type {Vsengine.Scenes.Systems}
         * @since 3.0.0
         */
        this.systems = scene.sys;

        if (!scene.sys.settings.isBooted) {
            scene.sys.events.once(SceneEvents.BOOT, this.boot, this);
        }

        LightsManager.call(this);
    },

    /**
     * Boot the Lights Plugin.
     *
     * @method Vsengine.GameObjects.LightsPlugin#boot
     * @since 3.0.0
     */
    boot: function () {
        var eventEmitter = this.systems.events;

        eventEmitter.on(SceneEvents.SHUTDOWN, this.shutdown, this);
        eventEmitter.on(SceneEvents.DESTROY, this.destroy, this);
    },

    /**
     * Destroy the Lights Plugin.
     *
     * Cleans up all references.
     *
     * @method Vsengine.GameObjects.LightsPlugin#destroy
     * @since 3.0.0
     */
    destroy: function () {
        this.shutdown();

        this.scene = undefined;
        this.systems = undefined;
    },
});

PluginCache.register("LightsPlugin", LightsPlugin, "lights");

module.exports = LightsPlugin;