/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Tilemaps.Parsers
 */

module.exports = {
    FromOrientationString: require("./FromOrientationString"),
    Parse: require("./Parse"),
    Parse2DArray: require("./Parse2DArray"),
    ParseCSV: require("./ParseCSV"),

    Impact: require("./impact/"),
    Tiled: require("./tiled/"),
};
