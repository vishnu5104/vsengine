/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Video Game Object Error Event.
 *
 * This event is dispatched when a Video tries to play a source that does not exist, or is the wrong file type.
 *
 * Listen for it from a Video Game Object instance using `Video.on('error', listener)`.
 *
 * @event Vsengine.GameObjects.Events#VIDEO_ERROR
 * @type {string}
 * @since 3.20.0
 *
 * @param {Vsengine.GameObjects.Video} video - The Video Game Object which threw the error.
 * @param {DOMException|string} event - The native DOM event the browser raised during playback.
 */
module.exports = "error";
