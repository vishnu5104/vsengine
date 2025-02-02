/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the center y coordinate from the bounds of the Game Object.
 *
 * @function Vsengine.Display.Bounds.GetCenterY
 * @since 3.0.0
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object to get the bounds value from.
 *
 * @return {number} The center y coordinate of the bounds of the Game Object.
 */
var GetCenterY = function (gameObject) {
    return (
        gameObject.y -
        gameObject.height * gameObject.originY +
        gameObject.height * 0.5
    );
};

module.exports = GetCenterY;
