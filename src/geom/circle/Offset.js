/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Circle by the values given.
 *
 * @function Vsengine.Geom.Circle.Offset
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Circle} O - [circle,$return]
 *
 * @param {Vsengine.Geom.Circle} circle - The Circle to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Circle by.
 * @param {number} y - The amount to vertically offset the Circle by.
 *
 * @return {Vsengine.Geom.Circle} The Circle that was offset.
 */
var Offset = function (circle, x, y) {
    circle.x += x;
    circle.y += y;

    return circle;
};

module.exports = Offset;
