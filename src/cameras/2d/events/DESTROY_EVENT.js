/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Destroy Camera Event.
 *
 * This event is dispatched by a Camera instance when it is destroyed by the Camera Manager.
 *
 * Listen for it via either of the following:
 *
 * ```js
 * this.cameras.main.on('cameradestroy', () => {});
 * ```
 *
 * or use the constant, to avoid having to remember the correct event string:
 *
 * ```js
 * this.cameras.main.on(Vsengine.Cameras.Scene2D.Events.DESTROY, () => {});
 * ```
 *
 * @event Vsengine.Cameras.Scene2D.Events#DESTROY
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Cameras.Scene2D.BaseCamera} camera - The camera that was destroyed.
 */
module.exports = "cameradestroy";
