/**
 * @author       samme
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the squared distance between two points.
 *
 * @function Vsengine.Math.Distance.BetweenPointsSquared
 * @since 3.22.0
 *
 * @param {Vsengine.Types.Math.Vector2Like} a - The first point.
 * @param {Vsengine.Types.Math.Vector2Like} b - The second point.
 *
 * @return {number} The squared distance between the points.
 */
var DistanceBetweenPointsSquared = function (a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return dx * dx + dy * dy;
};

module.exports = DistanceBetweenPointsSquared;
