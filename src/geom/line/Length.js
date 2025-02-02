/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the length of the given line.
 *
 * @function Vsengine.Geom.Line.Length
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Line} line - The line to calculate the length of.
 *
 * @return {number} The length of the line.
 */
var Length = function (line) {
    return Math.sqrt(
        (line.x2 - line.x1) * (line.x2 - line.x1) +
            (line.y2 - line.y1) * (line.y2 - line.y1)
    );
};

module.exports = Length;
