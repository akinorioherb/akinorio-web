'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'

export default function CoachingPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.lp-js-reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'))
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.10, rootMargin: '0px 0px -28px 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .lp-coaching {
          --gold:       #cfaa70;
          --gold-light: #f0dc98;
          --gold-rgb:   207, 170, 112;
          --bg-base:    radial-gradient(ellipse 120% 80% at 50% 20%, #9e1023 0%, #7a0818 40%, #4a0210 70%, #1a0005 100%);
          --bg-card:    #1a0008;
          --text-main:  rgba(255,255,255,0.90);
          --text-sub:   rgba(255,255,255,0.55);
          --text-muted: rgba(255,255,255,0.30);
          --line-green: #06c755;
          font-family: 'Noto Serif JP', serif;
          background: var(--bg-base);
          background-attachment: fixed;
          color: var(--text-main);
          line-height: 1.9;
          overflow-x: hidden;
          word-break: normal;
          overflow-wrap: break-word;
          font-feature-settings: "palt";
        }
        .lp-coaching *, .lp-coaching *::before, .lp-coaching *::after {
          box-sizing: border-box;
        }
        .lp-coaching h1, .lp-coaching h2, .lp-coaching h3 { font-weight: 300; line-height: 1.6; }
        .lp-coaching em { font-style: normal; color: var(--gold); font-weight: 600; }

        @keyframes lp-fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lp-fadeIn   { from { opacity: 0; } to { opacity: 1; } }
        @keyframes lp-lineGrow { from { height: 0; } to { height: 64px; } }
        @keyframes lp-shimmer  { from { left: -60%; } to { left: 160%; } }

        .lp-js-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .lp-js-reveal.visible { opacity: 1; transform: translateY(0); }

        .lp-coaching .container { max-width: 680px; margin: 0 auto; padding: 0 24px; }
        .lp-coaching section { padding: 88px 0; }

        .lp-coaching .section-label {
          font-family: 'Cinzel', serif;
          font-size: 0.62rem;
          letter-spacing: 0.5em;
          color: var(--gold);
          opacity: 0.7;
          text-align: center;
          margin-bottom: 20px;
        }
        .lp-coaching .section-h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(1.25rem, 4vw, 1.65rem);
          color: var(--text-main);
          text-align: center;
          font-weight: 300;
          line-height: 2;
        }
        .lp-coaching .divider {
          width: 40px; height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
          margin: 36px auto;
        }
        .lp-coaching .gold-line {
          width: 1px; height: 0;
          background: linear-gradient(to bottom, transparent, var(--gold), transparent);
          margin: 0 auto;
          animation: lp-lineGrow 1.2s ease-out 1s forwards;
        }

        /* HERO */
        .lp-coaching .hero {
          min-height: 100vh; min-height: 100dvh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 60px 24px;
          position: relative;
          overflow: hidden;
        }
        .lp-coaching .hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(207,170,112, 0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .lp-coaching .hero-brand {
          font-family: 'Cinzel', serif;
          font-size: 0.82rem;
          letter-spacing: 0.55em;
          color: var(--gold);
          opacity: 0;
          animation: lp-fadeIn 1.5s ease-out 0.3s forwards;
        }
        .lp-coaching .hero-ornament {
          margin: 22px auto 0;
          opacity: 0;
          animation: lp-fadeIn 1.5s ease-out 0.8s forwards;
        }
        .lp-coaching .hero-catch {
          margin-top: 52px;
          opacity: 0;
          animation: lp-fadeUp 1.5s cubic-bezier(0.22,1,0.36,1) 1.2s forwards;
        }
        .lp-coaching .hero-catch h1 {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(1.3rem, 4vw, 1.75rem);
          font-weight: 300;
          color: var(--text-main);
          line-height: 2.5;
        }
        .lp-coaching .hero-sub {
          margin-top: 36px;
          opacity: 0;
          animation: lp-fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) 2s forwards;
        }
        .lp-coaching .hero-sub p {
          font-size: clamp(0.88rem, 2.5vw, 1rem);
          color: var(--text-sub);
          line-height: 2.4;
        }
        .lp-coaching .hero-sub p strong { color: var(--gold-light); font-weight: 300; }
        .lp-coaching .hero-cta-wrap {
          margin-top: 52px;
          opacity: 0;
          animation: lp-fadeUp 1.2s ease-out 2.8s forwards;
        }
        .lp-coaching .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #b8873a 0%, #d4af61 28%, #f0dc98 50%, #cfaa70 72%, #9e7030 100%);
          box-shadow: 0 4px 28px rgba(207,170,112, 0.40);
          color: #120002;
          font-family: 'Noto Serif JP', serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          padding: 18px 44px;
          border-radius: 2px;
          letter-spacing: 0.18em;
          position: relative;
          overflow: hidden;
          transition: opacity 0.2s, box-shadow 0.2s;
        }
        .lp-coaching .btn-gold:hover { opacity: 0.88; box-shadow: 0 6px 36px rgba(207,170,112, 0.55); }
        .lp-coaching .btn-gold::after {
          content: '';
          position: absolute; top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: lp-shimmer 2.8s ease-in-out 5s infinite;
        }
        .lp-coaching .btn-gold svg { flex-shrink: 0; }
        .lp-coaching .hero-note {
          margin-top: 16px;
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }
        .lp-coaching .hero-scroll {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          font-family: 'Cinzel', serif; font-size: 0.58rem; letter-spacing: 0.45em;
          color: var(--text-muted);
          opacity: 0; animation: lp-fadeIn 1s ease-out 3.5s forwards;
        }

        /* EMPATHY */
        .lp-coaching .empathy { background: rgba(26,0,8,0.50); }
        .lp-coaching .empathy-list { list-style: none; margin-top: 40px; }
        .lp-coaching .empathy-list li {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-size: clamp(0.88rem, 2.5vw, 0.98rem);
          color: var(--text-sub); line-height: 2;
        }
        .lp-coaching .empathy-list li:last-child { border-bottom: none; }
        .lp-coaching .empathy-list li::before { content: '―'; color: var(--gold); opacity: 0.5; flex-shrink: 0; margin-top: 2px; }
        .lp-coaching .empathy-close {
          margin-top: 48px;
          padding: 36px;
          border: 1px solid rgba(207,170,112, 0.20);
          border-radius: 2px;
          background: rgba(207,170,112, 0.03);
        }
        .lp-coaching .empathy-close p {
          font-size: clamp(0.98rem, 3vw, 1.12rem);
          line-height: 2.5; color: var(--text-main); text-align: center;
        }

        /* PROBLEM */
        .lp-coaching .problem { background: rgba(32,10,15,0.55); }
        .lp-coaching .problem-heading {
          font-size: clamp(1.25rem, 4vw, 1.65rem);
          text-align: center; line-height: 2; color: var(--text-main);
        }
        .lp-coaching .problem-body { margin-top: 48px; }
        .lp-coaching .problem-body p {
          font-size: clamp(0.88rem, 2.5vw, 0.98rem);
          color: var(--text-sub); line-height: 2.4; margin-bottom: 24px;
        }
        .lp-coaching .loop-box {
          margin: 48px 0; padding: 32px;
          background: rgba(26,0,8,0.70);
          border-left: 2px solid var(--gold); border-radius: 0 2px 2px 0;
        }
        .lp-coaching .loop-box p { font-size: 0.95rem; color: var(--text-sub); line-height: 2.6; margin: 0; }
        .lp-coaching .loop-box p span { color: var(--gold); }
        .lp-coaching .problem-conclusion {
          text-align: center;
          font-size: clamp(0.98rem, 3vw, 1.08rem);
          color: var(--text-main); line-height: 2.4;
        }

        /* PHILOSOPHY */
        .lp-coaching .philosophy { background: rgba(26,0,5,0.40); position: relative; overflow: hidden; }
        .lp-coaching .philosophy::before {
          content: '';
          position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(ellipse, rgba(207,170,112, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .lp-coaching .philosophy-heading {
          font-size: clamp(1.25rem, 4vw, 1.65rem);
          text-align: center; color: var(--text-main);
        }
        .lp-coaching .philosophy-body { margin-top: 48px; }
        .lp-coaching .philosophy-body p {
          font-size: clamp(0.88rem, 2.5vw, 0.98rem);
          color: var(--text-sub); line-height: 2.4; margin-bottom: 24px;
        }
        .lp-coaching .subtract-list { margin: 40px 0; list-style: none; }
        .lp-coaching .subtract-list li {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: clamp(0.92rem, 2.8vw, 1.02rem); color: var(--text-main);
        }
        .lp-coaching .subtract-list li::before {
          content: '−'; font-family: 'Cinzel', serif; font-size: 1.1rem;
          color: var(--gold); flex-shrink: 0; width: 24px; text-align: center;
        }
        .lp-coaching .philosophy-quote {
          margin-top: 48px; padding: 40px 32px; text-align: center;
          border-top: 1px solid rgba(207,170,112, 0.20);
          border-bottom: 1px solid rgba(207,170,112, 0.20);
        }
        .lp-coaching .philosophy-quote p {
          font-size: clamp(0.98rem, 3vw, 1.1rem); color: var(--gold-light); line-height: 2.6;
        }

        /* VOICES */
        .lp-coaching .voices { background: rgba(26,0,8,0.50); }
        .lp-coaching .voice-card {
          margin-top: 32px; padding: 36px 32px;
          background: rgba(26,0,8,0.80);
          border-radius: 2px;
          border-top: 1px solid rgba(207,170,112, 0.30);
        }
        .lp-coaching .voice-card + .voice-card { margin-top: 20px; }
        .lp-coaching .voice-meta {
          font-family: 'Cinzel', serif; font-size: 0.68rem;
          letter-spacing: 0.30em; color: var(--gold); opacity: 0.80; margin-bottom: 22px;
        }
        .lp-coaching .voice-before-after {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;
        }
        @media (max-width: 480px) { .lp-coaching .voice-before-after { grid-template-columns: 1fr; } }
        .lp-coaching .voice-col-label {
          font-size: 0.65rem; letter-spacing: 0.22em; font-family: 'Cinzel', serif;
          margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .lp-coaching .voice-col-label.before { color: var(--text-muted); }
        .lp-coaching .voice-col-label.after  { color: var(--gold); }
        .lp-coaching .voice-col p { font-size: 0.86rem; color: var(--text-sub); line-height: 1.95; }
        .lp-coaching .voice-col.after p { color: var(--text-main); }
        .lp-coaching .voice-quote { padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); }
        .lp-coaching .voice-quote p { font-size: 0.88rem; color: var(--text-sub); line-height: 2.1; }
        .lp-coaching .voice-quote p::before { content: '「'; color: var(--gold); }
        .lp-coaching .voice-quote p::after  { content: '」'; color: var(--gold); }

        /* PROGRAM */
        .lp-coaching .program { background: rgba(32,10,15,0.55); }
        .lp-coaching .program-heading {
          font-size: clamp(1.25rem, 4vw, 1.65rem);
          text-align: center; color: var(--text-main);
        }
        .lp-coaching .week-grid { margin-top: 48px; display: flex; flex-direction: column; gap: 2px; }
        .lp-coaching .week-item {
          display: grid; grid-template-columns: 96px 1fr;
          background: rgba(26,0,8,0.80); border-radius: 2px; overflow: hidden;
        }
        .lp-coaching .week-label {
          background: rgba(207,170,112, 0.07);
          padding: 28px 16px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          border-right: 1px solid rgba(207,170,112, 0.15);
        }
        .lp-coaching .week-label .num { font-family: 'Cinzel', serif; font-size: 1.35rem; color: var(--gold); line-height: 1; }
        .lp-coaching .week-label .days { font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.1em; margin-top: 4px; }
        .lp-coaching .week-body { padding: 28px 28px; }
        .lp-coaching .week-body h3 { font-size: 0.92rem; color: var(--text-main); letter-spacing: 0.05em; margin-bottom: 8px; font-weight: 400; }
        .lp-coaching .week-body p { font-size: 0.84rem; color: var(--text-sub); line-height: 2; }
        .lp-coaching .includes-box {
          margin-top: 48px; padding: 36px 32px;
          border: 1px solid rgba(207,170,112, 0.20); border-radius: 2px;
        }
        .lp-coaching .includes-box h3 {
          font-family: 'Cinzel', serif; font-size: 0.72rem;
          letter-spacing: 0.38em; color: var(--gold); margin-bottom: 24px;
        }
        .lp-coaching .includes-list { list-style: none; }
        .lp-coaching .includes-list li {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 0.88rem; color: var(--text-sub);
        }
        .lp-coaching .includes-list li:last-child { border-bottom: none; }
        .lp-coaching .includes-list li::before { content: '✓'; color: var(--gold); flex-shrink: 0; font-size: 0.78rem; margin-top: 3px; }
        .lp-coaching .capacity-note { margin-top: 24px; text-align: center; font-size: 0.83rem; color: var(--text-muted); }
        .lp-coaching .capacity-note strong { color: var(--gold); font-weight: 400; }

        /* OWNER */
        .lp-coaching .owner { background: rgba(26,0,5,0.40); }
        .lp-coaching .owner-inner {
          display: grid; grid-template-columns: 176px 1fr; gap: 40px; align-items: start;
        }
        @media (max-width: 520px) { .lp-coaching .owner-inner { grid-template-columns: 1fr; } }
        .lp-coaching .owner-photo {
          width: 100%; aspect-ratio: 1;
          background: rgba(26,0,8,0.80);
          border-radius: 2px; overflow: hidden;
          border: 1px solid rgba(207,170,112, 0.18);
          display: flex; align-items: center; justify-content: center;
        }
        .lp-coaching .owner-photo img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
        .lp-coaching .owner-text h3 {
          font-family: 'Cinzel', serif; font-size: 0.68rem;
          letter-spacing: 0.42em; color: var(--gold); margin-bottom: 12px;
        }
        .lp-coaching .owner-name { font-size: 1.5rem; color: var(--text-main); margin-bottom: 24px; font-weight: 300; letter-spacing: 0.08em; }
        .lp-coaching .owner-text p { font-size: 0.88rem; color: var(--text-sub); line-height: 2.3; margin-bottom: 16px; }

        /* FAQ */
        .lp-coaching .faq { background: rgba(26,0,8,0.50); }
        .lp-coaching .faq-list { margin-top: 40px; }
        .lp-coaching .faq-item { padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .lp-coaching .faq-item:last-child { border-bottom: none; }
        .lp-coaching .faq-q { display: flex; gap: 16px; margin-bottom: 14px; }
        .lp-coaching .faq-q::before { content: 'Q'; font-family: 'Cinzel', serif; font-size: 0.82rem; color: var(--gold); flex-shrink: 0; margin-top: 3px; }
        .lp-coaching .faq-q p { font-size: clamp(0.88rem, 2.5vw, 0.96rem); color: var(--text-main); line-height: 1.9; }
        .lp-coaching .faq-a { display: flex; gap: 16px; }
        .lp-coaching .faq-a::before { content: 'A'; font-family: 'Cinzel', serif; font-size: 0.82rem; color: var(--text-muted); flex-shrink: 0; margin-top: 3px; }
        .lp-coaching .faq-a p { font-size: 0.86rem; color: var(--text-sub); line-height: 2.1; }

        /* FINAL CTA */
        .lp-coaching .final-cta { text-align: center; padding: 100px 24px; }
        .lp-coaching .final-cta h2 {
          font-size: clamp(1.2rem, 3.5vw, 1.55rem);
          color: var(--text-main); line-height: 2.3; font-weight: 300; margin-bottom: 24px;
        }
        .lp-coaching .final-cta p {
          font-size: clamp(0.86rem, 2.5vw, 0.98rem);
          color: var(--text-sub); line-height: 2.5;
          max-width: 520px; margin: 0 auto 52px;
        }
        .lp-coaching .final-note { margin-top: 20px; font-size: 0.72rem; color: var(--text-muted); line-height: 2.1; }

        /* FREE TRIAL */
        .lp-coaching .freetrial { background: rgba(26,0,5,0.60); }
        .lp-coaching .product-box {
          margin-top: 40px;
          border: 1px solid rgba(207,170,112, 0.40);
          border-radius: 2px;
          overflow: hidden;
        }
        .lp-coaching .product-box-label {
          background: linear-gradient(135deg, #b8873a 0%, #d4af61 40%, #cfaa70 100%);
          color: #120002;
          font-family: 'Cinzel', serif;
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-align: center;
          padding: 10px 20px;
          font-weight: 700;
        }
        .lp-coaching .product-box-inner {
          padding: 36px 36px 28px;
          text-align: center;
          background: rgba(26,0,8,0.80);
          border-bottom: 1px solid rgba(207,170,112, 0.12);
        }
        .lp-coaching .product-box-name {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(1.2rem, 4vw, 1.55rem);
          color: var(--text-main);
          font-weight: 300;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .lp-coaching .product-box-volume {
          font-size: 0.84rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          margin-bottom: 18px;
          text-decoration: line-through;
        }
        .lp-coaching .product-box-price {
          font-size: clamp(1.1rem, 3.5vw, 1.45rem);
          color: var(--gold-light);
          font-weight: 300;
          letter-spacing: 0.06em;
        }
        .lp-coaching .product-box-desc {
          padding: 32px 36px;
          font-size: clamp(0.86rem, 2.5vw, 0.96rem);
          color: var(--text-sub);
          line-height: 2.4;
          background: rgba(26,0,8,0.60);
        }
        .lp-coaching .product-box-note {
          padding: 18px 36px 24px;
          font-size: 0.74rem;
          color: var(--text-muted);
          line-height: 2;
          background: rgba(26,0,8,0.80);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* STICKY CTA */
        .lp-sticky-cta {
          position: fixed; bottom: 0; left: 0; right: 0;
          background: rgba(26,0,8,0.92); backdrop-filter: blur(12px);
          padding: 14px 20px; display: none; z-index: 100;
          border-top: 1px solid rgba(207,170,112, 0.15);
        }
        @media (max-width: 680px) {
          .lp-sticky-cta { display: block; }
          .lp-sticky-cta .btn-gold { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="lp-coaching">
        {/* HERO */}
        <section className="hero">
          <p className="hero-brand">AKINORIO</p>
          <svg className="hero-ornament" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="21" stroke="#cfaa70" strokeOpacity="0.25" strokeWidth="0.5"/>
            <circle cx="22" cy="22" r="1.5" fill="#cfaa70" fillOpacity="0.5"/>
            <line x1="22" y1="0" x2="22" y2="9"  stroke="#cfaa70" strokeOpacity="0.35" strokeWidth="0.5"/>
            <line x1="22" y1="35" x2="22" y2="44" stroke="#cfaa70" strokeOpacity="0.35" strokeWidth="0.5"/>
            <line x1="0" y1="22" x2="9" y2="22"  stroke="#cfaa70" strokeOpacity="0.35" strokeWidth="0.5"/>
            <line x1="35" y1="22" x2="44" y2="22" stroke="#cfaa70" strokeOpacity="0.35" strokeWidth="0.5"/>
          </svg>
          <div className="hero-catch">
            <h1>何十年も、丁寧にスキンケアをしてきた。<br/>それなのに、なぜか<em>肌が安定しない</em>。</h1>
          </div>
          <div className="hero-sub">
            <p>もしかして──<br/><strong>足すことより、減らすことが正解だったのかもしれない。</strong></p>
          </div>
          <div className="hero-cta-wrap">
            <a href="https://lin.ee/Sa4uQuI" className="btn-gold" target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M11 2C6.03 2 2 5.58 2 10c0 2.4 1.14 4.55 2.95 6.05L4 20l4.18-1.8C9.34 18.7 10.15 19 11 19c4.97 0 9-3.58 9-8s-4.03-9-9-9z" fill="#120002"/></svg>
              無料で21日間引き算ケアコーチングを受ける
            </a>
            <p className="hero-note">毎月先着10名限定 ／ 送料無料・追加費用なし ／ LINEに登録後、お届け案内をお送りします</p>
          </div>
          <div className="hero-scroll">SCROLL</div>
        </section>

        {/* EMPATHY */}
        <section className="empathy">
          <div className="container">
            <p className="section-label lp-js-reveal">RESONANCE</p>
            <h2 className="section-h2 lp-js-reveal">こんな感覚、ありませんか。</h2>
            <ul className="empathy-list">
              <li className="lp-js-reveal">肌荒れが気になって、そのたびに新しいアイテムを足してきた</li>
              <li className="lp-js-reveal">「良い成分」を重ねるほど、肌は整うと信じてきた</li>
              <li className="lp-js-reveal">朝晩、丁寧にケアしているのに、なぜか安定しない</li>
              <li className="lp-js-reveal">高価格のアイテムに変えても、変化が感じられなくなってきた</li>
              <li className="lp-js-reveal">スキンケアを変えるたびに、少し期待して、少し失望してきた</li>
            </ul>
            <div className="empathy-close lp-js-reveal">
              <p>長年ケアを続けてきたのに、<br/>なぜか肌が<em>「落ち着かない」</em>。<br/><br/>この感覚、ずっと抱えてきた方も<br/>多いと思います。</p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="problem">
          <div className="container">
            <p className="section-label lp-js-reveal">THE CAUSE</p>
            <h2 className="problem-heading lp-js-reveal">その「不安定さ」の正体は、<br/><em>やりすぎ</em>かもしれません。</h2>
            <div className="problem-body">
              <p className="lp-js-reveal">スキンケアは、足すほど良いと思われてきました。</p>
              <p className="lp-js-reveal">保湿液、美容液、オイル、パック。<br/>気づけばアイテムが増え、工程が増え、時間が増えていく。</p>
              <p className="lp-js-reveal">でも、肌には「バリア機能」があります。<br/>過剰なケアは、そのバリアを少しずつ壊していきます。</p>
              <div className="loop-box lp-js-reveal">
                <p>肌が荒れる<span> → </span>新しいものを足す<br/>さらに荒れる<span> → </span>またアイテムを足す<br/>また荒れる<span> → </span>さらに足す<span>……</span></p>
              </div>
              <p className="problem-conclusion lp-js-reveal">このループにはまっている方が、<br/>スキンケアを長く続けてきた方ほど<em>多い</em>。<br/><br/>原因は、肌ではなく<em>「やりすぎ」</em>にあります。</p>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="philosophy">
          <div className="container">
            <p className="section-label lp-js-reveal">PHILOSOPHY</p>
            <h2 className="philosophy-heading lp-js-reveal">引き算スキンケアとは何か。</h2>
            <div className="philosophy-body">
              <p className="lp-js-reveal">「引き算スキンケア」は、流行りではありません。</p>
              <p className="lp-js-reveal">肌本来の力を取り戻すために、<br/>余計なものを一つずつ、手放していく考え方です。</p>
              <ul className="subtract-list">
                <li className="lp-js-reveal">洗顔の回数・時間を減らす</li>
                <li className="lp-js-reveal">塗る工程の数を減らす</li>
                <li className="lp-js-reveal">アイテムの種類を減らす</li>
                <li className="lp-js-reveal">肌に「何もしない時間」を作る</li>
              </ul>
              <p className="lp-js-reveal">ただし、これは「何もしない」ではありません。</p>
              <p className="lp-js-reveal">余計なものを引いた分だけ、<br/>細胞が本当に必要としている成分を、丁寧に届ける。<br/><br/>細胞が元気になると、肌は自分で潤いを作り始めます。<br/>そうなると、外から足すものが自然と減っていく。<br/><br/>引き算は、終わりではなく、<em>始まり</em>です。</p>
              <div className="philosophy-quote lp-js-reveal">
                <p>長年やってきたことを否定しない。<br/><em>アップデートする</em>という感覚で、一緒に進みましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* VOICES */}
        <section className="voices">
          <div className="container">
            <p className="section-label lp-js-reveal">VOICES</p>
            <h2 className="section-h2 lp-js-reveal">実際に体験した方の声。</h2>
            {[
              { meta: 'M.K さん ／ スキンケア歴 27年 ／ 乾燥肌', before: '美容液が4本、化粧水2種、朝晩合わせて8工程。乾燥が気になるたびに「保湿が足りない」と思って足してきた。肌がつっぱる感覚がずっとあった。', after: '化粧水1本、乳液1本の3工程に。朝のつっぱりがなくなった。洗顔後の「急いでつけなきゃ」という焦りがなくなったのが一番びっくりした。', quote: '乾燥肌だから保湿をたくさんしなきゃいけない、ずっとそう信じてきた。でも実は洗いすぎで肌が水分を保てなくなっていたと知って、全部腑に落ちた。減らしてから、肌が自分のものになった気がしています。' },
              { meta: 'Y.T さん ／ スキンケア歴 32年 ／ 混合肌・敏感肌', before: '敏感肌だからと「低刺激」を謳うアイテムを集め続けて気づけば11種類。何かを変えるたびにどれが合わないかわからなくなっていた。スキンケアが怖かった。', after: '洗顔料・化粧水・クリームの3種類だけに絞った。肌が荒れなくなった。「どれが原因か」を考えなくてよくなったことが、こんなに楽だと思わなかった。', quote: '最初の1週間は不安で、毎日MINAKOさんにLINEしていた。「それで大丈夫ですよ」と丁寧に返してくれて、やっと信じてみようと思えた。アイテムを探すのをやめたら、肌も私も落ち着いた。' },
              { meta: 'S.N さん ／ スキンケア歴 24年 ／ 毛穴・くすみ悩み', before: 'くすみが気になって美白ケアを重ねていた。ビタミンC美容液を毎朝毎晩使い、週3でピーリング。それでも顔色が暗く、ファンデを重ねる習慣が続いていた。', after: 'ピーリングをやめ、美白美容液も一旦オフ。化粧水と日焼け止めだけにした。2週間目から肌の色が均一になってきた。ファンデの量が半分以下になった。', quote: 'くすみの原因を「成分が足りないから」だと思っていた。でも実はこすりすぎと重ねすぎで肌が炎症を起こしていたみたい。引き算してから、スキンケアにかけていたお金が月1万円以上減った。それも正直うれしい。' },
              { meta: 'R.H さん ／ スキンケア歴 19年 ／ 肌荒れ繰り返し', before: '季節の変わり目に必ず荒れていた。そのたびに新しいアイテムを試して、また荒れて。「自分の肌は特別に弱い」とあきらめていた。', after: '洗顔の回数を朝晩から夜のみにした。アイテムも4種から2種へ。季節の変わり目に荒れなかった。これが21日でいちばん驚いたことだった。', quote: '肌が弱いんじゃなくて、肌に負担をかけすぎていただけだった。そう気づいたとき、長年の悩みの正体がわかった気がした。肌のことがやっと「わかった」と思えたのは、スキンケアを始めて初めてのことかもしれない。' },
              { meta: 'K.M さん ／ スキンケア歴 22年 ／ ニキビ・毛穴悩み', before: 'ニキビが繰り返すたびに新しいアイテムを追加してきた。気づけば洗顔料・化粧水・美容液・オイル・クリームと7工程。肌は荒れ続けていた。', after: '洗顔料と「ミトコンドリアのちから」だけに絞った。3週目からニキビの頻度が明らかに減った。肌が落ち着いている感覚が、久しぶりに戻ってきた。', quote: '正直、引くのが怖かった。何もしなくなったら逆に悪化するんじゃないかって。でも「ミトコンドリアのちから」を使いながら少しずつ減らしていくやり方だったから、急に何もなくなる感覚がなかった。MINAKOさんが毎日LINEで「今日の肌はどうでしたか」って声をかけてくれて、不安になるたびに返信してくれた。一人だったら絶対途中でやめていた。21日間やり切れたのは、商品とMINAKOさんのお陰だと思っています。' },
              { meta: 'A.O さん ／ スキンケア歴 35年 ／ 乾燥・ハリ悩み', before: 'ハリが気になり始めてからエイジングケアのアイテムを次々と試してきた。朝20分、夜25分のルーティンが当たり前になっていた。でも何かが変わった実感がなかった。', after: '工程を5つから3つへ。朝夜合わせて10分で終わるようになった。肌がもちっとするようになった。娘に「なんか最近肌きれいじゃない？」と言われた。', quote: '35年やってきたことを変えるのは、正直勇気がいった。でもMINAKOさんが「今までの習慣を否定するんじゃない、整理するだけ」と言ってくれて、それで踏み出せた。娘の一言が、いちばんのご褒美だった。' },
            ].map((v, i) => (
              <div key={i} className="voice-card lp-js-reveal">
                <p className="voice-meta">{v.meta}</p>
                <div className="voice-before-after">
                  <div className="voice-col"><p className="voice-col-label before">BEFORE</p><p>{v.before}</p></div>
                  <div className="voice-col after"><p className="voice-col-label after">21日後</p><p>{v.after}</p></div>
                </div>
                <div className="voice-quote"><p>{v.quote}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* FREE TRIAL */}
        <section className="freetrial">
          <div className="container">
            <p className="section-label lp-js-reveal">FREE TRIAL</p>
            <h2 className="section-h2 lp-js-reveal">一つ引いて、一つだけ足す。<br/>それが、このチャレンジです。</h2>
            <div className="divider"></div>
            <div className="philosophy-body lp-js-reveal" style={{marginBottom:'48px'}}>
              <p>「引き算スキンケア」と聞くと、何も使わないことだと思うかもしれません。</p>
              <p>違います。</p>
              <p>今使っているアイテムを、一つずつ手放していく。<br/>その代わりに、細胞が本当に必要としている成分だけを、<br/>最小限、丁寧に届ける。</p>
              <p>矛盾しているように聞こえるかもしれません。<br/>引き算なのに、足すのか、と。</p>
              <p>でも、ここが核心です。</p>
              <p style={{color:'var(--gold-light)'}}>細胞が元気になると、<br/>外から足さなくても、肌が自分で潤いを作り始める。<br/>そうなれば、アイテムはもっと減らせる。<br/>最終的に必要なものが、どんどん少なくなっていく。</p>
              <p>「ミトコンドリアのちから」は、その入口です。<br/>今のスキンケアを少し減らしながら、これ一本だけを足す。<br/>21日間、それだけを続けてみてください。</p>
            </div>
            <div className="product-box lp-js-reveal">
              <div className="product-box-label">チャレンジ参加者 全員にプレゼント</div>
              <div className="product-box-inner">
                <div className="product-box-name">ミトコンドリアのちから</div>
                <div className="product-box-volume">21日分（¥3,080相当 ／ 使用目安90日・50g）</div>
                <div className="product-box-price"><em>→ 参加者は 無料 でお届け</em></div>
              </div>
              <p className="product-box-desc">細胞のエネルギー産生を担う「ミトコンドリア」に着目した、AKINORIOの主力美容液。<br/><br/>肌の自己回復力を支える成分を、必要最小限の処方で届けます。<br/>重ね塗り不要。工程を減らしながら、細胞から整えていく。<br/><br/>引き算スキンケアの実践は、ここから始まります。</p>
              <div className="product-box-note">※ 毎月先着10名限定。お早めにご登録ください。<br/>※ 送料はAKINORIO負担。追加費用は一切かかりません。</div>
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section className="program">
          <div className="container">
            <p className="section-label lp-js-reveal">THE PROGRAM</p>
            <h2 className="program-heading lp-js-reveal">21日間で、何をするのか。</h2>
            <p className="lp-js-reveal" style={{textAlign:'center', marginTop:'24px', color:'var(--text-sub)', fontSize:'0.93rem'}}>むずかしいことはありません。<br/>毎日15秒以内。スマホ一台でできます。</p>
            <div className="week-grid">
              {[
                { num: '1', days: 'Day 1–7',   title: '現状を整理する',     body: '今のスキンケアを「見える化」する。何を使っているか、工程は何個か。確認するだけ。' },
                { num: '2', days: 'Day 8–14',  title: '一つずつ、手放してみる', body: '工程を一つ減らす。アイテムを一つ省く。肌の変化を、日記につける。' },
                { num: '3', days: 'Day 15–21', title: '肌の声を聞く',       body: '減らした状態で、肌がどう反応するか。自分の肌との「対話」が始まります。' },
              ].map(w => (
                <div key={w.num} className="week-item lp-js-reveal">
                  <div className="week-label"><span className="num">{w.num}</span><span className="days">{w.days}</span></div>
                  <div className="week-body"><h3>{w.title}</h3><p>{w.body}</p></div>
                </div>
              ))}
            </div>
            <div className="includes-box lp-js-reveal">
              <h3>INCLUDES</h3>
              <ul className="includes-list">
                {['「ミトコンドリアのちから」21日分（¥3,080相当）を無料でお届け','21日間のガイドライン（PDF）','毎日の確認チェックリスト','LINEでのMINAKOさんによる個別サポート','参加者限定クローズドグループ','終了後の「次のステップ」相談（希望者）'].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="capacity-note lp-js-reveal">参加費：<strong>無料</strong>　／　定員：<strong>毎月10名限定</strong></p>
          </div>
        </section>

        {/* OWNER */}
        <section className="owner">
          <div className="container">
            <p className="section-label lp-js-reveal">THE OWNER</p>
            <div className="owner-inner lp-js-reveal">
              <div className="owner-photo">
                <img src="/minakoceo.PNG" alt="MINAKO" />
              </div>
              <div className="owner-text">
                <h3>OWNER / AKINORIO</h3>
                <p className="owner-name">MINAKO</p>
                <p>私もかつて、やりすぎていました。</p>
                <p>「良い成分を、丁寧に、たくさん」<br/>それが正しいスキンケアだと信じていた。</p>
                <p>でも、減らした日から変わりました。<br/>肌が、静かになった。安定してきた。<br/>スキンケアが、楽になった。</p>
                <p>この体験を、一人でも多くの方に届けたいと思っています。<br/>21日間、一緒に並走します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <p className="section-label lp-js-reveal">FAQ</p>
            <h2 className="section-h2 lp-js-reveal">よくある質問</h2>
            <div className="faq-list">
              {[
                { q: '今使っているスキンケアを全部やめるんですか？', a: 'いいえ。一気に全部やめる必要はありません。一つずつ、ゆっくり減らしていきます。肌の反応を見ながら、あなたのペースで進めます。' },
                { q: '肌が荒れたりしませんか？', a: '一時的に変化が出ることはあります。でもそれは、肌が「整い始めているサイン」であることが多い。不安なことがあれば、すぐLINEで聞いてください。' },
                { q: 'スキンケアをほとんどやめることになるんですか？', a: '「引き算」は「ゼロ」ではありません。今より少ない工程で、肌が安定する場所を見つけることです。最終的に何種類使うかは、あなたの肌が教えてくれます。' },
                { q: 'どのくらいの時間がかかりますか？', a: '毎日15秒以内です。誰でも、どんな方でもできるのが引き算ケアです。' },
                { q: '途中でやめても大丈夫ですか？', a: 'もちろんです。義務は何もありません。ただ、21日続けた方のほとんどが「続けてよかった」と喜んでいただいています。' },
              ].map((item, i) => (
                <div key={i} className="faq-item lp-js-reveal">
                  <div className="faq-q"><p>{item.q}</p></div>
                  <div className="faq-a"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="gold-line lp-js-reveal" style={{marginBottom:'52px'}}></div>
            <h2 className="lp-js-reveal">「ミトコンドリアのちから」を<br/><em>完全無料</em>でお届けします。</h2>
            <p className="lp-js-reveal">
              21日分をコーチングプログラム参加者に無料でお送りします。<br/>
              送料、追加費用もありません。<br/><br/>
              引き算スキンケア、ミトコンドリアのちからを、まず体験してみてください。<br/>
              あなたの肌が、答えを教えてくれます。<br/><br/>
              私、アキノリオ代表MINAKOがコーチとしてあなたに寄り添います。
            </p>
            <div className="lp-js-reveal">
              <a href="https://lin.ee/Sa4uQuI" className="btn-gold" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M11 2C6.03 2 2 5.58 2 10c0 2.4 1.14 4.55 2.95 6.05L4 20l4.18-1.8C9.34 18.7 10.15 19 11 19c4.97 0 9-3.58 9-8s-4.03-9-9-9z" fill="#120002"/></svg>
                無料で21日間引き算ケアコーチングを受ける
              </a>
              <p className="final-note">LINEに登録後、お届け先の確認をお送りします。<br/>送料無料・追加費用なし。いつでも退会できます。</p>
            </div>
            <div className="divider" style={{marginTop:'64px'}}></div>
            <p className="lp-js-reveal" style={{textAlign:'center', fontFamily:'Cinzel,serif', fontSize:'0.65rem', letterSpacing:'0.48em', color:'var(--text-muted)', marginTop:'40px'}}>AKINORIO</p>
          </div>
        </section>
      </div>

      {/* STICKY CTA */}
      <div className="lp-sticky-cta">
        <a href="https://lin.ee/Sa4uQuI" className="btn-gold" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M11 2C6.03 2 2 5.58 2 10c0 2.4 1.14 4.55 2.95 6.05L4 20l4.18-1.8C9.34 18.7 10.15 19 11 19c4.97 0 9-3.58 9-8s-4.03-9-9-9z" fill="#120002"/></svg>
          無料で21日間引き算ケアコーチングを受ける
        </a>
      </div>
    </>
  )
}
