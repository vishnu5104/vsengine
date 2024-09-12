/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Curves
 */

module.exports = {
    Path: require("./path/Path"),
    MoveTo: require("./path/MoveTo"),

    CubicBezier: require("./CubicBezierCurve"),
    Curve: require("./Curve"),
    Ellipse: require("./EllipseCurve"),
    Line: require("./LineCurve"),
    QuadraticBezier: require("./QuadraticBezierCurve"),
    Spline: require("./SplineCurve"),
};
