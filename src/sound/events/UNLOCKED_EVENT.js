/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Manager Unlocked Event.
 *
 * This event is dispatched by the Base Sound Manager, or more typically, an instance of the Web Audio Sound Manager,
 * or the HTML5 Audio Manager. It is dispatched during the update loop when the Sound Manager becomes unlocked. For
 * Web Audio this is on the first user gesture on the page.
 *
 * Listen to it from a Scene using: `this.sound.on('unlocked', listener)`.
 *
 * @event Vsengine.Sound.Events#UNLOCKED
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Sound.BaseSoundManager} soundManager - A reference to the sound manager that emitted the event.
 */
module.exports = "unlocked";
