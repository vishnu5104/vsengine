/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Object Drop Event.
 *
 * This event is dispatched by an interactive Game Object if a pointer drops it on a Drag Target.
 *
 * Listen to this event from a Game Object using: `gameObject.on('drop', listener)`.
 * Note that the scope of the listener is automatically set to be the Game Object instance itself.
 *
 * To receive this event, the Game Object must have been set as interactive and enabled for drag.
 * See [GameObject.setInteractive]{@link Vsengine.GameObjects.GameObject#setInteractive} for more details.
 *
 * @event Vsengine.Input.Events#GAMEOBJECT_DROP
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {Vsengine.GameObjects.GameObject} target - The Drag Target the `gameObject` has been dropped on.
 */
module.exports = "drop";