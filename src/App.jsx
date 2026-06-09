import './index.css'
import { useState } from 'react'
import aeternus from './assets/images/aeternus.png'
import Home from './components/pages/Home.jsx'
import Notas from './components/pages/Notas.jsx'
import Projetos from './components/pages/Projetos.jsx'
import Galeria from './components/pages/Galeria.jsx'
import Jogos from './components/pages/Jogos.jsx'

const pages = ['home', 'projetos', 'galeria', 'jogos']
const labels = { home: 'início', projetos: 'projetos', galeria: 'galeria', jogos: 'jogos' }

function WinWindow({ icon = '✦', title, children, className = '', style = {} }) {
  return (
    <div className={`win-window ${className}`} style={style}>
      <div className="win-titlebar">
        <span className="win-titlebar-icon">{icon}</span>
        <span className="win-titlebar-title">{title}</span>
        <div className="win-titlebar-btns">
          <span className="win-btn">_</span>
          <span className="win-btn">□</span>
          <span className="win-btn win-btn-close">✕</span>
        </div>
      </div>
      <div className="win-body">
        {children}
      </div>
      <div className="win-statusbar">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
    </div>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [menuAberto, setMenuAberto] = useState(false)

  const pageTitles = {
    home: '⌂ home',
    projetos: '◈ projetos',
    galeria: '✧ galeria',
    jogos: '★ jogos',
  }

  const navegarPara = (p) => {
    setPage(p)
    setMenuAberto(false)
  }

  return (
    <div className="desktop">
      <div className="desktop-header">
        <div className="logo-area">
          <img
            src={aeternus}
            alt="logo"
            className="site-logo"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML =
                '<div class="logo-placeholder">★ Aeternus Poison ★</div>'
            }}
          />
        </div>
      </div>

      <div className="desktop-layout">
        <div className="sidebar">
          <WinWindow icon="✦" title="navegação">
            <nav className="win-nav">
              {pages.map((p) => (
                <a
                  key={p}
                  href="#"
                  className={`win-nav-item${page === p ? ' active' : ''}`}
                  onClick={(e) => { e.preventDefault(); navegarPara(p) }}
                >
                  {labels[p]}
                </a>
              ))}
            </nav>
          </WinWindow>

          <WinWindow icon="♠" title="sobre">
            <div className="win-about">
              <p><strong>host:</strong> aeternus</p>
              <p><strong>stuff:</strong> neocitie</p>
              <p><strong>status:</strong> ativa ✦</p>
            </div>
          </WinWindow>

          <WinWindow icon="✉" title="contato">
            <div className="win-about">
              <p><strong>discord:</strong><br/> @nickname.v</p>
              <p><strong>instagram:</strong> @aeternuspoison</p>
            </div>
          </WinWindow>
        </div>

        <div className="main-area">
          <WinWindow icon="✦" title={pageTitles[page]} className="main-window">
            {page === 'home' && <Home onNavigate={navegarPara} />}
            {page === 'projetos' && <Projetos />}
            {page === 'notas' && <Notas />}
            {page === 'galeria' && <Galeria />}
            {page === 'jogos' && <Jogos />}
          </WinWindow>
        </div>
      </div>

      <div className="desktop-taskbar">
        <div className="taskbar-left">
          <button className="taskbar-start">
            ✦ início
          </button>
          {pages.map((p) => (
            <button
              key={p}
              className={`taskbar-item${page === p ? ' active' : ''}`}
              onClick={() => navegarPara(p)}
            >
              {labels[p]}
            </button>
          ))}
        </div>
        <div className="taskbar-right">
          <span className="taskbar-clock">all rights reserved © 2026</span>
        </div>
      </div>
    </div>
  )
}

export default App