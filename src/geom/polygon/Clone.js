/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Polygon = require("./Polygon");

/**
 * Create a new polygon which is a copy of the specified polygon
 *
 * @function Vsengine.Geom.Polygon.Clone
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Polygon} polygon - The polygon to create a clone of
 *
 * @return {Vsengine.Geom.Polygon} A new separate Polygon cloned from the specified polygon, based on the same points.
 */
var Clone = function (polygon) {
    return new Polygon(polygon.points);
};

module.exports = Clone;
