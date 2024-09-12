/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var RotateAroundXY = require("./RotateAroundXY");

/**
 * Rotate a line around its midpoint by the given angle in radians.
 *
 * @function Vsengine.Geom.Line.Rotate
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Line} O - [line,$return]
 *
 * @param {Vsengine.Geom.Line} line - The line to rotate.
 * @param {number} angle - The angle of rotation in radians.
 *
 * @return {Vsengine.Geom.Line} The rotated line.
 */
var Rotate = function (line, angle) {
    var x = (line.x1 + line.x2) / 2;
    var y = (line.y1 + line.y2) / 2;

    return RotateAroundXY(line, x, y, angle);
};

module.exports = Rotate;
