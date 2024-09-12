/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Object Pointer Up Event.
 *
 * This event is dispatched by an interactive Game Object if a pointer is released while over it.
 *
 * Listen to this event from a Game Object using: `gameObject.on('pointerup', listener)`.
 * Note that the scope of the listener is automatically set to be the Game Object instance itself.
 *
 * To receive this event, the Game Object must have been set as interactive.
 * See [GameObject.setInteractive]{@link Vsengine.GameObjects.GameObject#setInteractive} for more details.
 *
 * The event hierarchy is as follows:
 *
 * 1. [GAMEOBJECT_POINTER_UP]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_POINTER_UP}
 * 2. [GAMEOBJECT_UP]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_UP}
 * 3. [POINTER_UP]{@linkcode Vsengine.Input.Events#event:POINTER_UP} or [POINTER_UP_OUTSIDE]{@linkcode Vsengine.Input.Events#event:POINTER_UP_OUTSIDE}
 *
 * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
 * the propagation of this event.
 *
 * @event Vsengine.Input.Events#GAMEOBJECT_POINTER_UP
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {number} localX - The x coordinate that the Pointer interacted with this object on, relative to the Game Object's top-left position.
 * @param {number} localY - The y coordinate that the Pointer interacted with this object on, relative to the Game Object's top-left position.
 * @param {Vsengine.Types.Input.EventData} event - The Vsengine input event. You can call `stopPropagation()` to halt it from going any further in the event flow.
 */
module.exports = "pointerup";
