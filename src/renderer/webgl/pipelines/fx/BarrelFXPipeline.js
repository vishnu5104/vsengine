/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../../../utils/Class");
var BarrelFrag = require("../../shaders/FXBarrel-frag");
var PostFXPipeline = require("../PostFXPipeline");

/**
 * @classdesc
 * The Barrel FX Pipeline.
 *
 * A barrel effect allows you to apply either a 'pinch' or 'expand' distortion to
 * a Game Object. The amount of the effect can be modified in real-time.
 *
 * A Barrel effect is added to a Game Object via the FX component:
 *
 * ```js
 * const sprite = this.add.sprite();
 *
 * sprite.postFX.addBarrel();
 * ```
 *
 * @class BarrelFXPipeline
 * @extends Vsengine.Renderer.WebGL.Pipelines.PostFXPipeline
 * @memberof Vsengine.Renderer.WebGL.Pipelines.FX
 * @constructor
 * @since 3.60.0
 *
 * @param {Vsengine.Game} game - A reference to the Vsengine Game instance.
 */
var BarrelFXPipeline = new Class({
    Extends: PostFXPipeline,

    initialize: function BarrelFXPipeline(game) {
        PostFXPipeline.call(this, {
            game: game,
            fragShader: BarrelFrag,
        });

        /**
         * The amount of distortion applied to the barrel effect.
         *
         * Typically keep this within the range 1 (no distortion) to +- 1.
         *
         * @name Vsengine.Renderer.WebGL.Pipelines.FX.BarrelFXPipeline#amount
         * @type {number}
         * @since 3.60.0
         */
        this.amount = 1;
    },

    onPreRender: function (controller, shader) {
        controller = this.getController(controller);

        this.set1f("amount", controller.amount, shader);
    },
});

module.exports = BarrelFXPipeline;
