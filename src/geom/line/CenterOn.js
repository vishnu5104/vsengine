/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Center a line on the given coordinates.
 *
 * @function Vsengine.Geom.Line.CenterOn
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Line} line - The line to center.
 * @param {number} x - The horizontal coordinate to center the line on.
 * @param {number} y - The vertical coordinate to center the line on.
 *
 * @return {Vsengine.Geom.Line} The centered line.
 */
var CenterOn = function (line, x, y) {
    var tx = x - (line.x1 + line.x2) / 2;
    var ty = y - (line.y1 + line.y2) / 2;

    line.x1 += tx;
    line.y1 += ty;

    line.x2 += tx;
    line.y2 += ty;

    return line;
};

module.exports = CenterOn;
