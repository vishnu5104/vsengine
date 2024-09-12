/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Triangle = require("./Triangle");

/**
 * Clones a Triangle object.
 *
 * @function Vsengine.Geom.Triangle.Clone
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Triangle} source - The Triangle to clone.
 *
 * @return {Vsengine.Geom.Triangle} A new Triangle identical to the given one but separate from it.
 */
var Clone = function (source) {
    return new Triangle(
        source.x1,
        source.y1,
        source.x2,
        source.y2,
        source.x3,
        source.y3
    );
};

module.exports = Clone;
