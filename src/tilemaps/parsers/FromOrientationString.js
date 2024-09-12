/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("../const/ORIENTATION_CONST");

/**
 * Get the Tilemap orientation from the given string.
 *
 * @function Vsengine.Tilemaps.Parsers.FromOrientationString
 * @since 3.50.0
 *
 * @param {string} [orientation] - The orientation type as a string.
 *
 * @return {Vsengine.Tilemaps.OrientationType} The Tilemap Orientation type.
 */
var FromOrientationString = function (orientation) {
    orientation = orientation.toLowerCase();

    if (orientation === "isometric") {
        return CONST.ISOMETRIC;
    } else if (orientation === "staggered") {
        return CONST.STAGGERED;
    } else if (orientation === "hexagonal") {
        return CONST.HEXAGONAL;
    } else {
        return CONST.ORTHOGONAL;
    }
};

module.exports = FromOrientationString;
