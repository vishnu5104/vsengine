/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pointer Move Input Event.
 *
 * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is moved anywhere.
 *
 * Listen to this event from within a Scene using: `this.input.on('pointermove', listener)`.
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
 * @event Vsengine.Input.Events#POINTER_MOVE
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Pointer} pointer - The Pointer responsible for triggering this event.
 * @param {Vsengine.GameObjects.GameObject[]} currentlyOver - An array containing all interactive Game Objects that the pointer was over when the event was created.
 */
module.exports = "pointermove";
