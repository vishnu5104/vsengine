/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("../const");

/**
 * Takes an angle in Phasers default clockwise format and converts it so that
 * 0 is North, 90 is West, 180 is South and 270 is East,
 * therefore running counter-clockwise instead of clockwise.
 *
 * You can pass in the angle from a Game Object using:
 *
 * ```javascript
 * var converted = CounterClockwise(gameobject.rotation);
 * ```
 *
 * All values for this function are in radians.
 *
 * @function Vsengine.Math.Angle.CounterClockwise
 * @since 3.16.0
 *
 * @param {number} angle - The angle to convert, in radians.
 *
 * @return {number} The converted angle, in radians.
 */
var CounterClockwise = function (angle) {
    if (angle > Math.PI) {
        angle -= CONST.PI2;
    }

    return Math.abs(
        (((angle + CONST.TAU) % CONST.PI2) - CONST.PI2) % CONST.PI2
    );
};

module.exports = CounterClockwise;
