/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Apply `Math.ceil()` to each coordinate of the given Point.
 *
 * @function Vsengine.Geom.Point.Ceil
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [point,$return]
 *
 * @param {Vsengine.Geom.Point} point - The Point to ceil.
 *
 * @return {Vsengine.Geom.Point} The Point with `Math.ceil()` applied to its coordinates.
 */
var Ceil = function (point) {
    return point.setTo(Math.ceil(point.x), Math.ceil(point.y));
};

module.exports = Ceil;
