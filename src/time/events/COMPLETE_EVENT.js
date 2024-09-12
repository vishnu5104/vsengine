/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Timeline Complete Event.
 *
 * This event is dispatched by timeline when all timeline events complete.
 *
 * Listen to it from a Timeline instance using `Timeline.on('complete', listener)`, i.e.:
 *
 * ```javascript
 * const timeline = this.add.timeline();
 * timeline.on('complete', listener);
 * timeline.play();
 * ```
 *
 * @event Vsengine.Time.Events#COMPLETE
 * @type {string}
 * @since 3.70.0
 *
 * @param {Vsengine.Time.Timeline} timeline - A reference to the Timeline that emitted the event.
 */
module.exports = "complete";
