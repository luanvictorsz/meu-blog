import { useState } from 'react'

const initialNotes = [
  { id: 1, date: '12 maio 2026', text: 'Fiz o design no estilo marionete com Photoshop e After Effects.' },
  { id: 2, date: '12 maio 2026', text: 'comecei esse site inspirado em colagem e sites antigos' },
  { id: 3, date: '08 maio 2026', text: 'organizei minhas texturas, projetos e imagens antigas.' },
]

function Home({ onNavigate }) {
  const [notes] = useState(initialNotes)

  return (
    <div className="grid">
      <div className="card">
        <div className="card-title">Bem vindo!!</div>
        <p>
          esse é meu diário digital, vou usar esse "blog" para registrar minhas
          criações, ideias ou qualquer coisa que eu achar interessante.
        </p>
      </div>

      <div className="card">
        <div
          className="card-title"
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          onClick={() => onNavigate('notas')}
        >
          <span>Notas</span>
          <span style={{ fontSize: 'clamp(14px,2vw,18px)', opacity: 0.6 }}>ver todas →</span>
        </div>
        <div className="news">
          {notes.slice(0, 3).map((item) => (
            <div className="news-item" key={item.id}>
              <h3>{item.date}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
