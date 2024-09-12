/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Ellipse by the values given in the `x` and `y` properties of the Point object.
 *
 * @function Vsengine.Geom.Ellipse.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Ellipse} O - [ellipse,$return]
 *
 * @param {Vsengine.Geom.Ellipse} ellipse - The Ellipse to be offset (translated.)
 * @param {(Vsengine.Geom.Point|object)} point - The Point object containing the values to offset the Ellipse by.
 *
 * @return {Vsengine.Geom.Ellipse} The Ellipse that was offset.
 */
var OffsetPoint = function (ellipse, point) {
    ellipse.x += point.x;
    ellipse.y += point.y;

    return ellipse;
};

module.exports = OffsetPoint;
