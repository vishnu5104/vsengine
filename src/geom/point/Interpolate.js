/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("./Point");

/**
 * Returns the linear interpolation point between the two given points, based on `t`.
 *
 * @function Vsengine.Geom.Point.Interpolate
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [out,$return]
 *
 * @param {Vsengine.Geom.Point} pointA - The starting `Point` for the interpolation.
 * @param {Vsengine.Geom.Point} pointB - The target `Point` for the interpolation.
 * @param {number} [t=0] - The amount to interpolate between the two points. Generally, a value between 0 (returns the starting `Point`) and 1 (returns the target `Point`). If omitted, 0 is used.
 * @param {(Vsengine.Geom.Point|object)} [out] - An optional `Point` object whose `x` and `y` values will be set to the result of the interpolation (can also be any object with `x` and `y` properties). If omitted, a new `Point` created and returned.
 *
 * @return {(Vsengine.Geom.Point|object)} Either the object from the `out` argument with the properties `x` and `y` set to the result of the interpolation or a newly created `Point` object.
 */
var Interpolate = function (pointA, pointB, t, out) {
    if (t === undefined) {
        t = 0;
    }
    if (out === undefined) {
        out = new Point();
    }

    out.x = pointA.x + (pointB.x - pointA.x) * t;
    out.y = pointA.y + (pointB.y - pointA.y) * t;

    return out;
};

module.exports = Interpolate;