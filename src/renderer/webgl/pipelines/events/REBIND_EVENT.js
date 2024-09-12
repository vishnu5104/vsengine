/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The WebGLPipeline ReBind Event.
 *
 * This event is dispatched by a WebGLPipeline when it is re-bound by the Pipeline Manager.
 *
 * @event Vsengine.Renderer.WebGL.Pipelines.Events#REBIND
 * @since 3.50.0
 *
 * @param {Vsengine.Renderer.WebGL.WebGLPipeline} pipeline - The pipeline that was rebound.
 * @param {Vsengine.Renderer.WebGL.WebGLShader} currentShader - The shader that was set as being current.
 */
module.exports = "pipelinerebind";
