/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var RotateAroundXY = require("./RotateAroundXY");

/**
 * Rotates a Triangle at a certain angle about a given Point or object with public `x` and `y` properties.
 *
 * @function Vsengine.Geom.Triangle.RotateAroundPoint
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Vsengine.Geom.Triangle} triangle - The Triangle to rotate.
 * @param {Vsengine.Geom.Point} point - The Point to rotate the Triangle about.
 * @param {number} angle - The angle by which to rotate the Triangle, in radians.
 *
 * @return {Vsengine.Geom.Triangle} The rotated Triangle.
 */
var RotateAroundPoint = function (triangle, point, angle) {
    return RotateAroundXY(triangle, point.x, point.y, angle);
};

module.exports = RotateAroundPoint;
