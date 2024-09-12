/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Apply `Math.ceil()` to each coordinate of the given Point.
 *
 * @function Vsengine.Geom.Point.Floor
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [point,$return]
 *
 * @param {Vsengine.Geom.Point} point - The Point to floor.
 *
 * @return {Vsengine.Geom.Point} The Point with `Math.floor()` applied to its coordinates.
 */
var Floor = function (point) {
    return point.setTo(Math.floor(point.x), Math.floor(point.y));
};

module.exports = Floor;
