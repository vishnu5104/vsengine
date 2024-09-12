/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Vsengine Scale Manager constants for centering the game canvas.
 *
 * @namespace Vsengine.Scale.Center
 * @memberof Vsengine.Scale
 * @since 3.16.0
 */

/**
 * Vsengine Scale Manager constants for centering the game canvas.
 *
 * To find out what each mode does please see [Vsengine.Scale.Center]{@link Vsengine.Scale.Center}.
 *
 * @typedef {Vsengine.Scale.Center} Vsengine.Scale.CenterType
 * @memberof Vsengine.Scale
 * @since 3.16.0
 */

module.exports = {
    /**
     * The game canvas is not centered within the parent by Vsengine.
     * You can still center it yourself via CSS.
     *
     * @name Vsengine.Scale.Center.NO_CENTER
     * @type {number}
     * @const
     * @since 3.16.0
     */
    NO_CENTER: 0,

    /**
     * The game canvas is centered both horizontally and vertically within the parent.
     * To do this, the parent has to have a bounds that can be calculated and not be empty.
     *
     * Centering is achieved by setting the margin left and top properties of the
     * game canvas, and does not factor in any other CSS styles you may have applied.
     *
     * @name Vsengine.Scale.Center.CENTER_BOTH
     * @type {number}
     * @const
     * @since 3.16.0
     */
    CENTER_BOTH: 1,

    /**
     * The game canvas is centered horizontally within the parent.
     * To do this, the parent has to have a bounds that can be calculated and not be empty.
     *
     * Centering is achieved by setting the margin left and top properties of the
     * game canvas, and does not factor in any other CSS styles you may have applied.
     *
     * @name Vsengine.Scale.Center.CENTER_HORIZONTALLY
     * @type {number}
     * @const
     * @since 3.16.0
     */
    CENTER_HORIZONTALLY: 2,

    /**
     * The game canvas is centered both vertically within the parent.
     * To do this, the parent has to have a bounds that can be calculated and not be empty.
     *
     * Centering is achieved by setting the margin left and top properties of the
     * game canvas, and does not factor in any other CSS styles you may have applied.
     *
     * @name Vsengine.Scale.Center.CENTER_VERTICALLY
     * @type {number}
     * @const
     * @since 3.16.0
     */
    CENTER_VERTICALLY: 3,
};
