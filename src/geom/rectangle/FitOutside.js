/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetAspectRatio = require("./GetAspectRatio");

/**
 * Adjusts the target rectangle, changing its width, height and position,
 * so that it fully covers the area of the source rectangle, while maintaining its original
 * aspect ratio.
 *
 * Unlike the `FitInside` function, the target rectangle may extend further out than the source.
 *
 * @function Vsengine.Geom.Rectangle.FitOutside
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [target,$return]
 *
 * @param {Vsengine.Geom.Rectangle} target - The target rectangle to adjust.
 * @param {Vsengine.Geom.Rectangle} source - The source rectangle to envelope the target in.
 *
 * @return {Vsengine.Geom.Rectangle} The modified target rectangle instance.
 */
var FitOutside = function (target, source) {
    var ratio = GetAspectRatio(target);

    if (ratio > GetAspectRatio(source)) {
        //  Wider than Tall
        target.setSize(source.height * ratio, source.height);
    } else {
        //  Taller than Wide
        target.setSize(source.width, source.width / ratio);
    }

    return target.setPosition(
        source.centerX - target.width / 2,
        source.centerY - target.height / 2
    );
};

module.exports = FitOutside;