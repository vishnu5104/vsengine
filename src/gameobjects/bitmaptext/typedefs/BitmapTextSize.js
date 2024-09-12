/**
 * @typedef {object} Vsengine.Types.GameObjects.BitmapText.BitmapTextSize
 * @since 3.0.0
 *
 * @property {Vsengine.Types.GameObjects.BitmapText.GlobalBitmapTextSize} global - The position and size of the BitmapText, taking into account the position and scale of the Game Object.
 * @property {Vsengine.Types.GameObjects.BitmapText.LocalBitmapTextSize} local - The position and size of the BitmapText, taking just the font size into account.
 * @property {Vsengine.Types.GameObjects.BitmapText.BitmapTextLines} lines - Data about the lines of text within the BitmapText.
 * @property {Vsengine.Types.GameObjects.BitmapText.BitmapTextCharacter[]} characters - An array containing per-character data. Only populated if `includeChars` is `true` in the `getTextBounds` call.
 * @property {Vsengine.Types.GameObjects.BitmapText.BitmapTextWord[]} words - An array containing the word data from the BitmapText.
 * @property {number} scale - The scale of the BitmapText font being rendered vs. font size in the text data.
 * @property {number} scaleX - The scale X value of the BitmapText.
 * @property {number} scaleY - The scale Y value of the BitmapText.
 * @property {string} wrappedText - The wrapped text, if wrapping enabled and required.
 */
