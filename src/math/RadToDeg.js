/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("./const");

/**
 * Convert the given angle in radians, to the equivalent angle in degrees.
 *
 * @function Vsengine.Math.RadToDeg
 * @since 3.0.0
 *
 * @param {number} radians - The angle in radians to convert ot degrees.
 *
 * @return {number} The given angle converted to degrees.
 */
var RadToDeg = function (radians) {
    return radians * CONST.RAD_TO_DEG;
};

module.exports = RadToDeg;
