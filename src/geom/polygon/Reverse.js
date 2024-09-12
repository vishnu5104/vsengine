/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Reverses the order of the points of a Polygon.
 *
 * @function Vsengine.Geom.Polygon.Reverse
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Vsengine.Geom.Polygon} polygon - The Polygon to modify.
 *
 * @return {Vsengine.Geom.Polygon} The modified Polygon.
 */
var Reverse = function (polygon) {
    polygon.points.reverse();

    return polygon;
};

module.exports = Reverse;
