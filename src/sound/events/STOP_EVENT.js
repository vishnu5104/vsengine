/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Sound Stop Event.
 *
 * This event is dispatched by both Web Audio and HTML5 Audio Sound objects when they are stopped.
 *
 * Listen to it from a Sound instance using `Sound.on('stop', listener)`, i.e.:
 *
 * ```javascript
 * var music = this.sound.add('key');
 * music.on('stop', listener);
 * music.play();
 * music.stop();
 * ```
 *
 * @event Vsengine.Sound.Events#STOP
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Sound.WebAudioSound|Vsengine.Sound.HTML5AudioSound)} sound - A reference to the Sound that emitted the event.
 */
module.exports = "stop";