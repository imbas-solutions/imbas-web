/**
 * Light composition — the same story as NightScene (roots → lotus → network,
 * pulses travelling along real structure) told with the opposite optics.
 *
 * Night reads by *emission*: luminous strokes over near-black, bloomed with
 * `feGaussianBlur`. On paper that logic collapses — bloom becomes smudge and a
 * palette swap goes muddy. So this scene reads by *ink and pigment*, in the
 * idiom of a botanical plate crossed with an engraved technical drawing:
 *
 *   - depth comes from line weight and layered translucency, never from glow;
 *   - shading is subtractive — pale pigment washes laid under confident ink;
 *   - volume on roots and stems is a wide pale under-stroke beneath a thin
 *     saturated core, the same doubled-stroke trick that makes the pulses read;
 *   - the ambient ellipses of night become paper washes (warm at the root end,
 *     lilac at the network end) plus guilloche rosettes — engraved contour
 *     families that carry depth the way a banknote does;
 *   - `#00ffcc` is gone. It vanishes on paper. The teals go deep instead.
 *
 * Everything stays recessive: HeroReveal lays a glass dashboard and a headline
 * over this, so the heaviest ink sits at the bottom-left root system and the
 * centre band is held to hairlines.
 *
 * Class hooks (`.lotus-glow`, `.twinkle`, `.wave-ribbon`) and the `data-pulse`
 * contract are identical to night — the shared GSAP driver animates either
 * scene without knowing which it has.
 */

/** Ink and pigment. No emission colours — nothing here needs a dark ground. */
const INK = "#17322f"; // deep teal-black: the drawing hand
const INK_SOFT = "#2f4d49";
const TEAL_DEEP = "#046b62";
const TEAL = "#0d857a";
const TEAL_PALE = "#9fd3c9";
const TEAL_WASH = "#cfe6e0";
const PLUM_DEEP = "#4a3060";
const PLUM = "#6b4a86";
const PLUM_PALE = "#c9b7dd";

/**
 * One pulse = a wide pale halo under a thin saturated core, both carrying the
 * identical `d`. The driver reads the group's first path for `getTotalLength()`
 * and dashes both together, so they travel as a single mark: the halo supplies
 * the softness a blur filter would have, without the smudge.
 */
function Pulse({
  d,
  halo,
  core,
  haloWidth,
  coreWidth,
  haloOpacity = 0.5,
  coreOpacity = 0.9,
}: {
  d: string;
  halo: string;
  core: string;
  haloWidth: number;
  coreWidth: number;
  haloOpacity?: number;
  coreOpacity?: number;
}) {
  return (
    <g data-pulse="1">
      <path d={d} stroke={halo} strokeWidth={haloWidth} strokeOpacity={haloOpacity} />
      <path d={d} stroke={core} strokeWidth={coreWidth} strokeOpacity={coreOpacity} />
    </g>
  );
}

/** An engraved node: paper-filled ring, not a glowing dot. */
function Node({ cx, cy, r, stroke, width = 1, opacity = 0.45 }: {
  cx: number; cy: number; r: number; stroke: string; width?: number; opacity?: number;
}) {
  return (
    <g opacity={opacity}>
      <circle cx={cx} cy={cy} r={r} fill="#faf8f4" stroke={stroke} strokeWidth={width} />
      <circle cx={cx} cy={cy} r={r * 0.34} fill={stroke} />
    </g>
  );
}

