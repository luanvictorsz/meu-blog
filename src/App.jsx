import './index.css'
import { useState } from 'react'
import aeternus from './assets/images/aeternus.png'
import Home from './pages/Home.jsx'
import Notas from './pages/Notas.jsx'
import Projetos from './pages/Projetos.jsx'
import Galeria from './pages/Galeria.jsx'
import Jogos from './components/platinas/Jogos.jsx'

const pages = ['home', 'projetos', 'galeria', 'jogos']
const labels = { home: 'início', projetos: 'projetos', galeria: 'galeria', jogos: 'jogos' }

function App() {
  const [page, setPage] = useState('home')
  const [menuAberto, setMenuAberto] = useState(false)

  const titles = {
    home: null,
    projetos: 'Projetos',
    notas: 'Notas',
    galeria: 'Galeria',
    jogos: 'Jogos',
  }

  const navegarPara = (p) => {
    setPage(p)
    setMenuAberto(false)
  }

  return (
    <div className="page">
      <div className="logo">
        <img
          src={aeternus}
          alt="logo"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML =
              '<div class="logo-placeholder">★ Aeternus Poison ★</div>'
          }}
        />
      </div>

      <div className="board">
        <nav className="menu">
          {pages.map((p) => (
            <a
              key={p}
              href="#"
              className={page === p ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                navegarPara(p)
              }}
            >
              {labels[p]}
            </a>
          ))}
        </nav>

        <button
          className={`hamburger ${menuAberto ? 'aberto' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        {menuAberto && (
          <nav className="menu-mobile">
            {pages.map((p) => (
              <a
                key={p}
                href="#"
                className={page === p ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  navegarPara(p)
                }}
              >
                {labels[p]}
              </a>
            ))}
          </nav>
        )}

        {titles[page] && <div className="page-title">{titles[page]}</div>}

        {page === 'home' && <Home onNavigate={navegarPara} />}
        {page === 'projetos' && <Projetos />}
        {page === 'notas' && <Notas />}
        {page === 'galeria' && <Galeria />}
        {page === 'jogos' && <Jogos />}
      </div>

      <div className="footer">all rights reserved © 2026</div>
    </div>
  )
}

export default App