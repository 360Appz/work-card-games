/* ============================================================
   WRNS SOUNDS — Web Audio API synthesized sound engine
   ============================================================ */

const Sounds = (() => {
  let ctx = null;
  let enabled = true;

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  function resume() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  function setEnabled(val) { enabled = val; }

  // ── Low-level helpers ────────────────────────────────────────
  function osc(freq, type, gain, start, dur, ctx_) {
    const o = ctx_.createOscillator();
    const g = ctx_.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    g.gain.setValueAtTime(gain, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g);
    g.connect(ctx_.destination);
    o.start(start);
    o.stop(start + dur);
  }

  function noise(gainVal, start, dur, ctx_) {
    const bufferSize = Math.ceil(ctx_.sampleRate * dur);
    const buffer = ctx_.createBuffer(1, bufferSize, ctx_.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx_.createBufferSource();
    src.buffer = buffer;
    const g = ctx_.createGain();
    const filter = ctx_.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.5;
    g.gain.setValueAtTime(gainVal, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(ctx_.destination);
    src.start(start);
    src.stop(start + dur);
  }

  // ── Sound effects ────────────────────────────────────────────

  // Short percussive click (card select, button press)
  function playClick() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    osc(800, 'sine', 0.15, t, 0.05, ctx);
    osc(400, 'sine', 0.08, t, 0.08, ctx);
  }

  // Whoosh (card swipe / navigate)
  function playWhoosh() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    noise(0.06, t, 0.18, ctx);
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(600, t);
    o.frequency.exponentialRampToValueAtTime(200, t + 0.18);
    g.gain.setValueAtTime(0.06, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + 0.18);
  }

  // Card flip (3D flip animation)
  function playFlip() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    noise(0.03, t, 0.12, ctx);
    osc(1200, 'triangle', 0.04, t, 0.06, ctx);
    osc(600, 'triangle', 0.04, t + 0.06, 0.06, ctx);
  }

  // Ascending sparkle (daily reveal)
  function playReveal() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    const notes = [523, 659, 784, 1047];
    notes.forEach((f, i) => osc(f, 'sine', 0.12, t + i * 0.08, 0.2, ctx));
  }

  // Victory fanfare (deck complete / rapid fire done)
  function playComplete() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    const seq = [523, 659, 784, 880, 1047];
    seq.forEach((f, i) => {
      osc(f, 'triangle', 0.14, t + i * 0.07, 0.25, ctx);
      osc(f * 1.5, 'sine', 0.05, t + i * 0.07, 0.15, ctx);
    });
  }

  // Metronome tick (rapid fire countdown)
  function playTick() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    osc(1000, 'square', 0.08, t, 0.04, ctx);
  }

  // Low-pitched tick (end of rapid fire countdown)
  function playTock() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    osc(500, 'square', 0.1, t, 0.05, ctx);
  }

  // Skip / pass sound
  function playSkip() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    osc(400, 'triangle', 0.08, t, 0.06, ctx);
    osc(300, 'triangle', 0.06, t + 0.04, 0.08, ctx);
  }

  // Level up (deck selected)
  function playLevelUp() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    [330, 440, 550, 660].forEach((f, i) => osc(f, 'triangle', 0.1, t + i * 0.06, 0.18, ctx));
  }

  // Buzz / wrong
  function playBuzz() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    osc(150, 'sawtooth', 0.1, t, 0.12, ctx);
    osc(100, 'sawtooth', 0.07, t + 0.05, 0.1, ctx);
  }

  // Wisdom unlock
  function playUnlock() {
    if (!enabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    [880, 1047, 1319].forEach((f, i) => osc(f, 'sine', 0.1, t + i * 0.1, 0.3, ctx));
  }

  return {
    init, setEnabled,
    playClick, playWhoosh, playFlip,
    playReveal, playComplete,
    playTick, playTock, playSkip,
    playLevelUp, playBuzz, playUnlock
  };
})();
