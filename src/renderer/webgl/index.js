/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var WEBGL_CONST = require("./const");
var Extend = require("../../utils/object/Extend");

/**
 * @namespace Vsengine.Renderer.WebGL
 */

var WebGL = {
    PipelineManager: require("./PipelineManager"),
    Pipelines: require("./pipelines"),
    RenderTarget: require("./RenderTarget"),
    Utils: require("./Utils"),
    WebGLPipeline: require("./WebGLPipeline"),
    WebGLRenderer: require("./WebGLRenderer"),
    WebGLShader: require("./WebGLShader"),
    Wrappers: require("./wrappers"),
};

//   Merge in the consts

WebGL = Extend(false, WebGL, WEBGL_CONST);

//  Export it

module.exports = WebGL;
