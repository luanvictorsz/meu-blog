import dinopedia from '../assets/images/projects/dinopedia.png'
import agendaV from '../assets/images/projects/agendaV.png'

const projects = [
  {
    id: 1,
    image: dinopedia,
    title: 'Dinopedia',
    date: 'maio 2026',
    tags: ['App Mobile', 'Curiosidades'],
    description:
      'um aplicativo para dispositivos moveis contendo informações sobre algus dinossauros, quero desenvolver uma api para ele em breve...',
    status: 'em progresso',
    link: 'https://github.com/luanvictorsz/dinopedia',
  },
  {
    id: 2,
    image: agendaV,
    title: 'Agenda-V',
    date: 'maio 2026',
    tags: ['App Mobile', 'Produtividade'],
    description:
      'é só um "to-do" genérico com um tema bonitinho',
    status: 'concluído',
    link: 'https://github.com/luanvictorsz/AgendaV',
  },
]

const statusColor = {
  'em progresso': '#ffd166',
  concluído: '#7bd389',
  pausado: '#ff8b8b',
}

function Projetos() {
  return (
    <div className="page-content">
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="project-image-wrapper">
              <img
                src={p.image}
                alt={p.title}
                className="project-image"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <span
                className="status-badge"
                style={{
                  background: statusColor[p.status] || '#ddd',
                }}
              >
                {p.status}
              </span>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h2>{p.title}</h2>
                <span>{p.date}</span>
              </div>

              <p className="project-description">
                {p.description}
              </p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    #{t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos