export default function Noise() {
  return (
    <div className="noise" aria-hidden="true">
      <svg width="0" height="0">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
    </div>
  );
}