/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetCenterY = require("../../bounds/GetCenterY");
var GetLeft = require("../../bounds/GetLeft");
var SetCenterY = require("../../bounds/SetCenterY");
var SetLeft = require("../../bounds/SetLeft");

/**
 * Takes given Game Object and aligns it so that it is positioned in the left center of the other.
 *
 * @function Vsengine.Display.Align.In.LeftCenter
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
var LeftCenter = function (gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
        offsetX = 0;
    }
    if (offsetY === undefined) {
        offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);

    return gameObject;
};

module.exports = LeftCenter;
