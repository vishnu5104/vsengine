/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the left coordinate from the bounds of the Game Object.
 *
 * @function Vsengine.Display.Bounds.GetLeft
 * @since 3.0.0
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object to get the bounds value from.
 *
 * @return {number} The left coordinate of the bounds of the Game Object.
 */
var GetLeft = function (gameObject) {
    return gameObject.x - gameObject.width * gameObject.originX;
};

module.exports = GetLeft;
