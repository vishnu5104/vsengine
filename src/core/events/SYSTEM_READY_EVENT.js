/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * This event is dispatched when the Scene Manager has created the System Scene,
 * which other plugins and systems may use to initialize themselves.
 *
 * This event is dispatched just once by the Game instance.
 *
 * @event Vsengine.Core.Events#SYSTEM_READY
 * @type {string}
 * @since 3.70.0
 *
 * @param {Vsengine.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 */
module.exports = "systemready";
