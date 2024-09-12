/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Renders this Game Object with the WebGL Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 *
 * @method Vsengine.GameObjects.Image#renderWebGL
 * @since 3.0.0
 * @private
 *
 * @param {Vsengine.Renderer.WebGL.WebGLRenderer} renderer - A reference to the current active WebGL renderer.
 * @param {Vsengine.GameObjects.Image} src - The Game Object being rendered in this call.
 * @param {Vsengine.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
 * @param {Vsengine.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
 */
var ImageWebGLRenderer = function (renderer, src, camera, parentMatrix) {
    camera.addToRenderList(src);

    this.pipeline.batchSprite(src, camera, parentMatrix);
};

module.exports = ImageWebGLRenderer;
