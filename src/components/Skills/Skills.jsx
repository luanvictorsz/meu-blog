import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="habilidades" className="card">
      <div className="sectionHead">
        <h2 className="h2">Habilidades</h2>
        <p className="p dim">Organizadas por domínio.</p>
      </div>

      <div className="skills">
        {skills.map((s) => (
          <div className="skillBox" key={s.group}>
            <div className="skillTitle">{s.group}</div>
            <div className="tags">
              {s.items.map((x) => (
                <span className="tag" key={x}>
                  {x}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}