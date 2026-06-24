"use client";
import React from "react";
import { portfolioConfig } from "@/lib/portfolio-config";

/**
 * 404 page — animated ocean waves flowing left, numbers bouncing in water.
 *
 * Wave seamlessness trick: each SVG row contains a pattern tile that is
 * exactly 350px wide, repeated twice side-by-side (700px total). The whole
 * group is animated from translateX(0) → translateX(-350px) so the second
 * copy lands exactly where the first started — invisible loop.
 */

const NotFound: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        .page-404 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #ffffff;
          overflow: hidden;
          padding: 2rem 1rem;
          box-sizing: border-box;
        }

        /* "Oops, page not found !" — thin serif, matches original */
        .title-404 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 2.4rem;
          letter-spacing: 0.01em;
        }

        .ocean-scene {
          width: 100%;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        /* Clip so the over-wide SVG tiles don't bleed */
        .wave-strip {
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .wave-strip svg {
          display: block;
          /* SVG is drawn at 700px wide but we render it at 100% */
          width: 100%;
        }

        /* ── seamless scroll: tile is 350px, repeat twice = 700px.
              Use percentage translation so the loop stays correct at
              any responsive scale (translateX(-50%) == -350px of tile).
        */
        /* Two size-specific scroll animations so we can add a tiny overlap
           between copies (no visible gap when rendered responsively). */
        @keyframes waveScrollBig {
          from { transform: translateX(0); }
          /* -49.42857% == -346 / 700 → 4px overlap when tile = 350px */
          to   { transform: translateX(-49.4285714286%); }
        }

        @keyframes waveScrollSmall {
          from { transform: translateX(0); }
          /* -47.72727% == -42 / 88 → slight overlap for mini tiles */
          to   { transform: translateX(-47.7272727273%); }
        }

        /* Set transform origin behaviour for SVG groups */
        .wave-tile-big, .wave-tile-slow-big, .wave-tile-small, .wave-tile-small-slow {
          transform-box: fill-box;
          transform-origin: 0 50%;
          will-change: transform;
        }

        /* Big bank speeds */
        .wave-tile-big { animation: waveScrollBig 7s linear infinite; }
        .wave-tile-slow-big { animation: waveScrollBig 11s linear infinite; }

        /* Small mini-wave speeds */
        .wave-tile-small { animation: waveScrollSmall 7s linear infinite; }
        .wave-tile-small-slow { animation: waveScrollSmall 11s linear infinite; }

        /* Wave stroke styles */
        .wp  { stroke: #7aafc4; stroke-width: 2.4; fill: none;
                stroke-linecap: round; stroke-linejoin: round; }
        .sp  { stroke: #5a94ad; stroke-width: 2.4; fill: none;
                stroke-linecap: round; stroke-linejoin: round; }
        .wm  { stroke: #7aafc4; stroke-width: 2.0; fill: none;
                stroke-linecap: round; }

        /* ── Numbers row ── */
        .numbers-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: -3px 0;
        }

        /* "404" font: bold condensed serif — matches the original image style */
        .num-digit {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 76px;
          font-weight: 700;
          font-style: normal;
          color: #8b0000;
          line-height: 1;
          display: inline-block;
          padding: 0 6px;
          animation: bob 2.8s ease-in-out infinite;
          /* prevent layout shift during animation */
          will-change: transform;
        }

        .num-digit:nth-child(2) { animation-delay: 0s; }
        .num-digit:nth-child(4) { animation-delay: 0.45s; }
        .num-digit:nth-child(6) { animation-delay: 0.9s; }

        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }

        /* mini wave SVGs flanking numbers */
        .mini-wave {
          flex: 1;
          max-width: 88px;
          overflow: hidden;
          line-height: 0;
        }
        .mini-wave svg { display: block; width: 100%; }

        /* ── Back button ── */
        .back-link {
          margin-top: 2.4rem;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 15px;
          font-weight: 400;
          color: #111;
          background: none;
          border: none;
          cursor: pointer;
          letter-spacing: 0.02em;
          padding: 0;
        }
        .back-link:hover { text-decoration: underline; }

        /* Force footer to light mode */
        .page-404 footer {
          background-color: #ffffff !important;
          color: #333333 !important;
          border-top-color: #e5e5e5 !important;
        }

        .page-404 footer p {
          color: #666666 !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .wave-tile-big, .wave-tile-slow-big, .wave-tile-small, .wave-tile-small-slow, .num-digit { animation: none; }
        }
      `}</style>

      <div className="page-404">
        <p className="title-404">Oops, page not found !</p>

        <div className="ocean-scene">

          {/* ═══ TOP WAVE BANK ═══ */}
          <div className="wave-strip">
            <svg viewBox="0 0 700 88" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="bigWavePattern" patternUnits="userSpaceOnUse" width="350" height="88">
                  <g>
                    <path className="sp" d="M58,52 C66,27 83,22 90,37 C86,49 76,52 72,45 C70,39 76,35 82,39" />
                    <path className="wp" d="M0,58 C12,50 23,50 35,58 C47,66 58,66 70,58" />
                    <path className="wp" d="M90,58 C102,50 113,50 125,58 C137,66 148,66 160,58" />
                    <path className="wp" d="M160,58 C172,50 183,50 195,58 C207,66 218,66 230,58" />
                    <path className="wp" d="M230,58 C242,50 253,50 265,58 C277,66 288,66 300,58" />
                    <path className="wp" d="M300,58 C312,50 323,50 335,58" />
                    <path className="sp" d="M408,52 C416,27 433,22 440,37 C436,49 426,52 422,45 C420,39 426,35 432,39" />
                    <path className="wp" d="M350,58 C362,50 373,50 385,58 C397,66 408,66 420,58" />
                    <path className="wp" d="M440,58 C452,50 463,50 475,58 C487,66 498,66 510,58" />
                    <path className="wp" d="M510,58 C522,50 533,50 545,58 C557,66 568,66 580,58" />
                    <path className="wp" d="M580,58 C592,50 603,50 615,58 C627,66 638,66 650,58" />
                    <path className="wp" d="M650,58 C662,50 673,50 685,58" />
                  </g>
                </pattern>

                <pattern id="bigWavePatternSlow" patternUnits="userSpaceOnUse" width="350" height="88">
                  <g>
                    <path className="wp" d="M0,74 C16,66 32,66 48,74" />
                    <path className="wp" d="M85,74 C101,66 117,66 133,74" />
                    <path className="wp" d="M170,74 C186,66 202,66 218,74" />
                    <path className="wp" d="M255,74 C271,66 287,66 303,74" />
                    <path className="wp" d="M320,74 C336,66 352,66 368,74" />
                    <path className="wp" d="M350,74 C366,66 382,66 398,74" />
                    <path className="wp" d="M435,74 C451,66 467,66 483,74" />
                    <path className="wp" d="M520,74 C536,66 552,66 568,74" />
                    <path className="wp" d="M605,74 C621,66 637,66 653,74" />
                    <path className="wp" d="M670,74 C686,66 702,66 718,74" />
                  </g>
                </pattern>
              </defs>

              {/* fill a rect with the pattern and animate the patternTransform */}
              <rect x="0" y="0" width="700" height="88" fill="url(#bigWavePattern)" />
              <rect x="0" y="0" width="700" height="88" fill="url(#bigWavePatternSlow)" opacity="0.7" />

              <animateTransform xlinkHref="#bigWavePattern" attributeName="patternTransform" type="translate" from="0 0" to="-350 0" dur="7s" repeatCount="indefinite" />
              <animateTransform xlinkHref="#bigWavePatternSlow" attributeName="patternTransform" type="translate" from="0 0" to="-350 0" dur="11s" repeatCount="indefinite" />
            </svg>
          </div>

          {/* ═══ NUMBERS ROW ═══ */}
          <div className="numbers-row">

            <div className="mini-wave">
                <svg viewBox="0 0 88 20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="miniWave" patternUnits="userSpaceOnUse" width="88" height="20">
                      <g>
                        <path className="wm" d="M0,12 C11,5 22,5 33,12 C44,19 55,19 66,12" />
                        <path className="wm" d="M44,12 C55,5 66,5 77,12 C88,19 99,19 110,12" />
                      </g>
                    </pattern>
                  </defs>

                  <rect x="0" y="0" width="176" height="20" fill="url(#miniWave)" />

                  <animateTransform xlinkHref="#miniWave" attributeName="patternTransform" type="translate" from="0 0" to="-88 0" dur="7s" repeatCount="indefinite" />
                </svg>
            </div>

            <span className="num-digit">4</span>

            <div className="mini-wave">
              <svg viewBox="0 0 88 20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="miniWaveB" patternUnits="userSpaceOnUse" width="88" height="20">
                    <g>
                      <path className="wm" d="M0,12 C11,5 22,5 33,12 C44,19 55,19 66,12" />
                      <path className="wm" d="M44,12 C55,5 66,5 77,12 C88,19 99,19 110,12" />
                    </g>
                  </pattern>
                </defs>

                <rect x="0" y="0" width="176" height="20" fill="url(#miniWaveB)" />

                <animateTransform xlinkHref="#miniWaveB" attributeName="patternTransform" type="translate" from="0 0" to="-88 0" dur="7s" repeatCount="indefinite" />
              </svg>
            </div>

            <span className="num-digit">0</span>

            <div className="mini-wave">
              <svg viewBox="0 0 88 20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="miniWaveC" patternUnits="userSpaceOnUse" width="88" height="20">
                    <g>
                      <path className="wm" d="M0,12 C11,5 22,5 33,12 C44,19 55,19 66,12" />
                      <path className="wm" d="M44,12 C55,5 66,5 77,12 C88,19 99,19 110,12" />
                    </g>
                  </pattern>
                </defs>

                <rect x="0" y="0" width="176" height="20" fill="url(#miniWaveC)" />

                <animateTransform xlinkHref="#miniWaveC" attributeName="patternTransform" type="translate" from="0 0" to="-88 0" dur="7s" repeatCount="indefinite" />
              </svg>
            </div>

            <span className="num-digit">4</span>

            <div className="mini-wave">
              <svg viewBox="0 0 88 20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="miniWaveD" patternUnits="userSpaceOnUse" width="88" height="20">
                    <g>
                      <path className="wm" d="M0,12 C11,5 22,5 33,12 C44,19 55,19 66,12" />
                      <path className="wm" d="M44,12 C55,5 66,5 77,12 C88,19 99,19 110,12" />
                    </g>
                  </pattern>
                </defs>

                <rect x="0" y="0" width="176" height="20" fill="url(#miniWaveD)" />

                <animateTransform xlinkHref="#miniWaveD" attributeName="patternTransform" type="translate" from="0 0" to="-88 0" dur="7s" repeatCount="indefinite" />
              </svg>
            </div>

          </div>

          {/* ═══ BOTTOM WAVE BANK ═══ */}
          <div className="wave-strip">
            <svg viewBox="0 0 700 88" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="bottomBigPattern" patternUnits="userSpaceOnUse" width="350" height="88">
                  <g>
                    <path className="wp" d="M0,18 C16,10 32,10 48,18" />
                    <path className="wp" d="M85,18 C101,10 117,10 133,18" />
                    <path className="wp" d="M170,18 C186,10 202,10 218,18" />
                    <path className="wp" d="M255,18 C271,10 287,10 303,18" />
                    <path className="wp" d="M320,18 C336,10 352,10 368,18" />
                    <path className="wp" d="M350,18 C366,10 382,10 398,18" />
                    <path className="wp" d="M435,18 C451,10 467,10 483,18" />
                    <path className="wp" d="M520,18 C536,10 552,10 568,18" />
                    <path className="wp" d="M605,18 C621,10 637,10 653,18" />
                    <path className="wp" d="M670,18 C686,10 702,10 718,18" />
                  </g>
                </pattern>

                <pattern id="bottomBigPatternTop" patternUnits="userSpaceOnUse" width="350" height="88">
                  <g>
                    <path className="sp" d="M58,46 C66,21 83,16 90,31 C86,43 76,46 72,39 C70,33 76,29 82,33" />
                    <path className="wp" d="M0,52 C12,44 23,44 35,52 C47,60 58,60 70,52" />
                    <path className="wp" d="M90,52 C102,44 113,44 125,52 C137,60 148,60 160,52" />
                    <path className="wp" d="M160,52 C172,44 183,44 195,52 C207,60 218,60 230,52" />
                    <path className="wp" d="M230,52 C242,44 253,44 265,52 C277,60 288,60 300,52" />
                    <path className="wp" d="M300,52 C312,44 323,44 335,52" />
                    <path className="sp" d="M408,46 C416,21 433,16 440,31 C436,43 426,46 422,39 C420,33 426,29 432,33" />
                    <path className="wp" d="M350,52 C362,44 373,44 385,52 C397,60 408,60 420,52" />
                    <path className="wp" d="M440,52 C452,44 463,44 475,52 C487,60 498,60 510,52" />
                    <path className="wp" d="M510,52 C522,44 533,44 545,52 C557,60 568,60 580,52" />
                    <path className="wp" d="M580,52 C592,44 603,44 615,52 C627,60 638,60 650,52" />
                    <path className="wp" d="M650,52 C662,44 673,44 685,52" />
                  </g>
                </pattern>
              </defs>

              <rect x="0" y="0" width="700" height="88" fill="url(#bottomBigPattern)" opacity="0.95" />
              <rect x="0" y="0" width="700" height="88" fill="url(#bottomBigPatternTop)" />

              <animateTransform xlinkHref="#bottomBigPattern" attributeName="patternTransform" type="translate" from="0 0" to="-350 0" dur="11s" repeatCount="indefinite" />
              <animateTransform xlinkHref="#bottomBigPatternTop" attributeName="patternTransform" type="translate" from="0 0" to="-350 0" dur="7s" repeatCount="indefinite" />
            </svg>
          </div>

        </div>

        <button className="back-link" onClick={() => window.history.back()}>
          Back
        </button>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border text-center text-muted-foreground text-sm">
        <p>© 2024 {portfolioConfig.personal.name}. All rights reserved.</p>
      </footer>
    </>
  );
};

export default NotFound;
