/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Math.Interpolation
 */

module.exports = {
    Bezier: require("./BezierInterpolation"),
    CatmullRom: require("./CatmullRomInterpolation"),
    CubicBezier: require("./CubicBezierInterpolation"),
    Linear: require("./LinearInterpolation"),
    QuadraticBezier: require("./QuadraticBezierInterpolation"),
    SmoothStep: require("./SmoothStepInterpolation"),
    SmootherStep: require("./SmootherStepInterpolation"),
};
