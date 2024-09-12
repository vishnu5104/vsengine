/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Object Move Input Event.
 *
 * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is moved across _any_ interactive Game Object.
 *
 * Listen to this event from within a Scene using: `this.input.on('gameobjectmove', listener)`.
 *
 * To receive this event, the Game Objects must have been set as interactive.
 * See [GameObject.setInteractive]{@link Vsengine.GameObjects.GameObject#setInteractive} for more details.
 *
 * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_MOVE]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_POINTER_MOVE} event instead.
 *
 * The event hierarchy is as follows:
 *
 * 1. [GAMEOBJECT_POINTER_MOVE]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_POINTER_MOVE}
 * 2. [GAMEOBJECT_MOVE]{@linkcode Vsengine.Input.Events#event:GAMEOBJECT_MOVE}
 * 3. [POINTER_MOVE]{@linkcode Vsengine.Input.Events#event:POINTER_MOVE}
 *
 * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
 * the propagation of this event.
 *
 * @event Vsengine.Input.Events#GAMEOBJECT_MOVE
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object the pointer was moved on.
 * @param {Vsengine.Types.Input.EventData} event - The Vsengine input event. You can call `stopPropagation()` to halt it from going any further in the event flow.
 */
module.exports = "gameobjectmove";
