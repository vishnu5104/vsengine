/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../../../utils/Class");
var PixelateFrag = require("../../shaders/FXPixelate-frag");
var PostFXPipeline = require("../PostFXPipeline");

/**
 * @classdesc
 * The Pixelate FX Pipeline.
 *
 * The pixelate effect is a visual technique that deliberately reduces the resolution or detail of an image,
 * creating a blocky or mosaic appearance composed of large, visible pixels. This effect can be used for stylistic
 * purposes, as a homage to retro gaming, or as a means to obscure certain elements within the game, such as
 * during a transition or to censor specific content.
 *
 * A Pixelate effect is added to a Game Object via the FX component:
 *
 * ```js
 * const sprite = this.add.sprite();
 *
 * sprite.postFX.addPixelate();
 * ```
 *
 * @class PixelateFXPipeline
 * @extends Vsengine.Renderer.WebGL.Pipelines.PostFXPipeline
 * @memberof Vsengine.Renderer.WebGL.Pipelines.FX
 * @constructor
 * @since 3.60.0
 *
 * @param {Vsengine.Game} game - A reference to the Vsengine Game instance.
 */
var PixelateFXPipeline = new Class({
    Extends: PostFXPipeline,

    initialize: function PixelateFXPipeline(game) {
        PostFXPipeline.call(this, {
            game: game,
            fragShader: PixelateFrag,
        });

        /**
         * The amount of pixelation to apply.
         *
         * @name Vsengine.Renderer.WebGL.Pipelines.FX.PixelateFXPipeline#amount
         * @type {number}
         * @since 3.60.0
         */
        this.amount = 1;
    },

    onPreRender: function (controller, shader, width, height) {
        controller = this.getController(controller);

        this.set1f("amount", controller.amount, shader);

        if (width && height) {
            this.set2f("resolution", width, height, shader);
        }
    },

    onDraw: function (target) {
        this.set2f("resolution", target.width, target.height);

        this.bindAndDraw(target);
    },
});

module.exports = PixelateFXPipeline;
