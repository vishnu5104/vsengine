/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Moves each point (vertex) of a Triangle by a given offset, thus moving the entire Triangle by that offset.
 *
 * @function Vsengine.Geom.Triangle.Offset
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Vsengine.Geom.Triangle} triangle - The Triangle to move.
 * @param {number} x - The horizontal offset (distance) by which to move each point. Can be positive or negative.
 * @param {number} y - The vertical offset (distance) by which to move each point. Can be positive or negative.
 *
 * @return {Vsengine.Geom.Triangle} The modified Triangle.
 */
var Offset = function (triangle, x, y) {
    triangle.x1 += x;
    triangle.y1 += y;

    triangle.x2 += x;
    triangle.y2 += y;

    triangle.x3 += x;
    triangle.y3 += y;

    return triangle;
};

module.exports = Offset;