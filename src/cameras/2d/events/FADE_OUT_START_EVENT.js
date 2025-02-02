/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Camera Fade Out Start Event.
 *
 * This event is dispatched by a Camera instance when the Fade Out Effect starts.
 *
 * Listen to it from a Camera instance using `Camera.on('camerafadeoutstart', listener)`.
 *
 * @event Vsengine.Cameras.Scene2D.Events#FADE_OUT_START
 * @type {string}
 * @since 3.3.0
 *
 * @param {Vsengine.Cameras.Scene2D.Camera} camera - The camera that the effect began on.
 * @param {Vsengine.Cameras.Scene2D.Effects.Fade} effect - A reference to the effect instance.
 * @param {number} duration - The duration of the effect.
 * @param {number} red - The red color channel value.
 * @param {number} green - The green color channel value.
 * @param {number} blue - The blue color channel value.
 */
module.exports = "camerafadeoutstart";
