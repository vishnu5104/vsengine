/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compute a random unit vector.
 *
 * Computes random values for the given vector between -1 and 1 that can be used to represent a direction.
 *
 * Optionally accepts a scale value to scale the resulting vector by.
 *
 * @function Vsengine.Math.RandomXY
 * @since 3.0.0
 *
 * @param {Vsengine.Math.Vector2} vector - The Vector to compute random values for.
 * @param {number} [scale=1] - The scale of the random values.
 *
 * @return {Vsengine.Math.Vector2} The given Vector.
 */
var RandomXY = function (vector, scale) {
    if (scale === undefined) {
        scale = 1;
    }

    var r = Math.random() * 2 * Math.PI;

    vector.x = Math.cos(r) * scale;
    vector.y = Math.sin(r) * scale;

    return vector;
};

module.exports = RandomXY;
