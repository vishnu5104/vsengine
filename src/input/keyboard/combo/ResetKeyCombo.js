/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Used internally by the KeyCombo class.
 *
 * @function Vsengine.Input.Keyboard.ResetKeyCombo
 * @private
 * @since 3.0.0
 *
 * @param {Vsengine.Input.Keyboard.KeyCombo} combo - The KeyCombo to reset.
 *
 * @return {Vsengine.Input.Keyboard.KeyCombo} The KeyCombo.
 */
var ResetKeyCombo = function (combo) {
    combo.current = combo.keyCodes[0];
    combo.index = 0;
    combo.timeLastMatched = 0;
    combo.matched = false;
    combo.timeMatched = 0;

    return combo;
};

module.exports = ResetKeyCombo;
