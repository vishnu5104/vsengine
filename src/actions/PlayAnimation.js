/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Play an animation on all Game Objects in the array that have an Animation component.
 *
 * You can pass either an animation key, or an animation configuration object for more control over the playback.
 *
 * @function Vsengine.Actions.PlayAnimation
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {(string|Vsengine.Animations.Animation|Vsengine.Types.Animations.PlayAnimationConfig)} key - The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
 * @param {boolean} [ignoreIfPlaying=false] - If this animation is already playing then ignore this call.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var PlayAnimation = function (items, key, ignoreIfPlaying) {
    for (var i = 0; i < items.length; i++) {
        var gameObject = items[i];

        if (gameObject.anims) {
            gameObject.anims.play(key, ignoreIfPlaying);
        }
    }

    return items;
};

module.exports = PlayAnimation;
