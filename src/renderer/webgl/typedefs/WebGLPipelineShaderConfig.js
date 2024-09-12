/**
 * @typedef {object} Vsengine.Types.Renderer.WebGL.WebGLPipelineShaderConfig
 * @since 3.50.0
 *
 * @property {string} [name] - The name of the shader. Doesn't have to be unique, but makes shader look-up easier if it is.
 * @property {string} [vertShader] - The source code, as a string, for the vertex shader. If not given, uses the `Vsengine.Types.Renderer.WebGL.WebGLPipelineConfig.vertShader` property instead.
 * @property {string} [fragShader] - The source code, as a string, for the fragment shader. Can include `%count%` and `%forloop%` declarations for multi-texture support. If not given, uses the `Vsengine.Types.Renderer.WebGL.WebGLPipelineConfig.fragShader` property instead.
 * @property {Vsengine.Types.Renderer.WebGL.WebGLPipelineAttributeConfig[]} [attributes] - An array of shader attribute data. All shaders bound to this pipeline must use the same attributes.
 */
