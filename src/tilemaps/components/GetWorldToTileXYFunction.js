/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("../const/ORIENTATION_CONST");
var HexagonalWorldToTileXY = require("./HexagonalWorldToTileXY");
var IsometricWorldToTileXY = require("./IsometricWorldToTileXY");
var NOOP = require("../../utils/NOOP");
var StaggeredWorldToTileXY = require("./StaggeredWorldToTileXY");
var WorldToTileXY = require("./WorldToTileXY");

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Vsengine.Tilemaps.Components.GetWorldToTileXYFunction
 * @since 3.50.0
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetWorldToTileXYFunction = function (orientation) {
    if (orientation === CONST.ORTHOGONAL) {
        return WorldToTileXY;
    } else if (orientation === CONST.ISOMETRIC) {
        return IsometricWorldToTileXY;
    } else if (orientation === CONST.HEXAGONAL) {
        return HexagonalWorldToTileXY;
    } else if (orientation === CONST.STAGGERED) {
        return StaggeredWorldToTileXY;
    } else {
        return NOOP;
    }
};

module.exports = GetWorldToTileXYFunction;
