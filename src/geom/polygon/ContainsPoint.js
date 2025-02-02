/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require("./Contains");

/**
 * Checks the given Point again the Polygon to see if the Point lays within its vertices.
 *
 * @function Vsengine.Geom.Polygon.ContainsPoint
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Polygon} polygon - The Polygon to check.
 * @param {Vsengine.Geom.Point} point - The Point to check if it's within the Polygon.
 *
 * @return {boolean} `true` if the Point is within the Polygon, otherwise `false`.
 */
var ContainsPoint = function (polygon, point) {
    return Contains(polygon, point.x, point.y);
};

module.exports = ContainsPoint;
