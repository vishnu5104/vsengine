/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position and size up to the smallest integer greater than or equal to each respective value.
 *
 * @function Vsengine.Geom.Rectangle.CeilAll
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to modify.
 *
 * @return {Vsengine.Geom.Rectangle} The modified Rectangle.
 */
var CeilAll = function (rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    rect.width = Math.ceil(rect.width);
    rect.height = Math.ceil(rect.height);

    return rect;
};

module.exports = CeilAll;
