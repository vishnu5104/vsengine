/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Pre-Render Event.
 *
 * This event is dispatched by the Vsengine Renderer. This happens right at the start of the render
 * process, after the context has been cleared, the scissors enabled (WebGL only) and everything has been
 * reset ready for the render.
 *
 * @event Vsengine.Renderer.Events#PRE_RENDER
 * @type {string}
 * @since 3.50.0
 */
module.exports = "prerender";
