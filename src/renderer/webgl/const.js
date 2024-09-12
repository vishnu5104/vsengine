/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var WEBGL_CONST = {
    /**
     * 	8-bit twos complement signed integer.
     *
     * @name Vsengine.Renderer.WebGL.BYTE
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    BYTE: { enum: 0x1400, size: 1 },

    /**
     * 8-bit twos complement unsigned integer.
     *
     * @name Vsengine.Renderer.WebGL.UNSIGNED_BYTE
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    UNSIGNED_BYTE: { enum: 0x1401, size: 1 },

    /**
     * 16-bit twos complement signed integer.
     *
     * @name Vsengine.Renderer.WebGL.SHORT
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    SHORT: { enum: 0x1402, size: 2 },

    /**
     * 16-bit twos complement unsigned integer.
     *
     * @name Vsengine.Renderer.WebGL.UNSIGNED_SHORT
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    UNSIGNED_SHORT: { enum: 0x1403, size: 2 },

    /**
     * 32-bit twos complement signed integer.
     *
     * @name Vsengine.Renderer.WebGL.INT
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    INT: { enum: 0x1404, size: 4 },

    /**
     * 32-bit twos complement unsigned integer.
     *
     * @name Vsengine.Renderer.WebGL.UNSIGNED_INT
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    UNSIGNED_INT: { enum: 0x1405, size: 4 },

    /**
     * 32-bit IEEE floating point number.
     *
     * @name Vsengine.Renderer.WebGL.FLOAT
     * @type {Vsengine.Types.Renderer.WebGL.WebGLConst}
     * @since 3.50.0
     */
    FLOAT: { enum: 0x1406, size: 4 },
};

module.exports = WEBGL_CONST;
