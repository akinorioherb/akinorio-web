'use client';

/**
 * DnaHelixScroll
 * ─────────────────────────────────────────────────
 * ページ全体をオーバーレイするDNA二重螺旋背景。
 *
 * ページ構成（推定）:
 *   Hero        ~100vh
 *   BrandStory  ~ 80vh   累計 ~180vh
 *   AkinorioSecret ~80vh  累計 ~260vh
 *   Testimonials ~90vh   累計 ~350vh  scrollY ≈ 0.42~
 *   CTASection  ~90vh   累計 ~440vh  scrollY ≈ 0.62~
 *   MediaFeature ~60vh   累計 ~500vh
 *
 * 対策:
 *   - z-index: 40  (CTASectionのz-10より高い)
 *   - mix-blend-mode: screen で暗背景に金が映える
 *   - scrollYProgress 0.38→0.70 でpathLengthを0→1
 *   - opacity フェード 0.35→0.38 / 0.66→0.82
 */

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* 正弦波SVGパス生成 */
function sinePath(cx: number, amp: number, period: number, phase: number, steps: number): string {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const y = (i / steps) * 100;
    const x = cx + amp * Math.sin((y / period) * Math.PI * 2 + phase);
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(' ');
}

function hx(y: number, cx: number, amp: number, period: number, phase: number) {
  return cx + amp * Math.sin((y / period) * Math.PI * 2 + phase);
}

export default function DnaHelixScroll() {
  const { scrollYProgress } = useScroll();

  /* pathLength: 0.38（Testimonials入口）→ 0.70（CTA末尾）で 0→1 */
  const rawProgress = useTransform(scrollYProgress, [0.38, 0.70], [0, 1]);
  const pathLength  = useSpring(rawProgress, { stiffness: 45, damping: 16 });

  /* opacity: Testimonials前後でフェードイン、CTA後でフェードアウト */
  const opacity = useTransform(
    scrollYProgress,
    [0.33, 0.42,  0.64, 0.80],
    [0,    0.32,  0.32, 0   ],
  );

  /* ── ヘリックス設定 ── */
  const CX     = 50;   // 中心 (viewport % 単位)
  const AMP    = 14;   // 振幅: ±14% of viewport width → デスクトップで±200px程度
  const PERIOD = 14;   // 1周のビューポート高さ% → 約7周分
  const STEPS  = 160;  // パス滑らかさ

  const pathA = sinePath(CX, AMP, PERIOD, 0,       STEPS);
  const pathB = sinePath(CX, AMP, PERIOD, Math.PI, STEPS);

  /* cross-links: 両鎖が最遠点（各鎖のピーク）に合わせて横線 */
  const crossLinks = Array.from({ length: 16 }, (_, i) => {
    const y  = (i / 15) * 100;
    const xA = hx(y, CX, AMP, PERIOD, 0);
    const xB = hx(y, CX, AMP, PERIOD, Math.PI);
    return { y, xA, xB };
  });

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none select-none"
      style={{ opacity, zIndex: 40 }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ mixBlendMode: 'screen' }}
      >
        {/* cross-links（横架橋） */}
        {crossLinks.map(({ y, xA, xB }, i) => (
          <line
            key={i}
            x1={xA.toFixed(2)} y1={y.toFixed(2)}
            x2={xB.toFixed(2)} y2={y.toFixed(2)}
            stroke="rgba(207,170,112,0.6)"
            strokeWidth="0.3"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {/* Strand A — 主鎖（明るいゴールド） */}
        <motion.path
          d={pathA}
          stroke="rgba(212,175,55,1)"
          strokeWidth="1.4"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />

        {/* Strand B — 補助鎖（やや淡い） */}
        <motion.path
          d={pathB}
          stroke="rgba(200,162,48,0.80)"
          strokeWidth="1.0"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </motion.div>
  );
}
