/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pointer Drag Start Input Event.
 *
 * This event is dispatched by the Input Plugin belonging to a Scene if a pointer starts to drag any Game Object.
 *
 * Listen to this event from within a Scene using: `this.input.on('dragstart', listener)`.
 *
 * A Pointer can only drag a single Game Object at once.
 *
 * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_START]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_DRAG_START} event instead.
 *
 * @event Vsengine.Input.Events#DRAG_START
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {Vsengine.GameObjects.GameObject} gameObject - The interactive Game Object that this pointer is dragging.
 */
module.exports = "dragstart";