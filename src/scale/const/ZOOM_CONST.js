/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Vsengine Scale Manager constants for zoom modes.
 *
 * @namespace Vsengine.Scale.Zoom
 * @memberof Vsengine.Scale
 * @since 3.16.0
 */

/**
 * Vsengine Scale Manager constants for zoom modes.
 *
 * To find out what each mode does please see [Vsengine.Scale.Zoom]{@link Vsengine.Scale.Zoom}.
 *
 * @typedef {Vsengine.Scale.Zoom} Vsengine.Scale.ZoomType
 * @memberof Vsengine.Scale
 * @since 3.16.0
 */

module.exports = {
    /**
     * The game canvas will not be zoomed by Vsengine.
     *
     * @name Vsengine.Scale.Zoom.NO_ZOOM
     * @type {number}
     * @const
     * @since 3.16.0
     */
    NO_ZOOM: 1,

    /**
     * The game canvas will be 2x zoomed by Vsengine.
     *
     * @name Vsengine.Scale.Zoom.ZOOM_2X
     * @type {number}
     * @const
     * @since 3.16.0
     */
    ZOOM_2X: 2,

    /**
     * The game canvas will be 4x zoomed by Vsengine.
     *
     * @name Vsengine.Scale.Zoom.ZOOM_4X
     * @type {number}
     * @const
     * @since 3.16.0
     */
    ZOOM_4X: 4,

    /**
     * Calculate the zoom value based on the maximum multiplied game size that will
     * fit into the parent, or browser window if no parent is set.
     *
     * @name Vsengine.Scale.Zoom.MAX_ZOOM
     * @type {number}
     * @const
     * @since 3.16.0
     */
    MAX_ZOOM: -1,
};
