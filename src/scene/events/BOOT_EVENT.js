/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Boot Event.
 *
 * This event is dispatched by a Scene during the Scene Systems boot process. Primarily used by Scene Plugins.
 *
 * Listen to it from a Scene using `this.events.on('boot', listener)`.
 *
 * @event Vsengine.Scenes.Events#BOOT
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = "boot";
