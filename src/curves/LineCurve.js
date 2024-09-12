/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  Based on the three.js Curve classes created by [zz85](http://www.lab4games.net/zz85/blog)

var Class = require("../utils/Class");
var Curve = require("./Curve");
var FromPoints = require("../geom/rectangle/FromPoints");
var Rectangle = require("../geom/rectangle/Rectangle");
var Vector2 = require("../math/Vector2");

/**
 * @classdesc
 * A LineCurve is a "curve" comprising exactly two points (a line segment).
 *
 * @class Line
 * @extends Vsengine.Curves.Curve
 * @memberof Vsengine.Curves
 * @constructor
 * @since 3.0.0
 *
 * @param {(Vsengine.Math.Vector2|number[])} p0 - The first endpoint.
 * @param {Vsengine.Math.Vector2} [p1] - The second endpoint.
 */
var LineCurve = new Class({
    Extends: Curve,

    initialize:
        //  vec2s or array
        function LineCurve(p0, p1) {
            Curve.call(this, "LineCurve");

            if (Array.isArray(p0)) {
                p1 = new Vector2(p0[2], p0[3]);
                p0 = new Vector2(p0[0], p0[1]);
            }

            /**
             * The first endpoint.
             *
             * @name Vsengine.Curves.Line#p0
             * @type {Vsengine.Math.Vector2}
             * @since 3.0.0
             */
            this.p0 = p0;

            /**
             * The second endpoint.
             *
             * @name Vsengine.Curves.Line#p1
             * @type {Vsengine.Math.Vector2}
             * @since 3.0.0
             */
            this.p1 = p1;

            //  Override default Curve.arcLengthDivisions

            /**
             * The quantity of arc length divisions within the curve.
             *
             * @name Vsengine.Curves.Line#arcLengthDivisions
             * @type {number}
             * @default 1
             * @since 3.0.0
             */
            this.arcLengthDivisions = 1;
        },

    /**
     * Returns a Rectangle where the position and dimensions match the bounds of this Curve.
     *
     * @method Vsengine.Curves.Line#getBounds
     * @since 3.0.0
     *
     * @generic {Vsengine.Geom.Rectangle} O - [out,$return]
     *
     * @param {Vsengine.Geom.Rectangle} [out] - A Rectangle object to store the bounds in. If not given a new Rectangle will be created.
     *
     * @return {Vsengine.Geom.Rectangle} A Rectangle object holding the bounds of this curve. If `out` was given it will be this object.
     */
    getBounds: function (out) {
        if (out === undefined) {
            out = new Rectangle();
        }

        return FromPoints([this.p0, this.p1], out);
    },

    /**
     * Gets the starting point on the curve.
     *
     * @method Vsengine.Curves.Line#getStartPoint
     * @since 3.0.0
     *
     * @generic {Vsengine.Math.Vector2} O - [out,$return]
     *
     * @param {Vsengine.Math.Vector2} [out] - A Vector2 object to store the result in. If not given will be created.
     *
     * @return {Vsengine.Math.Vector2} The coordinates of the point on the curve. If an `out` object was given this will be returned.
     */
    getStartPoint: function (out) {
        if (out === undefined) {
            out = new Vector2();
        }

        return out.copy(this.p0);
    },

    /**
     * Gets the resolution of the line.
     *
     * @method Vsengine.Curves.Line#getResolution
     * @since 3.0.0
     *
     * @param {number} [divisions=1] - The number of divisions to consider.
     *
     * @return {number} The resolution. Equal to the number of divisions.
     */
    getResolution: function (divisions) {
        if (divisions === undefined) {
            divisions = 1;
        }

        return divisions;
    },

    /**
     * Get point at relative position in curve according to length.
     *
     * @method Vsengine.Curves.Line#getPoint
     * @since 3.0.0
     *
     * @generic {Vsengine.Math.Vector2} O - [out,$return]
     *
     * @param {number} t - The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param {Vsengine.Math.Vector2} [out] - A Vector2 object to store the result in. If not given will be created.
     *
     * @return {Vsengine.Math.Vector2} The coordinates of the point on the curve. If an `out` object was given this will be returned.
     */
    getPoint: function (t, out) {
        if (out === undefined) {
            out = new Vector2();
        }

        if (t === 1) {
            return out.copy(this.p1);
        }

        out.copy(this.p1).subtract(this.p0).scale(t).add(this.p0);

        return out;
    },

    // Line curve is linear, so we can overwrite default getPointAt

    /**
     * Gets a point at a given position on the line.
     *
     * @method Vsengine.Curves.Line#getPointAt
     * @since 3.0.0
     *
     * @generic {Vsengine.Math.Vector2} O - [out,$return]
     *
     * @param {number} u - The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param {Vsengine.Math.Vector2} [out] - A Vector2 object to store the result in. If not given will be created.
     *
     * @return {Vsengine.Math.Vector2} The coordinates of the point on the curve. If an `out` object was given this will be returned.
     */
    getPointAt: function (u, out) {
        return this.getPoint(u, out);
    },

    /**
     * Gets the slope of the line as a unit vector.
     *
     * @method Vsengine.Curves.Line#getTangent
     * @since 3.0.0
     *
     * @generic {Vsengine.Math.Vector2} O - [out,$return]
     *
     * @param {number} [t] - The relative position on the line, [0..1].
     * @param {Vsengine.Math.Vector2} [out] - A vector to store the result in.
     *
     * @return {Vsengine.Math.Vector2} The tangent vector.
     */
    getTangent: function (t, out) {
        if (out === undefined) {
            out = new Vector2();
        }

        out.copy(this.p1).subtract(this.p0).normalize();

        return out;
    },

    /**
     * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant.
     *
     * @method Vsengine.Curves.Line#getUtoTmapping
     * @since 3.0.0
     *
     * @param {number} u - A float between 0 and 1.
     * @param {number} distance - The distance, in pixels.
     * @param {number} [divisions] - Optional amount of divisions.
     *
     * @return {number} The equidistant value.
     */
    getUtoTmapping: function (u, distance, divisions) {
        var t;

        if (distance) {
            var arcLengths = this.getLengths(divisions);
            var lineLength = arcLengths[arcLengths.length - 1];

            //  Cannot overshoot the curve
            var targetLineLength = Math.min(distance, lineLength);

            t = targetLineLength / lineLength;
        } else {
            t = u;
        }

        return t;
    },

    //  Override default Curve.draw because this is better than calling getPoints on a line!

    /**
     * Draws this curve on the given Graphics object.
     *
     * The curve is drawn using `Graphics.lineBetween` so will be drawn at whatever the present Graphics line color is.
     * The Graphics object is not cleared before the draw, so the curve will appear on-top of anything else already rendered to it.
     *
     * @method Vsengine.Curves.Line#draw
     * @since 3.0.0
     *
     * @generic {Vsengine.GameObjects.Graphics} G - [graphics,$return]
     *
     * @param {Vsengine.GameObjects.Graphics} graphics - The Graphics instance onto which this curve will be drawn.
     *
     * @return {Vsengine.GameObjects.Graphics} The Graphics object to which the curve was drawn.
     */
    draw: function (graphics) {
        graphics.lineBetween(this.p0.x, this.p0.y, this.p1.x, this.p1.y);

        //  So you can chain graphics calls
        return graphics;
    },

    /**
     * Gets a JSON representation of the line.
     *
     * @method Vsengine.Curves.Line#toJSON
     * @since 3.0.0
     *
     * @return {Vsengine.Types.Curves.JSONCurve} The JSON object containing this curve data.
     */
    toJSON: function () {
        return {
            type: this.type,
            points: [this.p0.x, this.p0.y, this.p1.x, this.p1.y],
        };
    },
});

/**
 * Configures this line from a JSON representation.
 *
 * @function Vsengine.Curves.Line.fromJSON
 * @since 3.0.0
 *
 * @param {Vsengine.Types.Curves.JSONCurve} data - The JSON object containing this curve data.
 *
 * @return {Vsengine.Curves.Line} A new LineCurve object.
 */
LineCurve.fromJSON = function (data) {
    var points = data.points;

    var p0 = new Vector2(points[0], points[1]);
    var p1 = new Vector2(points[2], points[3]);

    return new LineCurve(p0, p1);
};

module.exports = LineCurve;
