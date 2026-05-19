const projects = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    title: 'Pong Game',
    date: 'maio 2026',
    tags: ['web', 'Gamedev'],
    description:
      'Um joguinho de pong simples com uma estética retrô e efeitos visuais experimentais.',
    status: 'em progresso',
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

              <button className="project-button">
                Ver Projeto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos