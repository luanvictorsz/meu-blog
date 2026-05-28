import { useState } from 'react'
import aeternus from '../../assets/images/projects/marionet_1.gif'

const items = [
  {
    id: 1,
    type: 'image',
    src: aeternus,
    title: 'marionete_poison_120526.gif',
    date: 'maio 2026',
    tags: ['weirdo', 'design'],
  },
  {
    id: 2,
    type: 'video',
    src: 'https://www.youtube.com/watch?v=xtVbCJ-h2oQ',
    title: 'the_end_of_the_world.mp4',
    date: 'outubro 2025',
    tags: ['psx', 'gamedev'],
  },
]

function Galeria() {
  const [selected, setSelected] = useState(null)

  const getYoutubeId = (url) => {
    return new URL(url).searchParams.get('v')
  }

  const toEmbedUrl = (url) => {
    const id = getYoutubeId(url)
    return `https://www.youtube.com/embed/${id}`
  }

  const getThumbnail = (url) => {
    const id = getYoutubeId(url)
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }

  return (
    <div className="page-content">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setSelected(item)}
          >
            <img
              src={
                item.type === 'video'
                  ? getThumbnail(item.src)
                  : item.src
              }
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
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

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
              <div
                className="card-title"
                style={{ padding: 0, marginBottom: 6 }}
              >
                {selected.title}
              </div>

              <p
                style={{
                  padding: 0,
                  marginBottom: 8,
                  opacity: 0.7,
                  fontSize: 16,
                }}
              >
                {selected.date}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                }}
              >
                {selected.tags.map((t) => (
                  <span className="tag" key={t}>
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