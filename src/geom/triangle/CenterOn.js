/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Centroid = require("./Centroid");
var Offset = require("./Offset");

/**
 * @callback CenterFunction
 *
 * @param {Vsengine.Geom.Triangle} triangle - The Triangle to return the center coordinates of.
 *
 * @return {Vsengine.Math.Vector2} The center point of the Triangle according to the function.
 */

/**
 * Positions the Triangle so that it is centered on the given coordinates.
 *
 * @function Vsengine.Geom.Triangle.CenterOn
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Vsengine.Geom.Triangle} triangle - The triangle to be positioned.
 * @param {number} x - The horizontal coordinate to center on.
 * @param {number} y - The vertical coordinate to center on.
 * @param {CenterFunction} [centerFunc] - The function used to center the triangle. Defaults to Centroid centering.
 *
 * @return {Vsengine.Geom.Triangle} The Triangle that was centered.
 */
var CenterOn = function (triangle, x, y, centerFunc) {
    if (centerFunc === undefined) {
        centerFunc = Centroid;
    }

    //  Get the center of the triangle
    var center = centerFunc(triangle);

    //  Difference
    var diffX = x - center.x;
    var diffY = y - center.y;

    return Offset(triangle, diffX, diffY);
};

module.exports = CenterOn;
