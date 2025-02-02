/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the circumference of the given Circle.
 *
 * @function Vsengine.Geom.Circle.Circumference
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Circle} circle - The Circle to get the circumference of.
 *
 * @return {number} The circumference of the Circle.
 */
var Circumference = function (circle) {
    return 2 * (Math.PI * circle.radius);
};

module.exports = Circumference;
