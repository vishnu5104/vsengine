/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Particle Emitter Death Zone Event.
 *
 * This event is dispatched when a Death Zone kills a Particle instance.
 *
 * Listen for it on a Particle Emitter instance using `ParticleEmitter.on('deathzone', listener)`.
 *
 * If you wish to know when the final particle is killed, see the `COMPLETE` event.
 *
 * @event Vsengine.GameObjects.Particles.Events#DEATH_ZONE
 * @type {string}
 * @since 3.60.0
 *
 * @param {Vsengine.GameObjects.Particles.ParticleEmitter} emitter - A reference to the Particle Emitter that owns the Particle and Death Zone.
 * @param {Vsengine.GameObjects.Particles.Particle} particle - The Particle that has been killed.
 * @param {Vsengine.GameObjects.Particles.Zones.DeathZone} zone - The Death Zone that killed the particle.
 */
module.exports = "deathzone";
