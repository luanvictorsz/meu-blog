import { useState } from 'react'
import aeternus from '../assets/images/projects/marionet_1.gif'

const items = [
  {
    id: 1,
    src: aeternus,
    title: 'marionete_poison_1205.gif',
    date: 'maio 2026',
    tags: ['creepy', 'design'],
  },
]

function Galeria() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="page-content">
      {items.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: 40 }}>
          <p>nenhuma imagem ainda... em breve! 🎨</p>
        </div>
      ) : (
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
              <img src={item.src} alt={item.title} />
              <div className="gallery-caption">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelected(null)}>
              ✕
            </button>
            <img src={selected.src} alt={selected.title} />
            <div style={{ padding: '12px 16px' }}>
              <div className="card-title" style={{ padding: 0, marginBottom: 6 }}>
                {selected.title}
              </div>
              <p style={{ padding: 0, marginBottom: 8, opacity: 0.7, fontSize: 16 }}>
                {selected.date}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {selected.tags.map((t) => (
                  <span className="tag" key={t}>
                    #{t}
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
