/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The WebGLPipeline After Flush Event.
 *
 * This event is dispatched by a WebGLPipeline right after it has issued a drawArrays command
 * and cleared its vertex count.
 *
 * @event Vsengine.Renderer.WebGL.Pipelines.Events#AFTER_FLUSH
 * @since 3.50.0
 *
 * @param {Vsengine.Renderer.WebGL.WebGLPipeline} pipeline - The pipeline that has flushed.
 * @param {boolean} isPostFlush - Was this flush invoked as part of a post-process, or not?
 */
module.exports = "pipelineafterflush";
