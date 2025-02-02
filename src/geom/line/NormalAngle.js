/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MATH_CONST = require("../../math/const");
var Wrap = require("../../math/Wrap");
var Angle = require("./Angle");

/**
 * Get the angle of the normal of the given line in radians.
 *
 * @function Vsengine.Geom.Line.NormalAngle
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Line} line - The line to calculate the angle of the normal of.
 *
 * @return {number} The angle of the normal of the line in radians.
 */
var NormalAngle = function (line) {
    var angle = Angle(line) - MATH_CONST.TAU;

    return Wrap(angle, -Math.PI, Math.PI);
};

module.exports = NormalAngle;
