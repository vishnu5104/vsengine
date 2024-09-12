/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Offsets the Ellipse by the values given.
 *
 * @function Vsengine.Geom.Ellipse.Offset
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Ellipse} O - [ellipse,$return]
 *
 * @param {Vsengine.Geom.Ellipse} ellipse - The Ellipse to be offset (translated.)
 * @param {number} x - The amount to horizontally offset the Ellipse by.
 * @param {number} y - The amount to vertically offset the Ellipse by.
 *
 * @return {Vsengine.Geom.Ellipse} The Ellipse that was offset.
 */
var Offset = function (ellipse, x, y) {
    ellipse.x += x;
    ellipse.y += y;

    return ellipse;
};

module.exports = Offset;
