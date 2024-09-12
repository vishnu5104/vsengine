/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the angle of the line in radians.
 *
 * @function Vsengine.Geom.Line.Angle
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Line} line - The line to calculate the angle of.
 *
 * @return {number} The angle of the line, in radians.
 */
var Angle = function (line) {
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
};

module.exports = Angle;
