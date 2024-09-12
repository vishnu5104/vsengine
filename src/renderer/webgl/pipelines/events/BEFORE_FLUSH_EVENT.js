/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The WebGLPipeline Before Flush Event.
 *
 * This event is dispatched by a WebGLPipeline right before it is about to
 * flush and issue a bufferData and drawArrays command.
 *
 * @event Vsengine.Renderer.WebGL.Pipelines.Events#BEFORE_FLUSH
 * @since 3.50.0
 *
 * @param {Vsengine.Renderer.WebGL.WebGLPipeline} pipeline - The pipeline that is about to flush.
 * @param {boolean} isPostFlush - Was this flush invoked as part of a post-process, or not?
 */
module.exports = "pipelinebeforeflush";
