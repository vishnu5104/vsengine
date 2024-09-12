/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Pause Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when they are paused.
 *
 * Listen to it from a Sound instance using `Sound.on('pause', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('pause', listener);
 * music.play();
 * music.pause();
 * ```
 *
 * @event Vsengine.Sound.Events#PAUSE
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 */
module.exports = "pause";
