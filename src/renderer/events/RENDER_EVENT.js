/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Render Event.
 *
 * This event is dispatched by the Vsengine Renderer for every camera in every Scene.
 *
 * It is dispatched before any of the children in the Scene have been rendered.
 *
 * @event Vsengine.Renderer.Events#RENDER
 * @type {string}
 * @since 3.50.0
 *
 * @param {Vsengine.Scene} scene - The Scene being rendered.
 * @param {Vsengine.Cameras.Scene2D.Camera} camera - The Scene Camera being rendered.
 */
module.exports = "render";
