const projects = [
  {
    id: 1,
    title: 'Aeternus Poison',
    date: 'maio 2026',
    tags: ['web', 'design'],
    description: 'esse site! blog pessoal inspirado em colagem e estética dos anos 2000.',
    status: 'em progresso',
  },
  {
    id: 2,
    title: 'Marionete',
    date: 'maio 2026',
    tags: ['motion', 'photoshop'],
    description: 'design no estilo marionete feito com Photoshop e After Effects.',
    status: 'concluído',
  },
  {
    id: 3,
    title: 'Arquivo de Texturas',
    date: 'maio 2026',
    tags: ['organização', 'assets'],
    description: 'organização de texturas, projetos e imagens antigas.',
    status: 'concluído',
  },
]

const statusColor = {
  'em progresso': '#ffd166',
  'concluído': '#a8e6cf',
  'pausado': '#ffb3b3',
}

function Projetos() {
  return (
    <div className="page-content">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}
      >
        {projects.map((p) => (
          <div className="card project-card" key={p.id}>
            <div
              className="card-title"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
            >
              <span>{p.title}</span>
              <span
                className="status-badge"
                style={{ background: statusColor[p.status] || '#ddd' }}
              >
                {p.status}
              </span>
            </div>
            <p style={{ padding: '0 16px', marginBottom: 10, opacity: 0.7, fontSize: 'clamp(13px,1.8vw,18px)' }}>
              {p.date}
            </p>
            <p>{p.description}</p>
            <div style={{ padding: '0 16px 16px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projetos
