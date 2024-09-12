/**
 * @typedef {object} Vsengine.Types.GameObjects.Particles.ParticleEmitterAnimConfig
 * @since 3.60.0
 *
 * @property {string|string[]|Vsengine.Types.Animations.PlayAnimationConfig|Vsengine.Types.Animations.PlayAnimationConfig[]} [anims] - One or more animations names, or Play Animation Config objects.
 * @property {boolean} [cycle=false] - Whether animations will be assigned consecutively (true) or at random (false).
 * @property {number} [quantity=1] - The number of consecutive particles receiving each animation, when `cycle` is true.
 */
