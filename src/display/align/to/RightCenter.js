/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetCenterY = require("../../bounds/GetCenterY");
var GetRight = require("../../bounds/GetRight");
var SetCenterY = require("../../bounds/SetCenterY");
var SetLeft = require("../../bounds/SetLeft");

/**
 * Takes given Game Object and aligns it so that it is positioned next to the right center position of the other.
 *
 * @function Vsengine.Display.Align.To.RightCenter
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that will be positioned.
 * @param {Vsengine.GameObjects.GameObject} alignTo - The Game Object to base the alignment position on.
 * @param {number} [offsetX=0] - Optional horizontal offset from the position.
 * @param {number} [offsetY=0] - Optional vertical offset from the position.
 *
 * @return {Vsengine.GameObjects.GameObject} The Game Object that was aligned.
 */
var RightCenter = function (gameObject, alignTo, offsetX, offsetY) {
    if (offsetX === undefined) {
        offsetX = 0;
    }
    if (offsetY === undefined) {
        offsetY = 0;
    }

    SetLeft(gameObject, GetRight(alignTo) + offsetX);
    SetCenterY(gameObject, GetCenterY(alignTo) + offsetY);

    return gameObject;
};

module.exports = RightCenter;
