/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Rectangle = require("./Rectangle");

/**
 * Creates a new Rectangle which is identical to the given one.
 *
 * @function Vsengine.Geom.Rectangle.Clone
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} source - The Rectangle to clone.
 *
 * @return {Vsengine.Geom.Rectangle} The newly created Rectangle, which is separate from the given one.
 */
var Clone = function (source) {
    return new Rectangle(source.x, source.y, source.width, source.height);
};

module.exports = Clone;