/**
 * @author       Richard Davey <rich@vsengine.io>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Sound
 */

module.exports = {
    SoundManagerCreator: require("./SoundManagerCreator"),

    Events: require("./events"),

    BaseSound: require("./BaseSound"),
    BaseSoundManager: require("./BaseSoundManager"),

    WebAudioSound: require("./webaudio/WebAudioSound"),
    WebAudioSoundManager: require("./webaudio/WebAudioSoundManager"),

    HTML5AudioSound: require("./html5/HTML5AudioSound"),
    HTML5AudioSoundManager: require("./html5/HTML5AudioSoundManager"),

    NoAudioSound: require("./noaudio/NoAudioSound"),
    NoAudioSoundManager: require("./noaudio/NoAudioSoundManager"),
};
