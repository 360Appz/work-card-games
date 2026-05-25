/* ============================================================
   WRNS ENGINE — Game logic, seeded shuffle, daily/hourly state
   ============================================================ */

const Engine = (() => {

  // ── Seeded PRNG (Mulberry32) ─────────────────────────────────
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, seed | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 0x100000000;
    };
  }

  function seededShuffle(arr, seed) {
    const rng = mulberry32(seed);
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  // ── Seed generators ──────────────────────────────────────────
  function getDaySeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function getHourSeed() {
    const d = new Date();
    return getDaySeed() * 100 + d.getHours();
  }

  // ── Daily selections (seeded to calendar date) ───────────────
  function getDailyQuestion() {
    const seed = getDaySeed();
    const shuffled = seededShuffle(ALL_QUESTIONS, seed);
    return shuffled[0];
  }

  function getDailyQuote() {
    const seed = getDaySeed() + 1;
    const shuffled = seededShuffle(QUOTES, seed);
    return shuffled[0];
  }

  function getDailySentence() {
    const completeDeck = DECKS.find(d => d.id === 'complete');
    const seed = getDaySeed() + 2;
    const shuffled = seededShuffle(completeDeck.questions, seed);
    return shuffled[0];
  }

  // ── Hourly shuffled deck ─────────────────────────────────────
  function getHourlyDeck(deckId) {
    const deck = DECKS.find(d => d.id === deckId);
    if (!deck) return [];
    const seed = getHourSeed() + deck.id.charCodeAt(0);
    return seededShuffle(deck.questions, seed);
  }

  function getHourlyAllQuestions() {
    const seed = getHourSeed() + 99;
    return seededShuffle(ALL_QUESTIONS, seed);
  }

  // ── Wisdom hourly shuffle ────────────────────────────────────
  function getHourlyWisdomOrder() {
    const seed = getHourSeed() + 777;
    return seededShuffle(WISDOM_SECTIONS, seed);
  }

  // ── Progress tracking (localStorage) ────────────────────────
  const STORAGE_KEY = 'wrns_progress';

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  }

  function setProgress(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
  }

  function markRead(sectionId) {
    const p = getProgress();
    p[`wisdom_${sectionId}`] = true;
    setProgress(p);
  }

  function isRead(sectionId) {
    return !!getProgress()[`wisdom_${sectionId}`];
  }

  function getReadCount() {
    return Object.keys(getProgress()).filter(k => k.startsWith('wisdom_')).length;
  }

  function markDeckCard(deckId, idx) {
    const p = getProgress();
    p[`deck_${deckId}_${idx}`] = true;
    setProgress(p);
  }

  function resetProgress() {
    setProgress({});
  }

  // ── Countdown to next day ────────────────────────────────────
  function msToMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight - now;
  }

  function formatCountdown(ms) {
    const totalSec = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
    const s = String(totalSec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  // ── Countdown to next hour ───────────────────────────────────
  function msToNextHour() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(next.getHours() + 1, 0, 0, 0);
    return next - now;
  }

  // ── Card style variations (hourly) ──────────────────────────
  const CARD_STYLES = [
    'card-style-a', 'card-style-b', 'card-style-c', 'card-style-d'
  ];

  function getHourlyCardStyle() {
    return CARD_STYLES[new Date().getHours() % CARD_STYLES.length];
  }

  // ── Rapid fire scoring ───────────────────────────────────────
  function calcRapidScore(answered, skipped, timeMs) {
    const base = answered * 10;
    const timebonus = Math.max(0, 300 - Math.floor(timeMs / 1000)) * 0.5;
    const penalty = skipped * 2;
    return Math.round(Math.max(0, base + timebonus - penalty));
  }

  function getRapidGrade(score) {
    if (score >= 200) return { label: 'Legend', emoji: '🏆', color: '#FFE500' };
    if (score >= 150) return { label: 'Pro', emoji: '🌟', color: '#AAFF00' };
    if (score >= 100) return { label: 'Solid', emoji: '💪', color: '#0047FF' };
    if (score >= 50)  return { label: 'Decent', emoji: '🤝', color: '#FF8A00' };
    return { label: 'Keep Going', emoji: '🌱', color: '#00D97E' };
  }

  // ── Public API ───────────────────────────────────────────────
  return {
    getDaySeed,
    getHourSeed,
    seededShuffle,
    getDailyQuestion,
    getDailyQuote,
    getDailySentence,
    getHourlyDeck,
    getHourlyAllQuestions,
    getHourlyWisdomOrder,
    markRead,
    isRead,
    getReadCount,
    markDeckCard,
    resetProgress,
    msToMidnight,
    msToNextHour,
    formatCountdown,
    getHourlyCardStyle,
    calcRapidScore,
    getRapidGrade
  };
})();
