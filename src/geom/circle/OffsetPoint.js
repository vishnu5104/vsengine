/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Circle by the values given in the `x` and `y` properties of the Point object.
 *
 * @function Vsengine.Geom.Circle.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Circle} O - [circle,$return]
 *
 * @param {Vsengine.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {(Vsengine.Geom.Point|object)} point - The Point object containing the values to offset the Circle by.
 *
 * @return {Vsengine.Geom.Circle} The Circle that was offset.
 */
var OffsetPoint = function (circle, point) {
    circle.x += point.x;
    circle.y += point.y;

    return circle;
};

module.exports = OffsetPoint;
