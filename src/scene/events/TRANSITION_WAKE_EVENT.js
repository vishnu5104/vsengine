/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Transition Wake Event.
 *
 * This event is dispatched by the Target Scene of a transition, only if that Scene was asleep before
 * the transition began. If the Scene was not asleep the [TRANSITION_START]{@linkcode Vsengine.Scenes.Events#event:TRANSITION_START} event is dispatched instead.
 *
 * Listen to it from a Scene using `this.events.on('transitionwake', listener)`.
 *
 * The Scene Transition event flow is as follows:
 *
 * 1. [TRANSITION_OUT]{@linkcode Vsengine.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2. [TRANSITION_INIT]{@linkcode Vsengine.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3. [TRANSITION_START]{@linkcode Vsengine.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 4. [TRANSITION_WAKE]{@linkcode Vsengine.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 5. [TRANSITION_COMPLETE]{@linkcode Vsengine.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 *
 * @event Vsengine.Scenes.Events#TRANSITION_WAKE
 * @type {string}
 * @since 3.5.0
 *
 * @param {Vsengine.Scene} from - A reference to the Scene that is being transitioned from.
 * @param {number} duration - The duration of the transition in ms.
 */
module.exports = "transitionwake";
