/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pause All Sounds Event.
 *
 * This event is dispatched by the Base Sound Manager, or more typically, an instance of the Web Audio Sound Manager,
 * or the HTML5 Audio Manager. It is dispatched when the `pauseAll` method is invoked and after all current Sounds
 * have been paused.
 *
 * Listen to it from a Scene using: `this.sound.on('pauseall', listener)`.
 *
 * @event Vsengine.Sound.Events#PAUSE_ALL
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Sound.BaseSoundManager} soundManager - A reference to the sound manager that emitted the event.
 */
module.exports = "pauseall";
