/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Looped Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when they loop during playback.
 *
 * Listen to it from a Sound instance using `Sound.on('looped', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('looped', listener);
 * music.setLoop(true);
 * music.play();
 * ```
 *
 * This is not to be confused with the [LOOP]{@linkcode Vsengine.Sound.Events#event:LOOP} event, which only emits when the loop state of a Sound is changed.
 *
 * @event Vsengine.Sound.Events#LOOPED
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 */
module.exports = "looped";
