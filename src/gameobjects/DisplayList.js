/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../utils/Class");
var List = require("../structs/List");
var PluginCache = require("../plugins/PluginCache");
var GameObjectEvents = require("./events");
var SceneEvents = require("../scene/events");
var StableSort = require("../utils/array/StableSort");

/**
 * @classdesc
 * The Display List plugin.
 *
 * Display Lists belong to a Scene and maintain the list of Game Objects to render every frame.
 *
 * Some of these Game Objects may also be part of the Scene's [Update List]{@link Vsengine.GameObjects.UpdateList}, for updating.
 *
 * @class DisplayList
 * @extends Vsengine.Structs.List.<Vsengine.GameObjects.GameObject>
 * @memberof Vsengine.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {Vsengine.Scene} scene - The Scene that this Display List belongs to.
 */
var DisplayList = new Class({
    Extends: List,

    initialize: function DisplayList(scene) {
        List.call(this, scene);

        /**
         * The flag the determines whether Game Objects should be sorted when `depthSort()` is called.
         *
         * @name Vsengine.GameObjects.DisplayList#sortChildrenFlag
         * @type {boolean}
         * @default false
         * @since 3.0.0
         */
        this.sortChildrenFlag = false;

        /**
         * The Scene that this Display List belongs to.
         *
         * @name Vsengine.GameObjects.DisplayList#scene
         * @type {Vsengine.Scene}
         * @since 3.0.0
         */
        this.scene = scene;

        /**
         * The Scene's Systems.
         *
         * @name Vsengine.GameObjects.DisplayList#systems
         * @type {Vsengine.Scenes.Systems}
         * @since 3.0.0
         */
        this.systems = scene.sys;

        /**
         * The Scene's Event Emitter.
         *
         * @name Vsengine.GameObjects.DisplayList#events
         * @type {Vsengine.Events.EventEmitter}
         * @since 3.50.0
         */
        this.events = scene.sys.events;

        //  Set the List callbacks
        this.addCallback = this.addChildCallback;
        this.removeCallback = this.removeChildCallback;

        this.events.once(SceneEvents.BOOT, this.boot, this);
        this.events.on(SceneEvents.START, this.start, this);
    },

    /**
     * This method is called automatically, only once, when the Scene is first created.
     * Do not invoke it directly.
     *
     * @method Vsengine.GameObjects.DisplayList#boot
     * @private
     * @since 3.5.1
     */
    boot: function () {
        this.events.once(SceneEvents.DESTROY, this.destroy, this);
    },

    /**
     * Internal method called from `List.addCallback`.
     *
     * @method Vsengine.GameObjects.DisplayList#addChildCallback
     * @private
     * @fires Vsengine.Scenes.Events#ADDED_TO_SCENE
     * @fires Vsengine.GameObjects.Events#ADDED_TO_SCENE
     * @since 3.50.0
     *
     * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that was added to the list.
     */
    addChildCallback: function (gameObject) {
        if (gameObject.displayList && gameObject.displayList !== this) {
            gameObject.removeFromDisplayList();
        }

        if (gameObject.parentContainer) {
            gameObject.parentContainer.remove(gameObject);
        }

        if (!gameObject.displayList) {
            this.queueDepthSort();

            gameObject.displayList = this;

            gameObject.emit(
                GameObjectEvents.ADDED_TO_SCENE,
                gameObject,
                this.scene
            );

            this.events.emit(
                SceneEvents.ADDED_TO_SCENE,
                gameObject,
                this.scene
            );
        }
    },

    /**
     * Internal method called from `List.removeCallback`.
     *
     * @method Vsengine.GameObjects.DisplayList#removeChildCallback
     * @private
     * @fires Vsengine.Scenes.Events#REMOVED_FROM_SCENE
     * @fires Vsengine.GameObjects.Events#REMOVED_FROM_SCENE
     * @since 3.50.0
     *
     * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that was removed from the list.
     */
    removeChildCallback: function (gameObject) {
        this.queueDepthSort();

        gameObject.displayList = null;

        gameObject.emit(
            GameObjectEvents.REMOVED_FROM_SCENE,
            gameObject,
            this.scene
        );

        this.events.emit(
            SceneEvents.REMOVED_FROM_SCENE,
            gameObject,
            this.scene
        );
    },

    /**
     * This method is called automatically by the Scene when it is starting up.
     * It is responsible for creating local systems, properties and listening for Scene events.
     * Do not invoke it directly.
     *
     * @method Vsengine.GameObjects.DisplayList#start
     * @private
     * @since 3.5.0
     */
    start: function () {
        this.events.once(SceneEvents.SHUTDOWN, this.shutdown, this);
    },

    /**
     * Force a sort of the display list on the next call to depthSort.
     *
     * @method Vsengine.GameObjects.DisplayList#queueDepthSort
     * @since 3.0.0
     */
    queueDepthSort: function () {
        this.sortChildrenFlag = true;
    },

    /**
     * Immediately sorts the display list if the flag is set.
     *
     * @method Vsengine.GameObjects.DisplayList#depthSort
     * @since 3.0.0
     */
    depthSort: function () {
        if (this.sortChildrenFlag) {
            StableSort(this.list, this.sortByDepth);

            this.sortChildrenFlag = false;
        }
    },

    /**
     * Compare the depth of two Game Objects.
     *
     * @method Vsengine.GameObjects.DisplayList#sortByDepth
     * @since 3.0.0
     *
     * @param {Vsengine.GameObjects.GameObject} childA - The first Game Object.
     * @param {Vsengine.GameObjects.GameObject} childB - The second Game Object.
     *
     * @return {number} The difference between the depths of each Game Object.
     */
    sortByDepth: function (childA, childB) {
        return childA._depth - childB._depth;
    },

    /**
     * Returns an array which contains all objects currently on the Display List.
     * This is a reference to the main list array, not a copy of it, so be careful not to modify it.
     *
     * @method Vsengine.GameObjects.DisplayList#getChildren
     * @since 3.12.0
     *
     * @return {Vsengine.GameObjects.GameObject[]} The group members.
     */
    getChildren: function () {
        return this.list;
    },

    /**
     * The Scene that owns this plugin is shutting down.
     *
     * We need to kill and reset all internal properties as well as stop listening to Scene events.
     *
     * @method Vsengine.GameObjects.DisplayList#shutdown
     * @private
     * @since 3.0.0
     */
    shutdown: function () {
        var list = this.list;

        while (list.length) {
            list[0].destroy(true);
        }

        this.events.off(SceneEvents.SHUTDOWN, this.shutdown, this);
    },

    /**
     * The Scene that owns this plugin is being destroyed.
     * We need to shutdown and then kill off all external references.
     *
     * @method Vsengine.GameObjects.DisplayList#destroy
     * @private
     * @since 3.0.0
     */
    destroy: function () {
        this.shutdown();

        this.events.off(SceneEvents.START, this.start, this);

        this.scene = null;
        this.systems = null;
        this.events = null;
    },
});

PluginCache.register("DisplayList", DisplayList, "displayList");

module.exports = DisplayList;
