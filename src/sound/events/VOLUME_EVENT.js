/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Volume Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when their volume changes.
 *
 * Listen to it from a Sound instance using `Sound.on('volume', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('volume', listener);
 * music.play();
 * music.setVolume(0.5);
 * ```
 *
 * @event Vsengine.Sound.Events#VOLUME
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 * @param {number} volume - The new volume of the Sound.
 */
module.exports = "volume";
