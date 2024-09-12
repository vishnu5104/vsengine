/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copies the `x`, `y` and `radius` properties from the `source` Circle
 * into the given `dest` Circle, then returns the `dest` Circle.
 *
 * @function Vsengine.Geom.Circle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Circle} O - [dest,$return]
 *
 * @param {Vsengine.Geom.Circle} source - The source Circle to copy the values from.
 * @param {Vsengine.Geom.Circle} dest - The destination Circle to copy the values to.
 *
 * @return {Vsengine.Geom.Circle} The destination Circle.
 */
var CopyFrom = function (source, dest) {
    return dest.setTo(source.x, source.y, source.radius);
};

module.exports = CopyFrom;