export default function LightScene() {
  return (
    <>
      <defs>
        {/* Paper tone: a touch of light from above, warm settling at the foot */}
        <linearGradient id="lit-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="55%" stopColor="#f7f3ea" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#efe8db" stopOpacity="0.5" />
        </linearGradient>
        {/* The three ambient ellipses of night, re-read as pigment washes */}
        <radialGradient id="lit-wash-warm" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2e2c6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f2e2c6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lit-wash-lilac" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dbd0ee" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#dbd0ee" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lit-wash-teal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#bcdbd4" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#bcdbd4" stopOpacity="0" />
        </radialGradient>
        {/* Petal wash: pigment pooling towards the tip, as watercolour does */}
        <linearGradient id="lit-petal" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#a9d5cb" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#dcece8" stopOpacity="0.2" />
        </linearGradient>
        {/*
          The one filter this scene keeps. Not a bloom — a contact shadow, so
          the lotus core and the primary nodes sit *on* the paper rather than
          hovering in front of it.
        */}
        <filter id="lit-contact" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1.8" floodColor="#0b2b28" floodOpacity="0.28" />
        </filter>
      </defs>

      <g className="hero-scene" data-scene="light">
        {/* ===== PAPER GROUND =====
            Anchored to `--surface` so the hero shares the page's exact ground
            and no seam shows where the section ends; the gradient above it is
            what turns that flat surface into paper. */}
        <rect width="1440" height="810" style={{ fill: "var(--surface, #f8f6f2)" }} />
        <rect width="1440" height="810" fill="url(#lit-paper)" />
        <ellipse cx="250" cy="470" rx="470" ry="390" fill="url(#lit-wash-warm)" />
        <ellipse cx="1120" cy="250" rx="430" ry="310" fill="url(#lit-wash-lilac)" />
        <ellipse cx="760" cy="600" rx="640" ry="310" fill="url(#lit-wash-teal)" />

        {/* ===== PIGMENT CURRENTS =====
            Night's wave ribbons were 40px strokes at 4% over black. Here they are
            broad pigment bands laid *under* the linework, so ink always wins. */}
        <g fill="none" strokeLinecap="round">
          <path className="wave-ribbon"
                d="M 300 350 C 400 300, 500 330, 600 280 C 700 230, 800 260, 900 220 C 1000 180, 1100 200, 1200 180"
                stroke={TEAL_WASH} strokeWidth="52" opacity="0.32" />
          <path className="wave-ribbon"
                d="M 350 450 C 450 500, 550 470, 650 520 C 750 570, 850 530, 950 560"
                stroke="#ded3ec" strokeWidth="38" opacity="0.3" />
        </g>

        {/* ===== GUILLOCHE =====
            Two contour families. Depth by line density — the engraver's answer
            to the glow the night scene gets from a blur filter. */}
        <g stroke={INK} fill="none" strokeWidth="0.6" opacity="0.055">
          <ellipse cx="250" cy="470" rx="118" ry="86" transform="rotate(-12 250 470)" />
          <ellipse cx="250" cy="470" rx="170" ry="123" transform="rotate(3 250 470)" />
          <ellipse cx="250" cy="470" rx="222" ry="160" transform="rotate(18 250 470)" />
          <ellipse cx="250" cy="470" rx="274" ry="197" transform="rotate(33 250 470)" />
          <ellipse cx="250" cy="470" rx="326" ry="234" transform="rotate(48 250 470)" />
          <ellipse cx="250" cy="470" rx="378" ry="271" transform="rotate(63 250 470)" />
        </g>
        <g stroke={PLUM_DEEP} fill="none" strokeWidth="0.6" opacity="0.05">
          <ellipse cx="1180" cy="180" rx="96" ry="70" transform="rotate(14 1180 180)" />
          <ellipse cx="1180" cy="180" rx="152" ry="110" transform="rotate(30 1180 180)" />
          <ellipse cx="1180" cy="180" rx="208" ry="150" transform="rotate(46 1180 180)" />
          <ellipse cx="1180" cy="180" rx="264" ry="190" transform="rotate(62 1180 180)" />
        </g>

        {/* ===== CONSTRUCTION LINES =====
            Night's diagonal light beams. On paper a beam makes no sense, so they
            become the drafter's setting-out lines instead. */}
        <g stroke={INK} strokeWidth="0.75" opacity="0.07" strokeDasharray="7 11">
          <line x1="350" y1="0" x2="800" y2="810" />
          <line x1="900" y1="0" x2="1350" y2="810" />
        </g>

        {/* ===== CURRENT CONTOURS (structural base for pulses 8 and 9) ===== */}
        <g fill="none" strokeLinecap="round">
          <path d="M 250 350 C 400 280, 550 230, 700 200 C 850 170, 950 150, 1050 150 L 1100 100 L 1250 130 L 1350 100"
                stroke={PLUM_DEEP} strokeWidth="1.1" opacity="0.16" />
          <path d="M 300 430 C 450 500, 600 480, 680 520 C 810 580, 900 510, 1050 540"
                stroke={PLUM} strokeWidth="1" opacity="0.14" />
        </g>

        {/* ===== ROOTS (bottom-left) =====
            Doubled: a pale lilac under-stroke gives the root its body, the ink
            core its edge. That is the light-mode equivalent of night's bloom. */}
        <g fill="none" strokeLinecap="round">
          {/* Root A — the trunk line, and the heaviest ink in the composition */}
          <path d="M 140 720 C 120 680, 80 650, 60 600 C 40 550, 70 500, 100 480 C 140 455, 190 430, 250 385"
                stroke="#d8cbe6" strokeWidth="8" opacity="0.4" />
          <path d="M 140 720 C 120 680, 80 650, 60 600 C 40 550, 70 500, 100 480 C 140 455, 190 430, 250 385"
                stroke={PLUM_DEEP} strokeWidth="2.4" opacity="0.34" />

          {/* Root B */}
          <path d="M 200 750 C 180 720, 160 700, 120 680 C 80 660, 60 620, 80 580 C 110 530, 170 470, 250 385"
                stroke="#ded3ec" strokeWidth="6.5" opacity="0.36" />
          <path d="M 200 750 C 180 720, 160 700, 120 680 C 80 660, 60 620, 80 580 C 110 530, 170 470, 250 385"
                stroke={PLUM} strokeWidth="1.9" opacity="0.3" />

          {/* Root C + D — secondary, thinner, no under-stroke */}
          <path d="M 100 760 C 80 730, 50 710, 30 680 C 10 650, 20 610, 40 580"
                stroke={PLUM} strokeWidth="1.3" opacity="0.2" />
          <path d="M 170 740 C 150 700, 130 660, 90 630 C 50 600, 30 560, 50 520"
                stroke={PLUM_DEEP} strokeWidth="1.5" opacity="0.2" />
        </g>
        {/* Nodules where roots branch */}
        <Node cx={60} cy={600} r={3.2} stroke={PLUM} opacity={0.45} width={0.9} />
        <Node cx={80} cy={580} r={2.4} stroke={PLUM} opacity={0.35} width={0.8} />
        <Node cx={50} cy={520} r={2} stroke={PLUM_DEEP} opacity={0.35} width={0.8} />

        {/* ===== STEMS & VINES ===== */}
        <g fill="none" strokeLinecap="round">
          <path d="M 160 620 C 170 560, 150 500, 180 440 C 210 380, 190 320, 220 270"
                stroke={TEAL_WASH} strokeWidth="6" opacity="0.42" />
          <path d="M 160 620 C 170 560, 150 500, 180 440 C 210 380, 190 320, 220 270"
                stroke={TEAL_DEEP} strokeWidth="1.7" opacity="0.32" />
          <path d="M 200 580 C 210 520, 230 470, 210 400 C 190 330, 220 280, 250 230"
                stroke={TEAL} strokeWidth="1.3" opacity="0.24" />
          <path d="M 130 600 C 140 540, 120 470, 160 410 C 200 350, 170 290, 200 240"
                stroke={TEAL} strokeWidth="1.3" opacity="0.22" />
          <path d="M 180 440 C 150 430, 130 410, 140 390 C 150 370, 170 360, 160 340"
                stroke={TEAL_DEEP} strokeWidth="0.9" opacity="0.22" />
        </g>

        {/* ===== LEAVES =====
            Botanical-plate treatment: pale wash inside a drawn outline, with a
            midrib. Night filled these flat because emission carried them. */}
        <g strokeLinejoin="round">
          <g fill="#bcdbd4" fillOpacity="0.42" stroke={TEAL_DEEP} strokeWidth="0.8" strokeOpacity="0.32">
            <path d="M 150 380 Q 130 350, 120 310 Q 140 330, 150 380 Z" />
            <path d="M 155 375 Q 170 340, 185 310 Q 165 335, 155 375 Z" />
            <path d="M 200 320 Q 175 285, 165 250 Q 185 275, 200 320 Z" />
            <path d="M 205 315 Q 225 280, 240 250 Q 220 280, 205 315 Z" />
            <path d="M 230 270 Q 200 240, 190 200 Q 210 225, 230 270 Z" />
            <path d="M 120 480 Q 100 460, 95 430 Q 110 450, 120 480 Z" />
          </g>
          {/* Midribs */}
          <g fill="none" stroke={TEAL_DEEP} strokeWidth="0.6" strokeOpacity="0.28">
            <path d="M 150 380 Q 136 344, 122 312" />
            <path d="M 155 375 Q 168 342, 184 312" />
            <path d="M 200 320 Q 182 285, 167 252" />
            <path d="M 205 315 Q 221 283, 239 252" />
            <path d="M 230 270 Q 208 236, 191 202" />
          </g>
        </g>

        {/* ===== LOTUS =====
            Same seven petals, drawn rather than lit. The breathing halo that was
            a blurred radial gradient is now a family of thin concentric rings —
            `.lotus-glow` still, so the GSAP stagger reads as a slow bloom of
            contour lines opening outward. */}
        <g>
          <g fill="url(#lit-petal)" stroke={TEAL_DEEP} strokeWidth="0.9" strokeOpacity="0.34" strokeLinejoin="round">
            <path d="M 250 400 Q 230 360, 260 320 Q 270 360, 250 400 Z" />
            <path d="M 250 400 Q 290 370, 310 330 Q 290 380, 250 400 Z" />
            <path d="M 250 400 Q 210 380, 190 340 Q 220 370, 250 400 Z" />
            <path d="M 250 400 Q 270 350, 300 310 Q 280 360, 250 400 Z" />
            <path d="M 250 400 Q 220 345, 240 300 Q 250 345, 250 400 Z" />
            <path d="M 250 395 Q 240 370, 255 345 Q 260 370, 250 395 Z" />
            <path d="M 250 395 Q 265 375, 275 350 Q 265 380, 250 395 Z" />
          </g>
          <circle className="lotus-glow" cx="250" cy="385" r="15" fill="none" stroke={TEAL_DEEP} strokeWidth="1.1" opacity="0.34" />
          <circle className="lotus-glow" cx="250" cy="385" r="27" fill="none" stroke={TEAL} strokeWidth="0.9" opacity="0.22" />
          <circle className="lotus-glow" cx="250" cy="385" r="41" fill="none" stroke={TEAL} strokeWidth="0.7" opacity="0.14" />
          <circle cx="250" cy="385" r="4.5" fill={TEAL_DEEP} opacity="0.8" filter="url(#lit-contact)" />
        </g>

        {/* ===== STRUCTURAL VINES: Lotus → Panels =====
            Identical geometry to night; the pulses trace these exact lines. */}
        <g fill="none" strokeLinecap="round">
          <path d="M 250 385 C 320 370, 380 340, 480 300 C 480 300, 480 260, 480 260 L 610 260 L 610 340 L 480 340 L 480 300"
                stroke={TEAL_DEEP} strokeWidth="1.1" opacity="0.22" />
          <path d="M 610 260 C 620 240, 560 220, 570 195 L 730 195 L 730 295 L 570 295 L 570 195"
                stroke={TEAL} strokeWidth="1" opacity="0.18" />
          <path d="M 730 195 C 735 180, 715 170, 720 160 L 860 160 L 860 250 L 720 250 L 720 160"
                stroke={PLUM} strokeWidth="0.9" opacity="0.17" />
          <path d="M 250 400 C 370 410, 500 420, 620 400 C 700 385, 750 370, 790 360 L 890 360 L 890 430 L 790 430 L 790 360"
                stroke={TEAL_DEEP} strokeWidth="1.1" opacity="0.18" />
          <path d="M 890 395 C 940 390, 1000 400, 1050 390 L 1200 390 L 1200 470 L 1050 470 L 1050 390"
                stroke={TEAL} strokeWidth="0.9" opacity="0.15" />
          <path d="M 250 410 C 380 460, 520 490, 650 510 C 720 520, 760 530, 780 530 L 900 530 L 900 570 L 780 570 L 780 530"
                stroke={TEAL} strokeWidth="0.9" opacity="0.15" />
          <path d="M 250 400 C 290 450, 320 490, 360 520 L 470 520 L 470 580 L 360 580 L 360 520"
                stroke={INK_SOFT} strokeWidth="0.8" opacity="0.13" />
        </g>

        {/* ===== ANNOTATION CARDS =====
            Night's floating dark-glass panels. On paper they read as the plate's
            ruled callout boxes: hairline border, faint paper fill, no chrome.
            Held quiet — the glass dashboard and the headline land across here. */}
        <g opacity="0.62" fontFamily="monospace">
          {/* AGENTS FLOW */}
          <g>
            <rect x="480" y="260" width="130" height="80" rx="3" fill="#fdfcf9" fillOpacity="0.55" stroke={INK} strokeWidth="0.7" strokeOpacity="0.22" />
            <text x="495" y="280" fontSize="7" fill={INK} opacity="0.42" letterSpacing="0.6">AGENTS FLOW</text>
            <rect x="490" y="290" width="45" height="3" rx="1.5" fill={TEAL} opacity="0.3" />
            <rect x="490" y="297" width="60" height="3" rx="1.5" fill={INK} opacity="0.14" />
            <rect x="490" y="304" width="30" height="3" rx="1.5" fill={TEAL} opacity="0.2" />
            <circle cx="560" cy="310" r="8" fill="none" stroke={TEAL_DEEP} strokeWidth="0.7" opacity="0.3" />
          </g>

          {/* NEURAL NETWORKS */}
          <g>
            <rect x="570" y="195" width="160" height="100" rx="3" fill="#fdfcf9" fillOpacity="0.55" stroke={INK} strokeWidth="0.7" strokeOpacity="0.22" />
            <text x="585" y="215" fontSize="7" fill={TEAL_DEEP} opacity="0.55" letterSpacing="0.6">NEURAL NETWORKS</text>
            <rect x="580" y="225" width="60" height="4" rx="2" fill={TEAL} opacity="0.28" />
            <rect x="580" y="233" width="40" height="4" rx="2" fill={TEAL} opacity="0.2" />
            <circle cx="660" cy="255" r="15" fill="none" stroke={TEAL_DEEP} strokeWidth="0.7" opacity="0.26" />
            <path d="M 650 260 L 655 250 L 660 255 L 665 245 L 670 250" stroke={TEAL_DEEP} strokeWidth="1" fill="none" opacity="0.4" />
          </g>

          {/* AGENTIC AI */}
          <g>
            <rect x="720" y="160" width="140" height="90" rx="3" fill="#fdfcf9" fillOpacity="0.5" stroke={PLUM_DEEP} strokeWidth="0.7" strokeOpacity="0.2" />
            <text x="735" y="180" fontSize="7" fill={PLUM_DEEP} opacity="0.48" letterSpacing="0.6">AGENTIC AI</text>
            <rect x="730" y="190" width="50" height="3" rx="1.5" fill={PLUM} opacity="0.28" />
            <rect x="730" y="197" width="35" height="3" rx="1.5" fill={PLUM} opacity="0.2" />
            <circle cx="810" cy="210" r="18" fill="none" stroke={PLUM} strokeWidth="0.7" opacity="0.22" />
          </g>

          {/* DATA */}
          <g>
            <rect x="790" y="360" width="100" height="70" rx="3" fill="#fdfcf9" fillOpacity="0.5" stroke={INK} strokeWidth="0.6" strokeOpacity="0.18" />
            <text x="805" y="378" fontSize="6" fill={INK} opacity="0.38" letterSpacing="0.6">DATA</text>
            <rect x="800" y="385" width="40" height="3" rx="1.5" fill={TEAL} opacity="0.24" />
            <rect x="800" y="392" width="55" height="3" rx="1.5" fill={INK} opacity="0.12" />
          </g>

          {/* SOFTWARE FACTORY */}
          <g>
            <rect x="1050" y="390" width="150" height="80" rx="3" fill="#fdfcf9" fillOpacity="0.5" stroke={INK} strokeWidth="0.6" strokeOpacity="0.18" />
            <text x="1065" y="408" fontSize="7" fill={TEAL_DEEP} opacity="0.4" letterSpacing="0.6">SOFTWARE FACTORY</text>
            <rect x="1060" y="418" width="50" height="3" rx="1.5" fill={INK} opacity="0.13" />
            <rect x="1060" y="425" width="35" height="3" rx="1.5" fill={TEAL} opacity="0.22" />
          </g>

          {/* CONFIG */}
          <g>
            <rect x="360" y="520" width="110" height="60" rx="3" fill="#fdfcf9" fillOpacity="0.5" stroke={INK} strokeWidth="0.6" strokeOpacity="0.18" />
            <text x="375" y="538" fontSize="6" fill={INK} opacity="0.38" letterSpacing="0.6">CONFIG</text>
            <rect x="370" y="545" width="80" height="2" rx="1" fill={TEAL} opacity="0.26" />
            <rect x="370" y="550" width="60" height="2" rx="1" fill={INK} opacity="0.13" />
          </g>

          {/* Bottom bar */}
          <g>
            <rect x="780" y="530" width="120" height="40" rx="3" fill="#fdfcf9" fillOpacity="0.5" stroke={TEAL_DEEP} strokeWidth="0.6" strokeOpacity="0.18" />
            <circle cx="810" cy="550" r="8" fill="none" stroke={TEAL_DEEP} strokeWidth="0.7" opacity="0.3" />
            <rect x="830" y="545" width="50" height="3" rx="1.5" fill={INK} opacity="0.13" />
          </g>
        </g>

        {/* ===== GEOMETRIC NETWORK (top-right) =====
            A survey diagram: hairline triangulation, open vertices below. */}
        <g stroke={INK_SOFT} fill="none" strokeWidth="0.7" opacity="0.22" strokeLinejoin="round">
          <path d="M 1050 150 L 1100 100 L 1150 160 Z" />
          <path d="M 1100 100 L 1180 80 L 1150 160 Z" />
          <path d="M 1150 160 L 1180 80 L 1250 130 Z" />
          <path d="M 1180 80 L 1280 60 L 1250 130 Z" />
          <path d="M 1250 130 L 1280 60 L 1350 100 Z" />
          <path d="M 1050 150 L 1150 160 L 1100 220 Z" />
          <path d="M 1150 160 L 1250 130 L 1200 210 Z" />
          <line x1="1100" y1="220" x2="1200" y2="210" />
          <line x1="1200" y1="210" x2="1300" y2="180" />
        </g>
        {/* A single pale fill so the lattice has a face, not just edges */}
        <g fill={TEAL_WASH} opacity="0.2" stroke="none">
          <path d="M 1150 160 L 1180 80 L 1250 130 Z" />
          <path d="M 1050 150 L 1150 160 L 1100 220 Z" />
        </g>

        {/* ===== ANIMATED PULSES =====
            Same routes as night — root → lotus → vine → card border → lattice.
            Legibility comes from the doubled stroke, not from bloom. The three
            that cross the centre run at reduced weight so they never compete
            with the headline sitting on top. */}
        <g fill="none" strokeLinecap="round">
          {/* 1 · Root A → Lotus → AGENTS FLOW border */}
          <Pulse
            d="M 140 720 C 120 680, 80 650, 60 600 C 40 550, 70 500, 100 480 C 140 455, 190 430, 250 385 C 320 370, 380 340, 480 300 L 480 260 L 610 260 L 610 340 L 480 340 L 480 300"
            halo={TEAL_PALE} core={TEAL_DEEP} haloWidth={8} coreWidth={2.2} haloOpacity={0.55} coreOpacity={0.9}
          />
          {/* 2 · Root B → Lotus → DATA border */}
          <Pulse
            d="M 200 750 C 180 720, 160 700, 120 680 C 80 660, 60 620, 80 580 C 110 530, 170 470, 250 385 C 370 400, 500 410, 620 400 C 700 385, 750 370, 790 360 L 890 360 L 890 430 L 790 430 L 790 360"
            halo={PLUM_PALE} core={PLUM_DEEP} haloWidth={7} coreWidth={1.9} haloOpacity={0.5} coreOpacity={0.82}
          />
          {/* 3 · AGENTS FLOW → NEURAL NETWORKS border (centre — held back) */}
          <Pulse
            d="M 610 260 C 620 240, 560 220, 570 195 L 730 195 L 730 295 L 570 295 L 570 195"
            halo={TEAL_PALE} core={TEAL} haloWidth={6} coreWidth={1.6} haloOpacity={0.36} coreOpacity={0.6}
          />
          {/* 4 · NEURAL NETWORKS → AGENTIC AI border (centre — held back) */}
          <Pulse
            d="M 730 195 C 735 180, 715 170, 720 160 L 860 160 L 860 250 L 720 250 L 720 160"
            halo="#d8cbe6" core={PLUM} haloWidth={5} coreWidth={1.3} haloOpacity={0.34} coreOpacity={0.55}
          />
          {/* 5 · DATA → SOFTWARE FACTORY border (centre-right — held back) */}
          <Pulse
            d="M 890 395 C 940 390, 1000 400, 1050 390 L 1200 390 L 1200 470 L 1050 470 L 1050 390"
            halo={TEAL_PALE} core={TEAL} haloWidth={5} coreWidth={1.3} haloOpacity={0.34} coreOpacity={0.55}
          />
          {/* 6 · Lotus → bottom bar border */}
          <Pulse
            d="M 250 410 C 380 460, 520 490, 650 510 C 720 520, 760 530, 780 530 L 900 530 L 900 570 L 780 570 L 780 530"
            halo={TEAL_PALE} core={TEAL_DEEP} haloWidth={5.5} coreWidth={1.5} haloOpacity={0.42} coreOpacity={0.66}
          />
          {/* 7 · Lotus → CONFIG border */}
          <Pulse
            d="M 250 400 C 290 450, 320 490, 360 520 L 470 520 L 470 580 L 360 580 L 360 520"
            halo="#ded6c6" core={INK_SOFT} haloWidth={4.5} coreWidth={1.1} haloOpacity={0.45} coreOpacity={0.6}
          />
          {/* 8 · Upper current → lattice edges */}
          <Pulse
            d="M 250 350 C 400 280, 550 230, 700 200 C 850 170, 950 150, 1050 150 L 1100 100 L 1150 160 L 1250 130 L 1180 80 L 1280 60 L 1350 100 L 1300 180 L 1200 210 L 1100 220 L 1050 150"
            halo={PLUM_PALE} core={PLUM_DEEP} haloWidth={5.5} coreWidth={1.4} haloOpacity={0.4} coreOpacity={0.6}
          />
          {/* 9 · Mid current */}
          <Pulse
            d="M 300 430 C 450 500, 600 480, 680 520 C 810 580, 900 510, 1050 540"
            halo="#d8cbe6" core={PLUM} haloWidth={5.5} coreWidth={1.4} haloOpacity={0.4} coreOpacity={0.6}
          />
          {/* 10 · Stem */}
          <Pulse
            d="M 160 620 C 170 560, 150 500, 180 440 C 210 380, 190 320, 220 270"
            halo={TEAL_PALE} core={TEAL_DEEP} haloWidth={4.5} coreWidth={1.1} haloOpacity={0.5} coreOpacity={0.8}
          />
        </g>

        {/* ===== NODES at vine/card junctions ===== */}
        <Node cx={480} cy={300} r={4} stroke={TEAL_DEEP} opacity={0.5} />
        <Node cx={570} cy={195} r={3.2} stroke={TEAL} opacity={0.4} width={0.9} />
        <Node cx={720} cy={160} r={3.2} stroke={PLUM} opacity={0.4} width={0.9} />
        <Node cx={790} cy={360} r={3.6} stroke={TEAL_DEEP} opacity={0.42} width={0.9} />
        <Node cx={1050} cy={390} r={3.2} stroke={TEAL} opacity={0.38} width={0.9} />
        <Node cx={780} cy={530} r={3} stroke={TEAL_DEEP} opacity={0.35} width={0.8} />
        <Node cx={360} cy={520} r={3} stroke={INK_SOFT} opacity={0.32} width={0.8} />
        {/* Lattice vertices */}
        <Node cx={1050} cy={150} r={3} stroke={INK_SOFT} opacity={0.34} width={0.8} />
        <Node cx={1100} cy={100} r={3.6} stroke={TEAL_DEEP} opacity={0.4} width={0.9} />
        <Node cx={1250} cy={130} r={4.2} stroke={TEAL_DEEP} opacity={0.42} />
        <Node cx={1180} cy={80} r={3} stroke={PLUM} opacity={0.36} width={0.8} />
        <Node cx={1350} cy={100} r={3.6} stroke={PLUM_DEEP} opacity={0.36} width={0.9} />

        {/* ===== STIPPLE =====
            Night twinkled points of light; ink stipples instead. Same `.twinkle`
            hook, so the same fade cycle reads as a hand-laid dot field. */}
        <g>
          <circle className="twinkle" cx="380" cy="410" r="1.6" fill={TEAL_DEEP} opacity="0.3" />
          <circle className="twinkle" cx="560" cy="270" r="1.2" fill={INK} opacity="0.2" />
          <circle className="twinkle" cx="670" cy="320" r="1.2" fill={PLUM} opacity="0.2" />
          <circle className="twinkle" cx="900" cy="300" r="1.2" fill={TEAL} opacity="0.2" />
          <circle className="twinkle" cx="480" cy="550" r="1.2" fill={TEAL_DEEP} opacity="0.22" />
          <circle className="twinkle" cx="750" cy="280" r="1.1" fill={INK} opacity="0.16" />
          <circle className="twinkle" cx="1020" cy="310" r="1.1" fill={PLUM} opacity="0.16" />
          <circle className="twinkle" cx="330" cy="200" r="1.6" fill={TEAL_DEEP} opacity="0.26" />
          <circle className="twinkle" cx="850" cy="120" r="1.2" fill={TEAL} opacity="0.2" />
          <circle className="twinkle" cx="1150" cy="420" r="1.5" fill={PLUM} opacity="0.2" />
          <circle className="twinkle" cx="620" cy="620" r="1.2" fill={TEAL_DEEP} opacity="0.2" />
          <circle className="twinkle" cx="1300" cy="500" r="1.2" fill={INK} opacity="0.16" />
          {/* A denser cluster around the root system — engraved tone, not sparkle */}
          <circle className="twinkle" cx="120" cy="560" r="1.4" fill={PLUM_DEEP} opacity="0.24" />
          <circle className="twinkle" cx="196" cy="642" r="1.2" fill={PLUM} opacity="0.2" />
          <circle className="twinkle" cx="94" cy="682" r="1.3" fill={PLUM_DEEP} opacity="0.22" />
          <circle className="twinkle" cx="284" cy="470" r="1.2" fill={TEAL_DEEP} opacity="0.24" />
        </g>

        {/* ===== PLATE CAPTIONS ===== */}
        <g opacity="0.2" fill={INK} fontFamily="monospace">
          <text x="500" y="740" fontSize="8" letterSpacing="3">DESIGN</text>
          <text x="620" y="740" fontSize="8" letterSpacing="3">SYSTEMS</text>
          <text x="750" y="740" fontSize="8" letterSpacing="3">DATA</text>
          <text x="850" y="740" fontSize="8" letterSpacing="3">EVOLUTION</text>
        </g>
        <text x="1150" y="620" fontSize="10" fill={INK} opacity="0.16" fontFamily="monospace" letterSpacing="4">SOFTWARE FACTORY</text>

        {/* ===== SMALL MARGINALIA ===== */}
        <g opacity="0.3" fill="none">
          <rect x="340" y="460" width="12" height="12" rx="2" stroke={TEAL_DEEP} strokeWidth="0.7" />
          <rect x="650" y="480" width="14" height="14" rx="2" stroke={TEAL_DEEP} strokeWidth="0.7" />
          <circle cx="700" cy="490" r="6" stroke={INK_SOFT} strokeWidth="0.5" />
          <rect x="1100" y="500" width="40" height="3" rx="1.5" fill={TEAL} stroke="none" opacity="0.4" />
          <rect x="1100" y="507" width="25" height="3" rx="1.5" fill={INK} stroke="none" opacity="0.2" />
        </g>
      </g>
    </>
  );
}
