import { useState } from 'react'
import './index.css'
import aeternus from './assets/images/aeternus.png'
import Home from './pages/Home.jsx'
import Notas from './pages/Notas.jsx'
import Projetos from './pages/Projetos.jsx'
import Galeria from './pages/Galeria.jsx'

const pages = ['home', 'projetos', 'galeria']
const labels = { home: 'início', projetos: 'projetos', galeria: 'galeria'}

function App() {
  const [page, setPage] = useState('home')

  const titles = {
    home: null,
    projetos: 'Projetos',
    notas: 'Notas',
    galeria: 'Galeria',
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
                setPage(p)
              }}
            >
              {labels[p]}
            </a>
          ))}
        </nav>

        {titles[page] && <div className="page-title">{titles[page]}</div>}

        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'projetos' && <Projetos />}
        {page === 'notas' && <Notas />} 
        {page === 'galeria' && <Galeria />}
      </div>

      <div className="footer">all rights reserved © 2026</div>
    </div>
  )
}

export default App
