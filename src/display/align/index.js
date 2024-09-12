/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("./const");
var Extend = require("../../utils/object/Extend");

/**
 * @namespace Vsengine.Display.Align
 */

var Align = {
    In: require("./in"),
    To: require("./to"),
};

//   Merge in the consts
Align = Extend(false, Align, CONST);

module.exports = Align;
