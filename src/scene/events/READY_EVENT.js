/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Ready Event.
 *
 * This event is dispatched by a Scene during the Scene Systems start process.
 * By this point in the process the Scene is now fully active and rendering.
 * This event is meant for your game code to use, as all plugins have responded to the earlier 'start' event.
 *
 * Listen to it from a Scene using `this.events.on('ready', listener)`.
 *
 * @event Vsengine.Scenes.Events#READY
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was started.
 */
module.exports = "ready";
