export default function Meta({ label, value }) {
  return (
    <div className="meta">
      <div className="metaK">{label}</div>
      <div className="metaV">{value}</div>
    </div>
  );
}