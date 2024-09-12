/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copies the `x`, `y`, `width` and `height` properties from the `source` Ellipse
 * into the given `dest` Ellipse, then returns the `dest` Ellipse.
 *
 * @function Vsengine.Geom.Ellipse.CopyFrom
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Ellipse} O - [dest,$return]
 *
 * @param {Vsengine.Geom.Ellipse} source - The source Ellipse to copy the values from.
 * @param {Vsengine.Geom.Ellipse} dest - The destination Ellipse to copy the values to.
 *
 * @return {Vsengine.Geom.Ellipse} The destination Ellipse.
 */
var CopyFrom = function (source, dest) {
    return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;
