/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Tweens
 */

var Tweens = {
    States: require("./tween/const"),

    Builders: require("./builders"),
    Events: require("./events"),

    TweenManager: require("./TweenManager"),
    Tween: require("./tween/Tween"),
    TweenData: require("./tween/TweenData"),
    TweenFrameData: require("./tween/TweenFrameData"),

    BaseTween: require("./tween/BaseTween"),
    TweenChain: require("./tween/TweenChain"),
};

module.exports = Tweens;
