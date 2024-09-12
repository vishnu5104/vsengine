/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var RotateAroundXY = require("./RotateAroundXY");

/**
 * Rotate a line around a point by the given angle in radians.
 *
 * @function Vsengine.Geom.Line.RotateAroundPoint
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Line} O - [line,$return]
 *
 * @param {Vsengine.Geom.Line} line - The line to rotate.
 * @param {(Vsengine.Geom.Point|object)} point - The point to rotate the line around.
 * @param {number} angle - The angle of rotation in radians.
 *
 * @return {Vsengine.Geom.Line} The rotated line.
 */
var RotateAroundPoint = function (line, point, angle) {
    return RotateAroundXY(line, point.x, point.y, angle);
};

module.exports = RotateAroundPoint;
