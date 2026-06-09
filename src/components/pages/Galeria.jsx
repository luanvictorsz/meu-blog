import { useState } from 'react'
import aeternus from '../../assets/images/projects/marionet_1.gif'
import pyramid from '../../assets/images/projects/impressao/pyramid.jpg'
import marcaPagina from "../../assets/images/notas/marcaPaginas.jpg";
import grogu from "../../assets/images/notas/grogu.jpg";

const items = [
  {
    type: 'image',
    src: aeternus,
    title: 'marionete_poison_120526.gif',
    date: 'maio 2026',
    tags: ['weirdo', 'design'],
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/watch?v=xtVbCJ-h2oQ',
    title: 'the_end_of_the_world.mp4',
    date: 'outubro 2025',
    tags: ['psx', 'gamedev'],
  },
  {
    type: 'image',
    src: pyramid,
    title: 'pyramid_head_06062026.jpg',
    date: 'junho 2026',
    tags: ['impressao', 'game'],
  },
  {
    type: 'image',
    src: grogu,
    title: 'grogu_16052026.jpg',
    date: 'maio 2026',
    tags: ['impressao', 'geek'],
  },
  {
    type: 'image',
    src: marcaPagina,
    title: 'marcaPaginas.jpg',
    date: 'maio 2026',
    tags: ['impressao', 'cats'],
  },
]

const allTags = ['all', ...new Set(items.flatMap((item) => item.tags))]

function Galeria() {
  const [selected, setSelected] = useState(null)
  const [activeTag, setActiveTag] = useState('all')

  const getYoutubeId = (url) => new URL(url).searchParams.get('v')
  const toEmbedUrl   = (url) => `https://www.youtube.com/embed/${getYoutubeId(url)}`
  const getThumbnail = (url) => `https://img.youtube.com/vi/${getYoutubeId(url)}/hqdefault.jpg`

  const filtered = activeTag === 'all'
    ? items
    : items.filter((item) => item.tags.includes(activeTag))

  return (
    <div className="page-content">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {allTags.map((tag) => (
          <span
            key={tag}
            className="tag"
            onClick={() => setActiveTag(tag)}
            style={{
              cursor: 'pointer',
              opacity: activeTag === tag ? 1 : 0.45,
              fontWeight: activeTag === tag ? 'bold' : 'normal',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {filtered.map((item) => (
          <div
            key={item.title}
            className="gallery-item"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.type === 'video' ? getThumbnail(item.src) : item.src}
              alt={item.title}
            />
            <div className="gallery-caption">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>

            {selected.type === 'video' ? (
              <iframe
                width="100%"
                height="500"
                src={toEmbedUrl(selected.src)}
                title={selected.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={selected.src} alt={selected.title} />
            )}

            <div style={{ padding: '12px 16px' }}>
              <div className="card-title" style={{ padding: 0, marginBottom: 6 }}>
                {selected.title}
              </div>
              <p style={{ padding: 0, marginBottom: 8, opacity: 0.7, fontSize: 16 }}>
                {selected.date}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {selected.tags.map((t) => (
                  <span
                    className="tag"
                    key={t}
                    onClick={() => { setActiveTag(t); setSelected(null) }}
                    style={{ cursor: 'pointer' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galeria