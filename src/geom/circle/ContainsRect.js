/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require("./Contains");

/**
 * Check to see if the Circle contains all four points of the given Rectangle object.
 *
 * @function Vsengine.Geom.Circle.ContainsRect
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Circle} circle - The Circle to check.
 * @param {(Vsengine.Geom.Rectangle|object)} rect - The Rectangle object to check if it's within the Circle or not.
 *
 * @return {boolean} True if all of the Rectangle coordinates are within the circle, otherwise false.
 */
var ContainsRect = function (circle, rect) {
    return (
        Contains(circle, rect.x, rect.y) &&
        Contains(circle, rect.right, rect.y) &&
        Contains(circle, rect.x, rect.bottom) &&
        Contains(circle, rect.right, rect.bottom)
    );
};

module.exports = ContainsRect;
