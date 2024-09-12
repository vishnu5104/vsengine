/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Extend = require("../utils/object/Extend");
var CONST = require("./const");

/**
 * @namespace Vsengine.Scale
 *
 * @borrows Vsengine.Scale.Center.NO_CENTER as NO_CENTER
 * @borrows Vsengine.Scale.Center.CENTER_BOTH as CENTER_BOTH
 * @borrows Vsengine.Scale.Center.CENTER_HORIZONTALLY as CENTER_HORIZONTALLY
 * @borrows Vsengine.Scale.Center.CENTER_VERTICALLY as CENTER_VERTICALLY
 *
 * @borrows Vsengine.Scale.Orientation.LANDSCAPE as LANDSCAPE
 * @borrows Vsengine.Scale.Orientation.PORTRAIT as PORTRAIT
 *
 * @borrows Vsengine.Scale.ScaleModes.NONE as NONE
 * @borrows Vsengine.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT as WIDTH_CONTROLS_HEIGHT
 * @borrows Vsengine.Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH as HEIGHT_CONTROLS_WIDTH
 * @borrows Vsengine.Scale.ScaleModes.FIT as FIT
 * @borrows Vsengine.Scale.ScaleModes.ENVELOP as ENVELOP
 * @borrows Vsengine.Scale.ScaleModes.RESIZE as RESIZE
 * @borrows Vsengine.Scale.ScaleModes.EXPAND as EXPAND
 *
 * @borrows Vsengine.Scale.Zoom.NO_ZOOM as NO_ZOOM
 * @borrows Vsengine.Scale.Zoom.ZOOM_2X as ZOOM_2X
 * @borrows Vsengine.Scale.Zoom.ZOOM_4X as ZOOM_4X
 * @borrows Vsengine.Scale.Zoom.MAX_ZOOM as MAX_ZOOM
 */

var Scale = {
    Center: require("./const/CENTER_CONST"),
    Events: require("./events"),
    Orientation: require("./const/ORIENTATION_CONST"),
    ScaleManager: require("./ScaleManager"),
    ScaleModes: require("./const/SCALE_MODE_CONST"),
    Zoom: require("./const/ZOOM_CONST"),
};

Scale = Extend(false, Scale, CONST.CENTER);
Scale = Extend(false, Scale, CONST.ORIENTATION);
Scale = Extend(false, Scale, CONST.SCALE_MODE);
Scale = Extend(false, Scale, CONST.ZOOM);

module.exports = Scale;
