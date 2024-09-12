/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Circle = require("./Circle");

/**
 * Creates a new Circle instance based on the values contained in the given source.
 *
 * @function Vsengine.Geom.Circle.Clone
 * @since 3.0.0
 *
 * @param {(Vsengine.Geom.Circle|object)} source - The Circle to be cloned. Can be an instance of a Circle or a circle-like object, with x, y and radius properties.
 *
 * @return {Vsengine.Geom.Circle} A clone of the source Circle.
 */
var Clone = function (source) {
    return new Circle(source.x, source.y, source.radius);
};

module.exports = Clone;
