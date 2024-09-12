/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var RETRO_FONT_CONST = require("./const");
var Extend = require("../../utils/object/Extend");

/**
 * @namespace Vsengine.GameObjects.RetroFont
 * @since 3.6.0
 */

var RetroFont = { Parse: require("./ParseRetroFont") };

//   Merge in the consts
RetroFont = Extend(false, RetroFont, RETRO_FONT_CONST);

module.exports = RetroFont;
