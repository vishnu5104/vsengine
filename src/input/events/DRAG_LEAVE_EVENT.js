/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pointer Drag Leave Input Event.
 *
 * This event is dispatched by the Input Plugin belonging to a Scene if a pointer drags a Game Object out of a Drag Target.
 *
 * Listen to this event from within a Scene using: `this.input.on('dragleave', listener)`.
 *
 * A Pointer can only drag a single Game Object at once.
 *
 * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_LEAVE]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_DRAG_LEAVE} event instead.
 *
 * @event Vsengine.Input.Events#DRAG_LEAVE
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {Vsengine.GameObjects.GameObject} gameObject - The interactive Game Object that this pointer is dragging.
 * @param {Vsengine.GameObjects.GameObject} target - The drag target that this pointer has left.
 */
module.exports = "dragleave";
