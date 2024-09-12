/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
 *
 * @function Vsengine.Geom.Rectangle.Ceil
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to adjust.
 *
 * @return {Vsengine.Geom.Rectangle} The adjusted Rectangle.
 */
var Ceil = function (rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);

    return rect;
};

module.exports = Ceil;
