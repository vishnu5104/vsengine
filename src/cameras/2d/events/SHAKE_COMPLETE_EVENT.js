/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Camera Shake Complete Event.
 *
 * This event is dispatched by a Camera instance when the Shake Effect completes.
 *
 * Listen for it via either of the following:
 *
 * ```js
 * this.cameras.main.on('camerashakecomplete', () => {});
 * ```
 *
 * or use the constant, to avoid having to remember the correct event string:
 *
 * ```js
 * this.cameras.main.on(Vsengine.Cameras.Scene2D.Events.SHAKE_COMPLETE, () => {});
 * ```
 *
 * @event Vsengine.Cameras.Scene2D.Events#SHAKE_COMPLETE
 * @type {string}
 * @since 3.3.0
 *
 * @param {Vsengine.Cameras.Scene2D.Camera} camera - The camera that the effect began on.
 * @param {Vsengine.Cameras.Scene2D.Effects.Shake} effect - A reference to the effect instance.
 */
module.exports = "camerashakecomplete";
