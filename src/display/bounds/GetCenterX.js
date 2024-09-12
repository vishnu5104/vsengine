/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the center x coordinate from the bounds of the Game Object.
 *
 * @function Vsengine.Display.Bounds.GetCenterX
 * @since 3.0.0
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object to get the bounds value from.
 *
 * @return {number} The center x coordinate of the bounds of the Game Object.
 */
var GetCenterX = function (gameObject) {
    return (
        gameObject.x -
        gameObject.width * gameObject.originX +
        gameObject.width * 0.5
    );
};

module.exports = GetCenterX;
