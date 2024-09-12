/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Triangle to a destination Triangle.
 *
 * @function Vsengine.Geom.Triangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Triangle} O - [dest,$return]
 *
 * @param {Vsengine.Geom.Triangle} source - The source Triangle to copy the values from.
 * @param {Vsengine.Geom.Triangle} dest - The destination Triangle to copy the values to.
 *
 * @return {Vsengine.Geom.Triangle} The destination Triangle.
 */
var CopyFrom = function (source, dest) {
    return dest.setTo(
        source.x1,
        source.y1,
        source.x2,
        source.y2,
        source.x3,
        source.y3
    );
};

module.exports = CopyFrom;
