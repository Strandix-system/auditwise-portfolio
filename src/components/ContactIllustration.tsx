const ContactIllustration = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes floatA{0%,100%{transform:translateY(0px)}50%{transform:translateY(-9px)}}
        @keyframes floatB{0%,100%{transform:translateY(0px)}50%{transform:translateY(-6px)}}
        @keyframes floatC{0%,100%{transform:translateY(0px)}50%{transform:translateY(-11px)}}
        @keyframes floatD{0%,100%{transform:translateY(0px)}50%{transform:translateY(-7px)}}
        @keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}
        @keyframes dash{to{stroke-dashoffset:-24}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes barA{0%{height:0;y:390}100%{height:36;y:354}}
        @keyframes barB{0%{height:0;y:390}100%{height:54;y:336}}
        @keyframes barC{0%{height:0;y:390}100%{height:28;y:362}}
        @keyframes barD{0%{height:0;y:390}100%{height:62;y:328}}
        @keyframes barE{0%{height:0;y:390}100%{height:42;y:348}}
        @keyframes barF{0%{height:0;y:390}100%{height:48;y:342}}
        .fa{animation:floatA 3.2s ease-in-out infinite}
        .fb{animation:floatB 3.8s ease-in-out infinite .5s}
        .fc{animation:floatC 2.9s ease-in-out infinite 1s}
        .fd{animation:floatD 4.1s ease-in-out infinite 1.5s}
        .dl{stroke-dasharray:7 5;animation:dash 2s linear infinite}
        .dl2{stroke-dasharray:5 7;animation:dash 2.6s linear infinite reverse}
        .dp{animation:pulse 2.2s ease-in-out infinite}
        .cb{animation:blink 1.1s ease-in-out infinite}
        .ring{animation:spin 22s linear infinite;transform-origin:340px 210px}
        .ba{animation:barA 1.3s cubic-bezier(.4,0,.2,1) both .15s}
        .bb{animation:barB 1.3s cubic-bezier(.4,0,.2,1) both .28s}
        .bc{animation:barC 1.3s cubic-bezier(.4,0,.2,1) both .42s}
        .bd{animation:barD 1.3s cubic-bezier(.4,0,.2,1) both .56s}
        .be{animation:barE 1.3s cubic-bezier(.4,0,.2,1) both .70s}
        .bf{animation:barF 1.3s cubic-bezier(.4,0,.2,1) both .84s}
        @media(prefers-reduced-motion:reduce){
          .fa,.fb,.fc,.fd,.dl,.dl2,.dp,.cb,.ring,
          .ba,.bb,.bc,.bd,.be,.bf{animation:none}
        }
      `}</style>

      {/* decorative orbit ring */}
      <ellipse
        className="ring"
        cx="340"
        cy="210"
        rx="260"
        ry="190"
        stroke="hsl(217 91% 50% / 0.05)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 10"
      />

      {/* hex grid background dots */}
      <g opacity="0.18">
        <circle cx="80" cy="100" r="2" fill="#378ADD" />
        <circle cx="130" cy="80" r="2" fill="#378ADD" />
        <circle cx="180" cy="100" r="2" fill="#378ADD" />
        <circle cx="105" cy="140" r="2" fill="#378ADD" />
        <circle cx="155" cy="120" r="2" fill="#378ADD" />
        <circle cx="500" cy="100" r="2" fill="#378ADD" />
        <circle cx="550" cy="80" r="2" fill="#378ADD" />
        <circle cx="600" cy="100" r="2" fill="#378ADD" />
        <circle cx="525" cy="140" r="2" fill="#378ADD" />
        <circle cx="575" cy="120" r="2" fill="#378ADD" />
        <circle cx="80" cy="320" r="2" fill="#378ADD" />
        <circle cx="130" cy="340" r="2" fill="#378ADD" />
        <circle cx="600" cy="320" r="2" fill="#378ADD" />
        <circle cx="550" cy="340" r="2" fill="#378ADD" />
      </g>

      {/* laptop body */}
      <rect
        x="168"
        y="136"
        width="304"
        height="200"
        rx="14"
        fill="hsl(217 30% 13% / 0.7)"
        stroke="hsl(217 91% 50% / 0.35)"
        strokeWidth="1.5"
      />
      <rect
        x="180"
        y="148"
        width="280"
        height="176"
        rx="9"
        fill="hsl(220 28% 8% / 0.95)"
      />
      <rect
        x="168"
        y="136"
        width="304"
        height="6"
        rx="6"
        fill="hsl(217 91% 60% / 0.12)"
      />

      {/* keyboard base */}
      <rect
        x="148"
        y="334"
        width="344"
        height="22"
        rx="6"
        fill="hsl(217 30% 20% / 0.55)"
        stroke="hsl(217 91% 50% / 0.15)"
        strokeWidth="1"
      />
      <rect
        x="148"
        y="334"
        width="344"
        height="4"
        rx="3"
        fill="hsl(217 91% 60% / 0.08)"
      />
      <rect
        x="290"
        y="342"
        width="60"
        height="10"
        rx="3"
        fill="hsl(217 91% 50% / 0.12)"
        stroke="hsl(217 91% 50% / 0.2)"
        strokeWidth="0.8"
      />
      <g fill="hsl(217 91% 70% / 0.18)">
        {[160, 172, 184, 196, 208, 220, 232, 244].map((x) => (
          <rect key={x} x={x} y="337" width="8" height="5" rx="1" />
        ))}
        {[360, 372, 384, 396, 408, 420, 432, 444].map((x) => (
          <rect key={x} x={x} y="337" width="8" height="5" rx="1" />
        ))}
      </g>

      {/* browser chrome */}
      <rect
        x="186"
        y="154"
        width="268"
        height="18"
        rx="4"
        fill="hsl(217 91% 45% / 0.4)"
      />
      <circle cx="196" cy="163" r="4" fill="#1D9E75" />
      <circle cx="208" cy="163" r="4" fill="#EF9F27" />
      <circle cx="220" cy="163" r="4" fill="#E24B4A" />
      <rect
        x="232"
        y="160"
        width="90"
        height="6"
        rx="3"
        fill="hsl(217 91% 72% / 0.25)"
      />
      <circle cx="444" cy="163" r="3.5" fill="#1D9E75" className="dp" />

      {/* stat row */}
      <rect
        x="186"
        y="178"
        width="82"
        height="40"
        rx="6"
        fill="hsl(217 91% 50% / 0.18)"
        stroke="hsl(217 91% 50% / 0.25)"
        strokeWidth="0.8"
      />
      <rect
        x="274"
        y="178"
        width="82"
        height="40"
        rx="6"
        fill="hsl(142 60% 38% / 0.18)"
        stroke="hsl(142 60% 38% / 0.25)"
        strokeWidth="0.8"
      />
      <rect
        x="362"
        y="178"
        width="82"
        height="40"
        rx="6"
        fill="hsl(270 70% 55% / 0.18)"
        stroke="hsl(270 70% 55% / 0.25)"
        strokeWidth="0.8"
      />
      <text
        x="227"
        y="193"
        textAnchor="middle"
        fontSize="8"
        fill="hsl(217 91% 75% / 0.6)"
        fontFamily="monospace"
      >
        AUDITS
      </text>
      <text
        x="227"
        y="208"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#85B7EB"
      >
        248
      </text>
      <text
        x="315"
        y="193"
        textAnchor="middle"
        fontSize="8"
        fill="hsl(142 60% 75% / 0.6)"
        fontFamily="monospace"
      >
        APPROVED
      </text>
      <text
        x="315"
        y="208"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#5DCAA5"
      >
        182
      </text>
      <text
        x="403"
        y="193"
        textAnchor="middle"
        fontSize="8"
        fill="hsl(270 70% 78% / 0.6)"
        fontFamily="monospace"
      >
        PENDING
      </text>
      <text
        x="403"
        y="208"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#AFA9EC"
      >
        41
      </text>

      {/* donut arc */}
      <circle
        cx="230"
        cy="272"
        r="28"
        stroke="hsl(217 91% 50% / 0.12)"
        strokeWidth="8"
        fill="none"
      />
      <circle
        cx="230"
        cy="272"
        r="28"
        stroke="#378ADD"
        strokeWidth="8"
        fill="none"
        strokeDasharray="128 48"
        strokeDashoffset="44"
        strokeLinecap="round"
      />
      <text
        x="230"
        y="269"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#85B7EB"
      >
        73%
      </text>
      <text
        x="230"
        y="281"
        textAnchor="middle"
        fontSize="7"
        fill="hsl(217 91% 72% / 0.5)"
        fontFamily="monospace"
      >
        DONE
      </text>

      {/* status pills */}
      <rect
        x="278"
        y="224"
        width="48"
        height="13"
        rx="6"
        fill="hsl(142 60% 38% / 0.3)"
        stroke="hsl(142 60% 38% / 0.5)"
        strokeWidth="0.7"
      />
      <text
        x="302"
        y="233"
        textAnchor="middle"
        fontSize="7"
        fill="#5DCAA5"
        fontFamily="monospace"
      >
        APPROVED
      </text>
      <rect
        x="332"
        y="224"
        width="42"
        height="13"
        rx="6"
        fill="hsl(0 72% 51% / 0.25)"
        stroke="hsl(0 72% 51% / 0.4)"
        strokeWidth="0.7"
      />
      <text
        x="353"
        y="233"
        textAnchor="middle"
        fontSize="7"
        fill="#F09595"
        fontFamily="monospace"
      >
        REJECTED
      </text>
      <rect
        x="278"
        y="242"
        width="38"
        height="13"
        rx="6"
        fill="hsl(38 92% 52% / 0.25)"
        stroke="hsl(38 92% 52% / 0.4)"
        strokeWidth="0.7"
      />
      <text
        x="297"
        y="251"
        textAnchor="middle"
        fontSize="7"
        fill="#EF9F27"
        fontFamily="monospace"
      >
        PENDING
      </text>
      <rect
        x="322"
        y="244"
        width="1.5"
        height="9"
        rx="1"
        fill="hsl(217 91% 72% / 0.7)"
        className="cb"
      />
      <rect
        x="278"
        y="260"
        width="112"
        height="5"
        rx="2.5"
        fill="hsl(217 91% 50% / 0.12)"
      />
      <rect
        x="278"
        y="260"
        width="76"
        height="5"
        rx="2.5"
        fill="hsl(217 91% 52% / 0.65)"
      />

      {/* data flow lines */}
      <path
        d="M82 58 Q100 100 168 155"
        stroke="hsl(142 60% 38% / 0.35)"
        strokeWidth="1.3"
        fill="none"
        className="dl"
      />
      <path
        d="M596 58 Q578 100 472 155"
        stroke="hsl(217 91% 50% / 0.3)"
        strokeWidth="1.3"
        fill="none"
        className="dl"
      />
      <path
        d="M82 435 Q110 400 168 345"
        stroke="hsl(38 92% 52% / 0.35)"
        strokeWidth="1.3"
        fill="none"
        className="dl2"
      />
      <path
        d="M596 435 Q570 400 472 345"
        stroke="hsl(270 70% 55% / 0.35)"
        strokeWidth="1.3"
        fill="none"
        className="dl2"
      />

      {/* ── BADGE TOP LEFT: outer g = position, inner g = float animation ── */}
      <g transform="translate(12, 18)">
        <g className="fa">
          <rect
            width="116"
            height="52"
            rx="14"
            fill="hsl(142 60% 38% / 0.13)"
            stroke="hsl(142 60% 38% / 0.45)"
            strokeWidth="1"
          />
          <rect
            x="8"
            y="10"
            width="30"
            height="30"
            rx="8"
            fill="hsl(142 60% 38% / 0.3)"
          />
          <rect
            x="12"
            y="15"
            width="22"
            height="20"
            rx="2"
            fill="#1D9E75"
            opacity="0.92"
          />
          <line
            x1="12"
            y1="22"
            x2="34"
            y2="22"
            stroke="white"
            strokeWidth="1.3"
          />
          <line
            x1="12"
            y1="28"
            x2="34"
            y2="28"
            stroke="white"
            strokeWidth="1.3"
          />
          <line
            x1="23"
            y1="15"
            x2="23"
            y2="35"
            stroke="white"
            strokeWidth="1.3"
          />
          <text x="46" y="28" fontSize="11" fontWeight="600" fill="#5DCAA5">
            Excel
          </text>
          <text x="46" y="42" fontSize="9" fill="hsl(142 60% 65% / 0.7)">
            imported
          </text>
        </g>
      </g>

      {/* ── BADGE TOP RIGHT: outer g = position, inner g = float animation ── */}
      <g transform="translate(552, 18)">
        <g className="fb">
          <rect
            width="116"
            height="52"
            rx="14"
            fill="hsl(217 91% 48% / 0.13)"
            stroke="hsl(217 91% 48% / 0.45)"
            strokeWidth="1"
          />
          <rect
            x="8"
            y="10"
            width="30"
            height="30"
            rx="8"
            fill="hsl(217 91% 48% / 0.3)"
          />
          <rect
            x="11"
            y="16"
            width="24"
            height="17"
            rx="3"
            fill="hsl(217 91% 60%)"
            opacity="0.9"
          />
          <path
            d="M11 18 L23 26 L35 18"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="33" cy="16" r="5.5" fill="#E24B4A" />
          <text
            x="33"
            y="20"
            textAnchor="middle"
            fontSize="7"
            fill="white"
            fontWeight="700"
          >
            3
          </text>
          <text x="46" y="28" fontSize="11" fontWeight="600" fill="#85B7EB">
            Email
          </text>
          <text x="46" y="42" fontSize="9" fill="hsl(217 91% 72% / 0.7)">
            3 sent
          </text>
        </g>
      </g>

      {/* ── BADGE BOTTOM LEFT: outer g = position, inner g = float animation ── */}
      <g transform="translate(12, 404)">
        <g className="fc">
          <rect
            width="124"
            height="52"
            rx="14"
            fill="hsl(38 92% 52% / 0.11)"
            stroke="hsl(38 92% 52% / 0.45)"
            strokeWidth="1"
          />
          <rect
            x="8"
            y="10"
            width="30"
            height="30"
            rx="8"
            fill="hsl(38 92% 52% / 0.25)"
          />
          <ellipse cx="23" cy="21" rx="9" ry="4" fill="#EF9F27" opacity="0.9" />
          <rect
            x="14"
            y="21"
            width="18"
            height="9"
            fill="#EF9F27"
            opacity="0.65"
          />
          <ellipse cx="23" cy="30" rx="9" ry="4" fill="#BA7517" opacity="0.9" />
          <text x="46" y="28" fontSize="11" fontWeight="600" fill="#EF9F27">
            DB Live
          </text>
          <text x="46" y="42" fontSize="9" fill="hsl(38 92% 65% / 0.7)">
            synced
          </text>
        </g>
      </g>

      {/* ── BADGE BOTTOM RIGHT: outer g = position, inner g = float animation ── */}
      <g transform="translate(544, 404)">
        <g className="fd">
          <rect
            width="124"
            height="52"
            rx="14"
            fill="hsl(270 70% 55% / 0.11)"
            stroke="hsl(270 70% 55% / 0.45)"
            strokeWidth="1"
          />
          <rect
            x="8"
            y="10"
            width="30"
            height="30"
            rx="8"
            fill="hsl(270 70% 55% / 0.25)"
          />
          <rect
            x="15"
            y="23"
            width="16"
            height="13"
            rx="3"
            fill="#AFA9EC"
            opacity="0.9"
          />
          <path
            d="M17 23 V18 a6 6 0 0 1 12 0 V23"
            stroke="#7F77DD"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="23" cy="29" r="2.2" fill="#534AB7" />
          <text x="46" y="28" fontSize="11" fontWeight="600" fill="#AFA9EC">
            Secure
          </text>
          <text x="46" y="42" fontSize="9" fill="hsl(270 70% 75% / 0.7)">
            encrypted
          </text>
        </g>
      </g>

      {/* reviewer ring */}
    </svg>
  );
};

export default ContactIllustration;
