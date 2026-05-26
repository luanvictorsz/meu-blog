import { useState } from 'react'
import './Jogos.css'

const jogos = [
  {
    titulo: 'Eastward',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/977880/header.jpg',
    platinado: true,
  },
  {
    titulo: 'FNaF: Into the Pit',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2638370/header.jpg',
    platinado: true,
  },
  {
    titulo: 'Junji Ito Maniac: An Infinite Gaol',
    imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3633250/header.jpg',
    platinado: true,
  },
  {
    titulo: 'It Takes Two',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg',
    platinado: true,
  },
  {
    titulo: 'My Little Puppy',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2102040/header.jpg',
    platinado: true,
  },
  {
    titulo: 'STEINS;GATE',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/412830/header.jpg',
    platinado: true,
  },
  {
    titulo: 'Little Misfortune',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg',
    platinado: true,
  },
  {
    titulo: 'FNaF: Secret of the Mimic',
    imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215390/header.jpg',
    platinado: true,
  },
  // jogados mas não platinados — mude platinado: false
  {
    titulo: 'Hollow Knight',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
    platinado: false,
  },
  {
    titulo: 'Hades',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg',
    platinado: false,
  },
]

const IconeEstrelaPrata = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <polygon
      points="16,2 19.5,11.5 30,11.5 21.5,17.5 24.5,28 16,22 7.5,28 10.5,17.5 2,11.5 12.5,11.5"
      fill="#c0c0c0"
      stroke="#888"
      strokeWidth="1"
    />
  </svg>
)

const IconeJogado = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <circle cx="16" cy="16" r="13" fill="#7a4020" stroke="#5c2a10" strokeWidth="1.5" />
    <path d="M11 10 h3 v5 h4 v-5 h3 v12 h-3 v-5 h-4 v5 h-3z" fill="#c49060" />
  </svg>
)

function PlátinaCard({ jogo }) {
  return (
    <div className="platina-card">
      <div className="platina-imagem-wrapper">
        <img
          src={jogo.imagem}
          alt={jogo.titulo}
          className="platina-imagem"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="platina-overlay" />
        <div className="platina-estrela">
          {jogo.platinado ? <IconeEstrelaPrata /> : <IconeJogado />}
        </div>
      </div>
      <div className="platina-corpo">
        <h3 className="platina-titulo">{jogo.titulo}</h3>
      </div>
    </div>
  )
}

export default function Jogos() {
  const [aba, setAba] = useState('platinados')

  const platinados = jogos.filter((j) => j.platinado)
  const jogados    = jogos.filter((j) => !j.platinado)
  const lista      = aba === 'platinados' ? platinados : jogados

  return (
    <div className="platinas-page">
      <div className="platinas-abas">
        <button
          className={`platinas-aba${aba === 'platinados' ? ' ativa' : ''}`}
          onClick={() => setAba('platinados')}
        >
          ✦ platinados ({platinados.length})
        </button>
        <button
          className={`platinas-aba${aba === 'jogados' ? ' ativa' : ''}`}
          onClick={() => setAba('jogados')}
        >
          ◈ jogados ({jogados.length})
        </button>
      </div>

      {lista.length === 0 ? (
        <p className="platinas-vazio">nenhum jogo aqui ainda...</p>
      ) : (
        <div className="platinas-grid">
          {lista.map((jogo) => (
            <PlátinaCard key={jogo.titulo} jogo={jogo} />
          ))}
        </div>
      )}
    </div>
  )
}