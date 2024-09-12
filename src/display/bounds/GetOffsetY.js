/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the amount the Game Object is visually offset from its y coordinate.
 * This is the same as `width * origin.y`.
 * This value will only be > 0 if `origin.y` is not equal to zero.
 *
 * @function Vsengine.Display.Bounds.GetOffsetY
 * @since 3.0.0
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object to get the bounds value from.
 *
 * @return {number} The vertical offset of the Game Object.
 */
var GetOffsetY = function (gameObject) {
    return gameObject.height * gameObject.originY;
};

module.exports = GetOffsetY;
