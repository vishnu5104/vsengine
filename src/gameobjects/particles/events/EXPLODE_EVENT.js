/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Particle Emitter Explode Event.
 *
 * This event is dispatched when a Particle Emitter explodes a set of particles.
 *
 * Listen for it on a Particle Emitter instance using `ParticleEmitter.on('explode', listener)`.
 *
 * @event Vsengine.GameObjects.Particles.Events#EXPLODE
 * @type {string}
 * @since 3.60.0
 *
 * @param {Vsengine.GameObjects.Particles.ParticleEmitter} emitter - A reference to the Particle Emitter that just completed.
 * @param {Vsengine.GameObjects.Particles.Particle} particle - The most recently emitted Particle.
 */
module.exports = "explode";
