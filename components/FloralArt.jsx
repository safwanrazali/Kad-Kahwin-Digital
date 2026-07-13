// Original decorative floral art, composed procedurally from simple shapes
// (no traced or copied artwork) so it can recolour with the site palette.

function Bloom({ cx, cy, r, fill, opacity = 1, petals = 8 }) {
  const items = [];
  for (let i = 0; i < petals; i++) {
    const angle = (360 / petals) * i;
    const rad = (angle * Math.PI) / 180;
    const dx = Math.cos(rad) * r * 0.38;
    const dy = Math.sin(rad) * r * 0.38;
    items.push(
      <ellipse
        key={i}
        cx={cx + dx}
        cy={cy + dy}
        rx={r * 0.62}
        ry={r * 0.4}
        fill={fill}
        opacity={opacity}
        transform={`rotate(${angle} ${cx + dx} ${cy + dy})`}
      />
    );
  }
  return (
    <g>
      {items}
      <circle cx={cx} cy={cy} r={r * 0.3} fill={fill} opacity={Math.min(1, opacity + 0.15)} />
    </g>
  );
}

function Leaf({ x, y, size = 30, rotate = 0, fill }) {
  return (
    <path
      d={`M${x},${y} Q${x + size * 0.55},${y - size * 0.6} ${x},${y - size} Q${x - size * 0.55},${y - size * 0.6} ${x},${y} Z`}
      fill={fill}
      transform={`rotate(${rotate} ${x} ${y})`}
      opacity="0.85"
    />
  );
}

function Sprig({ x, y, rotate = 0, fill }) {
  return (
    <g transform={`rotate(${rotate} ${x} ${y})`}>
      <path d={`M${x},${y} q4,-18 -2,-34`} stroke={fill} strokeWidth="1.4" fill="none" opacity="0.6" />
      <circle cx={x - 2} cy={y - 34} r="4.5" fill={fill} opacity="0.7" />
      <circle cx={x + 4} cy={y - 22} r="3" fill={fill} opacity="0.55" />
    </g>
  );
}

export default function FloralArt({ variant = "top" }) {
  const c1 = "#c7d3e6"; // pale bloom
  const c2 = "#9fb0cf"; // mid bloom
  const c3 = "#5f719a"; // deep bloom / shadow
  const leaf = "#aebdd6";
  const leafDeep = "#8497bb";

  if (variant === "top") {
    return (
      <svg
        className="floral-art floral-art-top"
        viewBox="0 0 420 240"
        preserveAspectRatio="xMaxYMin slice"
        aria-hidden="true"
      >
        {/* thin branch reaching to the top-left with small blossoms */}
        <path d="M0,14 C60,4 120,26 170,10" stroke={leaf} strokeWidth="1.3" fill="none" opacity="0.55" />
        <Sprig x={40} y={12} rotate={20} fill={c2} />
        <Sprig x={95} y={18} rotate={-10} fill={c2} />

        {/* leaves anchoring the right cluster */}
        <Leaf x={330} y={70} size={46} rotate={140} fill={leafDeep} />
        <Leaf x={365} y={40} size={40} rotate={100} fill={leaf} />
        <Leaf x={300} y={30} size={36} rotate={200} fill={leaf} />
        <Leaf x={390} y={90} size={38} rotate={70} fill={leafDeep} />

        {/* blooms */}
        <Bloom cx={352} cy={46} r={30} fill={c1} petals={9} />
        <Bloom cx={392} cy={26} r={22} fill={c2} opacity={0.95} petals={8} />
        <Bloom cx={318} cy={78} r={18} fill={c3} opacity={0.9} petals={7} />
        <Bloom cx={402} cy={92} r={16} fill={c1} opacity={0.9} petals={7} />

        {/* small trailing blossoms */}
        <circle cx={278} cy={54} r="4" fill={c2} opacity="0.6" />
        <circle cx={260} cy={30} r="3" fill={c1} opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg
      className="floral-art floral-art-bottom"
      viewBox="0 0 300 260"
      preserveAspectRatio="xMinYMax slice"
      aria-hidden="true"
    >
      {/* stems */}
      <path d="M10,260 C20,190 60,170 40,110" stroke={leafDeep} strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M46,260 C56,210 30,180 62,140" stroke={leaf} strokeWidth="1.3" fill="none" opacity="0.5" />

      {/* leaves */}
      <Leaf x={20} y={230} size={54} rotate={-20} fill={leafDeep} />
      <Leaf x={55} y={250} size={48} rotate={30} fill={leaf} />
      <Leaf x={12} y={180} size={44} rotate={-60} fill={leaf} />
      <Leaf x={70} y={200} size={40} rotate={10} fill={leafDeep} />
      <Leaf x={35} y={140} size={36} rotate={-40} fill={leaf} />

      {/* blooms */}
      <Bloom cx={40} cy={150} r={30} fill={c1} petals={9} />
      <Bloom cx={72} cy={185} r={24} fill={c2} opacity={0.95} petals={8} />
      <Bloom cx={18} cy={110} r={18} fill={c3} opacity={0.9} petals={7} />

      {/* trailing blossoms */}
      <circle cx={92} cy={150} r="4" fill={c2} opacity="0.6" />
      <circle cx={100} cy={120} r="3" fill={c1} opacity="0.5" />
    </svg>
  );
}