/**
 * @typedef {object} Vsengine.Types.Core.CallbacksConfig
 * @since 3.0.0
 *
 * @property {Vsengine.Types.Core.BootCallback} [preBoot=Vsengine.Types.Core.NOOP] - A function to run at the start of the boot sequence.
 * @property {Vsengine.Types.Core.BootCallback} [postBoot=Vsengine.Types.Core.NOOP] - A function to run at the end of the boot sequence. At this point, all the game systems have started and plugins have been loaded.
 */
