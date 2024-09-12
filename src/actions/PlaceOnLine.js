/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetPoints = require("../geom/line/GetPoints");
var GetEasedPoints = require("../geom/line/GetEasedPoints");

/**
 * Positions an array of Game Objects on evenly spaced points of a Line.
 * If the ease parameter is supplied, it will space the points based on that easing function along the line.
 *
 * @function Vsengine.Actions.PlaceOnLine
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Vsengine.Geom.Line} line - The Line to position the Game Objects on.
 * @param {(string|function)} [ease] - An optional ease to use. This can be either a string from the EaseMap, or a custom function.
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var PlaceOnLine = function (items, line, ease) {
    var points;

    if (ease) {
        points = GetEasedPoints(line, ease, items.length);
    } else {
        points = GetPoints(line, items.length);
    }

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var point = points[i];

        item.x = point.x;
        item.y = point.y;
    }

    return items;
};

module.exports = PlaceOnLine;
