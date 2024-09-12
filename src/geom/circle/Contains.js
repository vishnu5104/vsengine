/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check to see if the Circle contains the given x / y coordinates.
 *
 * @function Vsengine.Geom.Circle.Contains
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Circle} circle - The Circle to check.
 * @param {number} x - The x coordinate to check within the circle.
 * @param {number} y - The y coordinate to check within the circle.
 *
 * @return {boolean} True if the coordinates are within the circle, otherwise false.
 */
var Contains = function (circle, x, y) {
    //  Check if x/y are within the bounds first
    if (
        circle.radius > 0 &&
        x >= circle.left &&
        x <= circle.right &&
        y >= circle.top &&
        y <= circle.bottom
    ) {
        var dx = (circle.x - x) * (circle.x - x);
        var dy = (circle.y - y) * (circle.y - y);

        return dx + dy <= circle.radius * circle.radius;
    } else {
        return false;
    }
};

module.exports = Contains;
