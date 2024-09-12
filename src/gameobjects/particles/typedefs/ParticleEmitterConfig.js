/**
 * @typedef {object} Vsengine.Types.GameObjects.Particles.ParticleEmitterConfig
 * @since 3.0.0
 *
 * @property {boolean} [active] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#active}. Setting this to false will stop the emitter from running at all. If you just wish to stop particles from emitting, set `emitting` property instead.
 * @property {Vsengine.BlendModes|string} [blendMode] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#blendMode}.
 * @property {*} [callbackScope] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#deathCallbackScope} and {@link Vsengine.GameObjects.Particles.ParticleEmitter#emitCallbackScope}.
 * @property {boolean} [collideBottom] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#collideBottom}.
 * @property {boolean} [collideLeft] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#collideLeft}.
 * @property {boolean} [collideRight] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#collideRight}.
 * @property {boolean} [collideTop] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#collideTop}.
 * @property {function} [deathCallback] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#deathCallback}.
 * @property {*} [deathCallbackScope] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#deathCallbackScope}.
 * @property {function} [emitCallback] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#emitCallback}.
 * @property {*} [emitCallbackScope] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#emitCallbackScope}.
 * @property {Vsengine.Types.Math.Vector2Like} [follow] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#follow}.
 * @property {number} [frequency] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#frequency}.
 * @property {number} [gravityX] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#gravityX}.
 * @property {number} [gravityY] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#gravityY}.
 * @property {number} [maxParticles] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#maxParticles}.
 * @property {number} [maxAliveParticles] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#maxAliveParticles}.
 * @property {string} [name] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#name}.
 * @property {boolean} [emitting] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#emitting}.
 * @property {boolean} [particleBringToTop] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleBringToTop}.
 * @property {function} [particleClass] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleClass}.
 * @property {boolean} [radial] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#radial}.
 * @property {number} [timeScale] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#timeScale}.
 * @property {boolean} [trackVisible] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#trackVisible}.
 * @property {boolean} [visible] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#visible}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [accelerationX] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#accelerationX}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [accelerationY] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#accelerationY}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [alpha] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleAlpha}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [angle] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleAngle} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [bounce] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#bounce}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [delay] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#delay} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [hold] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#hold} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [lifespan] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#lifespan} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [maxVelocityX] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#maxVelocityX}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [maxVelocityY] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#maxVelocityY}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [moveToX] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#moveToX}. If set, overrides `angle` and `speed` properties.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [moveToY] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#moveToY}. If set, overrides `angle` and `speed` properties.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [quantity] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#quantity} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [rotate] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleRotate}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [scale] - As {@link Vsengine.GameObjects.Particles.ParticleEmitter#setScale}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [scaleX] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleScaleX}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [scaleY] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleScaleY}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [speed] - As {@link Vsengine.GameObjects.Particles.ParticleEmitter#setSpeed} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [speedX] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#speedX} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType} [speedY] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#speedY} (emit only).
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [tint] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleTint}.
 * @property {number[]} [color] - An array of color values that the Particles interpolate through during their life. If set, overrides any `tint` property.
 * @property {string} [colorEase] - The string-based name of the Easing function to use if you have enabled Particle color interpolation via the `color` property, otherwise has no effect.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [x] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleX}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitterOpOnEmitType|Vsengine.Types.GameObjects.Particles.EmitterOpOnUpdateType} [y] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#particleY}.
 * @property {Vsengine.Types.GameObjects.Particles.EmitZoneData|Vsengine.Types.GameObjects.Particles.EmitZoneData[]} [emitZone] - As {@link Vsengine.GameObjects.Particles.ParticleEmitter#setEmitZone}.
 * @property {Vsengine.Types.GameObjects.Particles.DeathZoneObject|Vsengine.Types.GameObjects.Particles.DeathZoneObject[]} [deathZone] - As {@link Vsengine.GameObjects.Particles.ParticleEmitter#setDeathZone}.
 * @property {Vsengine.Types.GameObjects.Particles.ParticleEmitterBounds|Vsengine.Types.GameObjects.Particles.ParticleEmitterBoundsAlt} [bounds] - As {@link Vsengine.GameObjects.Particles.ParticleEmitter#setBounds}.
 * @property {Vsengine.Types.Math.Vector2Like} [followOffset] - Offset coordinates that assigns to {@link Vsengine.GameObjects.Particles.ParticleEmitter#followOffset}.
 * @property {string|string[]|Vsengine.Types.GameObjects.Particles.ParticleEmitterAnimConfig} [anim] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#anims}.
 * @property {number|number[]|string|string[]|Vsengine.Textures.Frame|Vsengine.Textures.Frame[]|Vsengine.Types.GameObjects.Particles.ParticleEmitterFrameConfig} [frame] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#frames}.
 * @property {string|Vsengine.Textures.Texture} [texture] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#texture}. Overrides any texture already set on the Emitter.
 * @property {number} [reserve] - Creates specified number of inactive particles and adds them to this emitter's pool. {@link Vsengine.GameObjects.Particles.ParticleEmitter#reserve}
 * @property {number} [advance] - If you wish to 'fast forward' the emitter in time, set this value to a number representing the amount of ms the emitter should advance. Doing so implicitly sets `emitting` to `true`.
 * @property {number} [duration] - Limit the emitter to emit particles for a maximum of `duration` ms. Default to zero, meaning 'forever'.
 * @property {number} [stopAfter] - Limit the emitter to emit this exact number of particles and then stop. Default to zero, meaning no limit.
 * @property {Vsengine.Types.GameObjects.Particles.ParticleSortCallback} [sortCallback] - A custom callback that sorts particles prior to rendering. Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#sortCallback}.
 * @property {boolean} [sortOrderAsc] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#sortOrderAsc}.
 * @property {string} [sortProperty] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#sortProperty}.
 * @property {boolean} [tintFill] - Sets {@link Vsengine.GameObjects.Particles.ParticleEmitter#tintFill}.
 */
