/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require("./Contains");

/**
 * Check to see if the Ellipse contains the given Point object.
 *
 * @function Vsengine.Geom.Ellipse.ContainsPoint
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Ellipse} ellipse - The Ellipse to check.
 * @param {(Vsengine.Geom.Point|object)} point - The Point object to check if it's within the Circle or not.
 *
 * @return {boolean} True if the Point coordinates are within the circle, otherwise false.
 */
var ContainsPoint = function (ellipse, point) {
    return Contains(ellipse, point.x, point.y);
};

module.exports = ContainsPoint;