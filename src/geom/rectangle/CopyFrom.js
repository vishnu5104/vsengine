/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Rectangle to a destination Rectangle.
 *
 * @function Vsengine.Geom.Rectangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [dest,$return]
 *
 * @param {Vsengine.Geom.Rectangle} source - The source Rectangle to copy the values from.
 * @param {Vsengine.Geom.Rectangle} dest - The destination Rectangle to copy the values to.
 *
 * @return {Vsengine.Geom.Rectangle} The destination Rectangle.
 */
var CopyFrom = function (source, dest) {
    return dest.setTo(source.x, source.y, source.width, source.height);
};

module.exports = CopyFrom;
