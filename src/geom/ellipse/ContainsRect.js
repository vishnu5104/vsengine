/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require("./Contains");

/**
 * Check to see if the Ellipse contains all four points of the given Rectangle object.
 *
 * @function Vsengine.Geom.Ellipse.ContainsRect
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {(Vsengine.Geom.Rectangle|object)} rect - The Rectangle object to check if it's within the Ellipse or not.
 *
 * @return {boolean} True if all of the Rectangle coordinates are within the ellipse, otherwise false.
 */
var ContainsRect = function (ellipse, rect) {
    return (
        Contains(ellipse, rect.x, rect.y) &&
        Contains(ellipse, rect.right, rect.y) &&
        Contains(ellipse, rect.x, rect.bottom) &&
        Contains(ellipse, rect.right, rect.bottom)
    );
};

module.exports = ContainsRect;
