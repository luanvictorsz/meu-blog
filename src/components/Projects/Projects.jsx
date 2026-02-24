import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projetos" className="card">
      <div className="sectionHead">
        <h2 className="h2">Projetos</h2>
        <p className="p dim">Troque por links reais e resultados.</p>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <div className="projectTop">
              <div className="projTitleWrap">
                <div className="projectTitle">{p.title}</div>
                <div className="badge">{p.tag}</div>
              </div>
              <div className="projLinks">
                <a className="link" href={p.links.demo}>
                  Demo
                </a>
                <a className="link" href={p.links.repo}>
                  Repo
                </a>
              </div>
            </div>

            <p className="p">{p.desc}</p>

            <div className="tags">
              {p.stack.map((x) => (
                <span className="tag" key={x}>
                  {x}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}