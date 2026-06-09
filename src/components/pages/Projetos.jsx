import { useState, useRef } from 'react'
import dinopedia from '../../assets/images/projects/dinopedia.png'
import agendaV from '../../assets/images/projects/agendaV.png'

const projects = [
  {
    id: 1,
    image: dinopedia,
    title: 'Dinopedia',
    date: 'março 2026',
    tags: ['App Mobile', 'Curiosidades'],
    description:
      'um aplicativo para dispositivos moveis contendo informações sobre alguns dinossauros, quero desenvolver uma api para ele em breve...',
    status: 'em progresso',
    link: 'https://github.com/luanvictorsz/dinopedia',
  },
  {
    id: 2,
    image: agendaV,
    title: 'Agenda-V',
    date: 'maio 2026',
    tags: ['App Mobile', 'Produtividade'],
    description: 'é só um "to-do" genérico com um tema bonitinho',
    status: 'concluído',
    link: 'https://github.com/luanvictorsz/AgendaV',
  },
]

const statusColor = {
  'em progresso': '#ffd166',
  concluído: '#7bd389',
  pausado: '#ff8b8b',
}

function ProjectCard({ p }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img
          src={p.image}
          alt={p.title}
          className="project-image"
          style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
        />
        <span
          className="status-badge"
          style={{ background: statusColor[p.status] || '#ddd' }}
        >
          {p.status}
        </span>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h2>{p.title}</h2>
          <span>{p.date}</span>
        </div>

        <p className="project-description">{p.description}</p>

        <div className="project-tags">
          {p.tags.map((t) => (
            <span className="tag" key={t}>#{t}</span>
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
  )
}

function Projetos() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent((c) => (c + 1) % projects.length)

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div className="page-content">
      {/* Desktop grid */}
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>

      {/* Mobile carousel */}
      <div
        className="projects-carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((p) => (
            <div className="carousel-slide" key={p.id}>
              <ProjectCard p={p} />
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="anterior">‹</button>
          <div className="carousel-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`projeto ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="próximo">›</button>
        </div>
      </div>
    </div>
  )
}

export default Projetos