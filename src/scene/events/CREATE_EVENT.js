/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Create Event.
 *
 * This event is dispatched by a Scene after it has been created by the Scene Manager.
 *
 * If a Scene has a `create` method then this event is emitted _after_ that has run.
 *
 * If there is a transition, this event will be fired after the `TRANSITION_START` event.
 *
 * Listen to it from a Scene using `this.events.on('create', listener)`.
 *
 * @event Vsengine.Scenes.Events#CREATE
 * @type {string}
 * @since 3.17.0
 *
 * @param {Vsengine.Scene} scene - A reference to the Scene that emitted this event.
 */
module.exports = "create";
