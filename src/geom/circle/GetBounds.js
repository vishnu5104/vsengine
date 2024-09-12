/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Rectangle = require("../rectangle/Rectangle");

/**
 * Returns the bounds of the Circle object.
 *
 * @function Vsengine.Geom.Circle.GetBounds
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [out,$return]
 *
 * @param {Vsengine.Geom.Circle} circle - The Circle to get the bounds from.
 * @param {(Vsengine.Geom.Rectangle|object)} [out] - A Rectangle, or rectangle-like object, to store the circle bounds in. If not given a new Rectangle will be created.
 *
 * @return {(Vsengine.Geom.Rectangle|object)} The Rectangle object containing the Circles bounds.
 */
var GetBounds = function (circle, out) {
    if (out === undefined) {
        out = new Rectangle();
    }

    out.x = circle.left;
    out.y = circle.top;
    out.width = circle.diameter;
    out.height = circle.diameter;

    return out;
};

module.exports = GetBounds;
