/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Tranlates the points of the given Polygon.
 *
 * @function Vsengine.Geom.Polygon.Translate
 * @since 3.50.0
 *
 * @generic {Vsengine.Geom.Polygon} O - [polygon,$return]
 *
 * @param {Vsengine.Geom.Polygon} polygon - The Polygon to modify.
 * @param {number} x - The amount to horizontally translate the points by.
 * @param {number} y - The amount to vertically translate the points by.
 *
 * @return {Vsengine.Geom.Polygon} The modified Polygon.
 */
var Translate = function (polygon, x, y) {
    var points = polygon.points;

    for (var i = 0; i < points.length; i++) {
        points[i].x += x;
        points[i].y += y;
    }

    return polygon;
};

module.exports = Translate;
