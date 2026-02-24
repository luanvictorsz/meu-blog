export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it) => (
        <div className="tlItem" key={it.time + it.title}>
          <div className="dot" />
          <div className="tlBody">
            <div className="tlTop">
              <div className="tlTitle">{it.title}</div>
              <div className="tlTime">{it.time}</div>
            </div>
            <div className="tlDesc">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}