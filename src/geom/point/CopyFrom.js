/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Point to a destination Point.
 *
 * @function Vsengine.Geom.Point.CopyFrom
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [dest,$return]
 *
 * @param {Vsengine.Geom.Point} source - The source Point to copy the values from.
 * @param {Vsengine.Geom.Point} dest - The destination Point to copy the values to.
 *
 * @return {Vsengine.Geom.Point} The destination Point.
 */
var CopyFrom = function (source, dest) {
    return dest.setTo(source.x, source.y);
};

module.exports = CopyFrom;
