/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("./Point");

/**
 * Clone the given Point.
 *
 * @function Vsengine.Geom.Point.Clone
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Point} source - The source Point to clone.
 *
 * @return {Vsengine.Geom.Point} The cloned Point.
 */
var Clone = function (source) {
    return new Point(source.x, source.y);
};

module.exports = Clone;
