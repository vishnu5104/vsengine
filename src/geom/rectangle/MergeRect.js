/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Merges the source rectangle into the target rectangle and returns the target.
 * Neither rectangle should have a negative width or height.
 *
 * @function Vsengine.Geom.Rectangle.MergeRect
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [target,$return]
 *
 * @param {Vsengine.Geom.Rectangle} target - Target rectangle. Will be modified to include source rectangle.
 * @param {Vsengine.Geom.Rectangle} source - Rectangle that will be merged into target rectangle.
 *
 * @return {Vsengine.Geom.Rectangle} Modified target rectangle that contains source rectangle.
 */
var MergeRect = function (target, source) {
    var minX = Math.min(target.x, source.x);
    var maxX = Math.max(target.right, source.right);

    target.x = minX;
    target.width = maxX - minX;

    var minY = Math.min(target.y, source.y);
    var maxY = Math.max(target.bottom, source.bottom);

    target.y = minY;
    target.height = maxY - minY;

    return target;
};

module.exports = MergeRect;
