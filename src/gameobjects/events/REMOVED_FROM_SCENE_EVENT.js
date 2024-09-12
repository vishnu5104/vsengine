/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Object Removed from Scene Event.
 *
 * This event is dispatched when a Game Object is removed from a Scene.
 *
 * Listen for it on a Game Object instance using `GameObject.on('removedfromscene', listener)`.
 *
 * @event Vsengine.GameObjects.Events#REMOVED_FROM_SCENE
 * @type {string}
 * @since 3.50.0
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that was removed from the Scene.
 * @param {Vsengine.Scene} scene - The Scene from which the Game Object was removed.
 */
module.exports = "removedfromscene";
