/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetLeft = require("../../bounds/GetLeft");
var GetTop = require("../../bounds/GetTop");
var SetLeft = require("../../bounds/SetLeft");
var SetTop = require("../../bounds/SetTop");

/**
 * Takes given Game Object and aligns it so that it is positioned in the top left of the other.
 *
 * @function Vsengine.Display.Align.In.TopLeft
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that will be positioned.
 * @param {Vsengine.GameObjects.GameObject} alignIn - The Game Object to base the alignment position on.
 * @param {number} [offsetX=0] - Optional horizontal offset from the position.
 * @param {number} [offsetY=0] - Optional vertical offset from the position.
 *
 * @return {Vsengine.GameObjects.GameObject} The Game Object that was aligned.
 */
var TopLeft = function (gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
        offsetX = 0;
    }
    if (offsetY === undefined) {
        offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);

    return gameObject;
};

module.exports = TopLeft;
