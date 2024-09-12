/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Detune Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when their detune value changes.
 *
 * Listen to it from a Sound instance using `Sound.on('detune', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('detune', listener);
 * music.play();
 * music.setDetune(200);
 * ```
 *
 * @event Vsengine.Sound.Events#DETUNE
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 * @param {number} detune - The new detune value of the Sound.
 */
module.exports = "detune";
