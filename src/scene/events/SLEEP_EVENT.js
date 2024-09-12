/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Sleep Event.
 *
 * This event is dispatched by a Scene when it is sent to sleep, either directly via the `sleep` method,
 * or as an action from another Scene.
 *
 * Listen to it from a Scene using `this.events.on('sleep', listener)`.
 *
 * @event Vsengine.Scenes.Events#SLEEP
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was sent to sleep.
 */
module.exports = "sleep";
