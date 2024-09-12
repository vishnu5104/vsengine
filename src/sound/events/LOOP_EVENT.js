/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Loop Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when their loop state is changed.
 *
 * Listen to it from a Sound instance using `Sound.on('loop', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('loop', listener);
 * music.setLoop(true);
 * ```
 *
 * This is not to be confused with the [LOOPED]{@linkcode Vsengine.Sound.Events#event:LOOPED} event, which emits each time a Sound loops during playback.
 *
 * @event Vsengine.Sound.Events#LOOP
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 * @param {boolean} loop - The new loop value. `true` if the Sound will loop, otherwise `false`.
 */
module.exports = "loop";
