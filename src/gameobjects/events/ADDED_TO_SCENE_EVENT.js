/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Object Added to Scene Event.
 *
 * This event is dispatched when a Game Object is added to a Scene.
 *
 * Listen for it on a Game Object instance using `GameObject.on('addedtoscene', listener)`.
 *
 * @event Vsengine.GameObjects.Events#ADDED_TO_SCENE
 * @type {string}
 * @since 3.50.0
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that was added to the Scene.
 * @param {Vsengine.Scene} scene - The Scene to which the Game Object was added.
 */
module.exports = "addedtoscene";
