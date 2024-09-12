/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Input.Keyboard
 */

module.exports = {
    Events: require("./events"),

    KeyboardManager: require("./KeyboardManager"),
    KeyboardPlugin: require("./KeyboardPlugin"),

    Key: require("./keys/Key"),
    KeyCodes: require("./keys/KeyCodes"),

    KeyCombo: require("./combo/KeyCombo"),

    AdvanceKeyCombo: require("./combo/AdvanceKeyCombo"),
    ProcessKeyCombo: require("./combo/ProcessKeyCombo"),
    ResetKeyCombo: require("./combo/ResetKeyCombo"),

    JustDown: require("./keys/JustDown"),
    JustUp: require("./keys/JustUp"),
    DownDuration: require("./keys/DownDuration"),
    UpDuration: require("./keys/UpDuration"),
};
