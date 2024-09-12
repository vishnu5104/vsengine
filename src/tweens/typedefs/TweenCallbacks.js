/**
 * @typedef {object} Vsengine.Types.Tweens.TweenCallbacks
 * @since 3.60.0
 *
 * @property {Vsengine.Types.Tweens.TweenOnActiveCallback} [onActive] - A function to call when the tween becomes active within the Tween Manager.
 * @property {Vsengine.Types.Tweens.TweenOnStartCallback} [onStart] - A function to call when the tween starts playback, after any delays have expired.
 * @property {Vsengine.Types.Tweens.TweenOnCompleteCallback} [onComplete] - A function to call when the tween completes.
 * @property {Vsengine.Types.Tweens.TweenOnLoopCallback} [onLoop] - A function to call each time the tween loops.
 * @property {Vsengine.Types.Tweens.TweenOnPauseCallback} [onPause] - A function to call each time the tween is paused.
 * @property {Vsengine.Types.Tweens.TweenOnResumeCallback} [onResume] - A function to call each time the tween is resumed.
 * @property {Vsengine.Types.Tweens.TweenOnRepeatCallback} [onRepeat] - A function to call each time the tween repeats. Called once per property per target.
 * @property {Vsengine.Types.Tweens.TweenOnStopCallback} [onStop] - A function to call when the tween is stopped.
 * @property {Vsengine.Types.Tweens.TweenOnUpdateCallback} [onUpdate] - A function to call each time the tween steps. Called once per property per target.
 * @property {Vsengine.Types.Tweens.TweenOnYoyoCallback} [onYoyo] - A function to call each time the tween yoyos. Called once per property per target.
 */
