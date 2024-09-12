/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var NOOP = require("../utils/NOOP");
var renderWebGL = NOOP;
var renderCanvas = NOOP;

if (typeof WEBGL_RENDERER) {
    renderWebGL = require("./TilemapLayerWebGLRenderer");
}

if (typeof CANVAS_RENDERER) {
    renderCanvas = require("./TilemapLayerCanvasRenderer");
}

module.exports = {
    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas,
};
