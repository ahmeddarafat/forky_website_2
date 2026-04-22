'use client';

import { useEffect, useRef } from 'react';

/* ── Must match globals.css background-size exactly ─────────── */
const GRID = 68;
const C    = '45, 212, 191'; // teal RGB

/* ── Pick a random grid coordinate snapped to the grid ──────── */
function snapRand(count) {
  return Math.floor(Math.random() * count) * GRID;
}

/* ── Streak ──────────────────────────────────────────────────── */
class Streak {
  /**
   * @param {number} w   canvas width
   * @param {number} h   canvas height
   * @param {boolean} [burst]  if true: faster, slightly brighter (scroll burst)
   */
  constructor(w, h, burst = false) {
    this.done      = false;
    this.startTime = null;
    this.burst     = burst;

    this.isH = Math.random() > 0.5;

    /* duration: normal 5–10 s, burst 1.8–3 s */
    this.duration = burst
      ? 1800 + Math.random() * 1200
      : 5000 + Math.random() * 5000;

    /* tail length in px */
    this.tailLen = burst
      ? 50 + Math.random() * 60
      : 80 + Math.random() * 100;

    /* max alpha of the streak line */
    this.maxAlpha = burst ? 0.9 : 0.7;

    if (this.isH) {
      const rows = Math.max(1, Math.floor(h / GRID));
      /* snap fixed axis to a grid line */
      this.fixed = snapRand(rows);
      const goRight = Math.random() > 0.5;
      this.from = goRight ? 0              : w;
      this.to   = goRight ? w              : 0;
    } else {
      const cols = Math.max(1, Math.floor(w / GRID));
      this.fixed = snapRand(cols);
      const goDown = Math.random() > 0.5;
      this.from = goDown ? 0 : h;
      this.to   = goDown ? h : 0;
    }
  }

  draw(ctx, time) {
    if (!this.startTime) this.startTime = time;

    const t = Math.min((time - this.startTime) / this.duration, 1);
    if (t >= 1) { this.done = true; return; }

    /* ease-in-out cubic */
    const ease = t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const head = this.from + (this.to - this.from) * ease;
    const dir  = this.to > this.from ? 1 : -1;
    const tail = head - dir * this.tailLen;

    /* fade: in 10 %, hold, out 15 % */
    const env =
      t < 0.10 ? t / 0.10
      : t > 0.85 ? (1 - t) / 0.15
      : 1;

    const alpha = env * this.maxAlpha;

    ctx.save();
    ctx.globalAlpha = alpha;

    if (this.isH) {
      const x0 = Math.min(tail, head);
      const x1 = Math.max(tail, head);
      const g  = ctx.createLinearGradient(x0, this.fixed, x1, this.fixed);
      /* gradient flows in direction of travel */
      if (dir > 0) {
        g.addColorStop(0,    `rgba(${C}, 0)`);
        g.addColorStop(0.55, `rgba(${C}, 0.18)`);
        g.addColorStop(1,    `rgba(${C}, 0.6)`);
      } else {
        g.addColorStop(0,    `rgba(${C}, 0.6)`);
        g.addColorStop(0.45, `rgba(${C}, 0.18)`);
        g.addColorStop(1,    `rgba(${C}, 0)`);
      }
      ctx.beginPath();
      ctx.moveTo(tail, this.fixed);
      ctx.lineTo(head, this.fixed);
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1;
      ctx.shadowColor = `rgba(${C}, 0.5)`;
      ctx.shadowBlur  = 4;
      ctx.stroke();

      /* tip glow */
      const r = ctx.createRadialGradient(head, this.fixed, 0, head, this.fixed, 6);
      r.addColorStop(0, `rgba(${C}, 0.9)`);
      r.addColorStop(1, `rgba(${C}, 0)`);
      ctx.fillStyle = r;
      ctx.beginPath();
      ctx.arc(head, this.fixed, 6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const y0 = Math.min(tail, head);
      const y1 = Math.max(tail, head);
      const g  = ctx.createLinearGradient(this.fixed, y0, this.fixed, y1);
      if (dir > 0) {
        g.addColorStop(0,    `rgba(${C}, 0)`);
        g.addColorStop(0.55, `rgba(${C}, 0.18)`);
        g.addColorStop(1,    `rgba(${C}, 0.6)`);
      } else {
        g.addColorStop(0,    `rgba(${C}, 0.6)`);
        g.addColorStop(0.45, `rgba(${C}, 0.18)`);
        g.addColorStop(1,    `rgba(${C}, 0)`);
      }
      ctx.beginPath();
      ctx.moveTo(this.fixed, tail);
      ctx.lineTo(this.fixed, head);
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1;
      ctx.shadowColor = `rgba(${C}, 0.5)`;
      ctx.shadowBlur  = 4;
      ctx.stroke();

      const r = ctx.createRadialGradient(this.fixed, head, 0, this.fixed, head, 6);
      r.addColorStop(0, `rgba(${C}, 0.9)`);
      r.addColorStop(1, `rgba(${C}, 0)`);
      ctx.fillStyle = r;
      ctx.beginPath();
      ctx.arc(this.fixed, head, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

/* ── Component ───────────────────────────────────────────────── */
export default function GridStreaks() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let raf;
    let streaks     = [];
    let nextSpawn   = null;    // set on first tick
    let scrollCooldown = 0;    // timestamp until next scroll burst is allowed

    /* ── resize: keep canvas pixel-perfect ── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    /* ── scroll: trigger a burst streak (max 1 per 2 s) ── */
    const onScroll = () => {
      const now = performance.now();
      if (now < scrollCooldown) return;
      scrollCooldown = now + 2000;
      /* only add burst if not too crowded */
      if (streaks.filter(s => !s.done).length < 3) {
        streaks.push(new Streak(canvas.width, canvas.height, true));
      }
    };

    /* ── main loop ── */
    const tick = (time) => {
      /* schedule first ambient streak 1.5 – 4 s after mount */
      if (nextSpawn === null) nextSpawn = time + 1500 + Math.random() * 2500;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* spawn ambient streak if it's time and we have room */
      const active = streaks.filter(s => !s.done).length;
      if (time >= nextSpawn && active < 3) {
        streaks.push(new Streak(canvas.width, canvas.height, false));
        /* next ambient spawn: 3 – 10 s — independent of others */
        nextSpawn = time + 3000 + Math.random() * 7000;
      }

      streaks = streaks.filter(s => !s.done);
      for (const s of streaks) s.draw(ctx, time);

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

