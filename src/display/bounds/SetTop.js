/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Positions the Game Object so that the top of its bounds aligns with the given coordinate.
 *
 * @function Vsengine.Display.Bounds.SetTop
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject} G - [gameObject,$return]
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object that will be re-positioned.
 * @param {number} value - The coordinate to position the Game Object bounds on.
 *
 * @return {Vsengine.GameObjects.GameObject} The Game Object that was positioned.
 */
var SetTop = function (gameObject, value) {
    gameObject.y = value + gameObject.height * gameObject.originY;

    return gameObject;
};

module.exports = SetTop;
