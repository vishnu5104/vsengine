/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Renderer
 */

/**
 * @namespace Vsengine.Types.Renderer
 */

module.exports = {
    Events: require("./events"),
    Snapshot: require("./snapshot"),
};

if (typeof CANVAS_RENDERER) {
    module.exports.Canvas = require("./canvas");
}

if (typeof WEBGL_RENDERER) {
    module.exports.WebGL = require("./webgl");
}
