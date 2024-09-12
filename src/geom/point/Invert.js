/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Swaps the X and the Y coordinate of a point.
 *
 * @function Vsengine.Geom.Point.Invert
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [point,$return]
 *
 * @param {Vsengine.Geom.Point} point - The Point to modify.
 *
 * @return {Vsengine.Geom.Point} The modified `point`.
 */
var Invert = function (point) {
    return point.setTo(point.y, point.x);
};

module.exports = Invert;
