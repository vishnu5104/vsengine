/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Seek Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when they are seeked to a new position.
 *
 * Listen to it from a Sound instance using `Sound.on('seek', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('seek', listener);
 * music.play();
 * music.setSeek(5000);
 * ```
 *
 * @event Vsengine.Sound.Events#SEEK
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 * @param {number} detune - The new detune value of the Sound.
 */
module.exports = "seek";
