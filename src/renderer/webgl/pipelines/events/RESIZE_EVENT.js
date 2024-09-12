/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The WebGLPipeline Resize Event.
 *
 * This event is dispatched by a WebGLPipeline when it is resized, usually as a result
 * of the Renderer resizing.
 *
 * @event Vsengine.Renderer.WebGL.Pipelines.Events#RESIZE
 * @since 3.50.0
 *
 * @param {number} width - The new width of the pipeline.
 * @param {number} height - The new height of the pipeline.
 * @param {Vsengine.Renderer.WebGL.WebGLPipeline} pipeline - The pipeline that was resized.
 */
module.exports = "pipelineresize";
