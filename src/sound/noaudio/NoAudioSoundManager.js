/**
 * @author       Richard Davey <rich@vsengine.io>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BaseSoundManager = require("../BaseSoundManager");
var Class = require("../../utils/Class");
var EventEmitter = require("eventemitter3");
var NoAudioSound = require("./NoAudioSound");
var NOOP = require("../../utils/NOOP");

/**
 * @classdesc
 * No-audio implementation of the Sound Manager. It is used if audio has been
 * disabled in the game config or the device doesn't support any audio.
 *
 * It represents a graceful degradation of Sound Manager logic that provides
 * minimal functionality and prevents Vsengine projects that use audio from
 * breaking on devices that don't support any audio playback technologies.
 *
 * @class NoAudioSoundManager
 * @extends Vsengine.Sound.BaseSoundManager
 * @memberof Vsengine.Sound
 * @constructor
 * @since 3.0.0
 *
 * @param {Vsengine.Game} game - Reference to the current game instance.
 */
var NoAudioSoundManager = new Class({
    Extends: EventEmitter,

    initialize: function NoAudioSoundManager(game) {
        EventEmitter.call(this);

        this.game = game;
        this.sounds = [];
        this.mute = false;
        this.volume = 1;
        this.rate = 1;
        this.detune = 0;
        this.pauseOnBlur = true;
        this.locked = false;
    },

    /**
     * Adds a new sound into the sound manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#add
     * @since 3.60.0
     *
     * @param {string} key - Asset key for the sound.
     * @param {Vsengine.Types.Sound.SoundConfig} [config] - An optional config object containing default sound settings.
     *
     * @return {Vsengine.Sound.NoAudioSound} The new sound instance.
     */
    add: function (key, config) {
        var sound = new NoAudioSound(this, key, config);

        this.sounds.push(sound);

        return sound;
    },

    /**
     * Adds a new audio sprite sound into the sound manager.
     * Audio Sprites are a combination of audio files and a JSON configuration.
     * The JSON follows the format of that created by https://github.com/tonistiigi/audiosprite
     *
     * @method Vsengine.Sound.NoAudioSoundManager#addAudioSprite
     * @since 3.60.0
     *
     * @param {string} key - Asset key for the sound.
     * @param {Vsengine.Types.Sound.SoundConfig} [config] - An optional config object containing default sound settings.
     *
     * @return {Vsengine.Sound.NoAudioSound} The new audio sprite sound instance.
     */
    addAudioSprite: function (key, config) {
        var sound = this.add(key, config);

        sound.spritemap = {};

        return sound;
    },

    /**
     * Gets the first sound in the manager matching the given key, if any.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#get
     * @since 3.23.0
     *
     * @generic {Vsengine.Sound.BaseSound} T
     * @genericUse {T} - [$return]
     *
     * @param {string} key - Sound asset key.
     *
     * @return {?Vsengine.Sound.BaseSound} - The sound, or null.
     */
    get: function (key) {
        return BaseSoundManager.prototype.get.call(this, key);
    },

    /**
     * Gets any sounds in the manager matching the given key.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#getAll
     * @since 3.23.0
     *
     * @generic {Vsengine.Sound.BaseSound} T
     * @genericUse {T[]} - [$return]
     *
     * @param {string} key - Sound asset key.
     *
     * @return {Vsengine.Sound.BaseSound[]} - The sounds, or an empty array.
     */
    getAll: function (key) {
        return BaseSoundManager.prototype.getAll.call(this, key);
    },

    /**
     * This method does nothing but return 'false' for the No Audio Sound Manager, to maintain
     * compatibility with the other Sound Managers.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#play
     * @since 3.0.0
     *
     * @param {string} key - Asset key for the sound.
     * @param {(Vsengine.Types.Sound.SoundConfig|Vsengine.Types.Sound.SoundMarker)} [extra] - An optional additional object containing settings to be applied to the sound. It could be either config or marker object.
     *
     * @return {boolean} Always 'false' for the No Audio Sound Manager.
     */
    // eslint-disable-next-line no-unused-vars
    play: function (key, extra) {
        return false;
    },

    /**
     * This method does nothing but return 'false' for the No Audio Sound Manager, to maintain
     * compatibility with the other Sound Managers.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#playAudioSprite
     * @since 3.0.0
     *
     * @param {string} key - Asset key for the sound.
     * @param {string} spriteName - The name of the sound sprite to play.
     * @param {Vsengine.Types.Sound.SoundConfig} [config] - An optional config object containing default sound settings.
     *
     * @return {boolean} Always 'false' for the No Audio Sound Manager.
     */
    // eslint-disable-next-line no-unused-vars
    playAudioSprite: function (key, spriteName, config) {
        return false;
    },

    /**
     * Removes a sound from the sound manager.
     * The removed sound is destroyed before removal.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#remove
     * @since 3.0.0
     *
     * @param {Vsengine.Sound.BaseSound} sound - The sound object to remove.
     *
     * @return {boolean} True if the sound was removed successfully, otherwise false.
     */
    remove: function (sound) {
        return BaseSoundManager.prototype.remove.call(this, sound);
    },

    /**
     * Removes all sounds from the manager, destroying the sounds.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#removeAll
     * @since 3.23.0
     */
    removeAll: function () {
        return BaseSoundManager.prototype.removeAll.call(this);
    },

    /**
     * Removes all sounds from the sound manager that have an asset key matching the given value.
     * The removed sounds are destroyed before removal.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#removeByKey
     * @since 3.0.0
     *
     * @param {string} key - The key to match when removing sound objects.
     *
     * @return {number} The number of matching sound objects that were removed.
     */
    removeByKey: function (key) {
        return BaseSoundManager.prototype.removeByKey.call(this, key);
    },

    /**
     * Stops any sounds matching the given key.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#stopByKey
     * @since 3.23.0
     *
     * @param {string} key - Sound asset key.
     *
     * @return {number} - How many sounds were stopped.
     */
    stopByKey: function (key) {
        return BaseSoundManager.prototype.stopByKey.call(this, key);
    },

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#onBlur
     * @since 3.0.0
     */
    onBlur: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#onFocus
     * @since 3.0.0
     */
    onFocus: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#onGameBlur
     * @since 3.0.0
     */
    onGameBlur: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#onGameFocus
     * @since 3.0.0
     */
    onGameFocus: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#pauseAll
     * @since 3.0.0
     */
    pauseAll: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#resumeAll
     * @since 3.0.0
     */
    resumeAll: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#stopAll
     * @since 3.0.0
     */
    stopAll: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#update
     * @since 3.0.0
     */
    update: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#setRate
     * @since 3.0.0
     *
     * @return {this} This Sound Manager.
     */
    setRate: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#setDetune
     * @since 3.0.0
     *
     * @return {this} This Sound Manager.
     */
    setDetune: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#setMute
     * @since 3.0.0
     */
    setMute: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#setVolume
     * @since 3.0.0
     */
    setVolume: NOOP,

    /**
     * Empty function for the No Audio Sound Manager.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#unlock
     * @since 3.0.0
     */
    unlock: NOOP,

    /**
     * Method used internally for iterating only over active sounds and skipping sounds that are marked for removal.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#forEachActiveSound
     * @private
     * @since 3.0.0
     *
     * @param {Vsengine.Types.Sound.EachActiveSoundCallback} callback - Callback function. (manager: Vsengine.Sound.BaseSoundManager, sound: Vsengine.Sound.BaseSound, index: number, sounds: Vsengine.Manager.BaseSound[]) => void
     * @param {*} [scope] - Callback context.
     */
    forEachActiveSound: function (callbackfn, scope) {
        BaseSoundManager.prototype.forEachActiveSound.call(
            this,
            callbackfn,
            scope
        );
    },

    /**
     * Destroys all the sounds in the game and all associated events.
     *
     * @method Vsengine.Sound.NoAudioSoundManager#destroy
     * @since 3.0.0
     */
    destroy: function () {
        BaseSoundManager.prototype.destroy.call(this);
    },
});

module.exports = NoAudioSoundManager;
