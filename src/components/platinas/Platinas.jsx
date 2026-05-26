import { useState } from 'react'

const platinas = [
  {
    titulo: 'Eastward',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/977880/header.jpg',
    descricao: 'Aventura pixel art sobre John e Sam num mundo pós-apocalíptico cheio de charme.',
  },
  {
    titulo: 'Into the Pit',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1422410/header.jpg',
    descricao: 'FPS roguelite retrô frenético num portal demoníaco cheio de magias sombrias.',
  },
  {
    titulo: 'Junji Ito Maniac: An Infinite Gaol',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/3633250/header.jpg',
    descricao: 'Horror em primeira pessoa inspirado nos pesadelos perturbadores de Junji Ito.',
  },
  {
    titulo: 'It Takes Two',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg',
    descricao: 'Aventura cooperativa onde dois bonecos precisam trabalhar juntos para se salvar.',
  },
  {
    titulo: 'My Little Puppy',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2102040/header.jpg',
    descricao: 'Uma história emocionante sobre um cachorrinho e a jornada de reencontro com seu dono.',
  },
  {
    titulo: "STEINS;GATE",
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/412830/header.jpg',
    descricao: 'Visual novel premiada sobre viagem no tempo, conspiração e escolhas irreversíveis.',
  },
  {
    titulo: 'Little Misfortune',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg',
    descricao: 'História interativa agridoce sobre Misfortune, uma menina em busca da felicidade eterna.',
  },
  {
    titulo: "FNaF: Secret of the Mimic",
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2215390/header.jpg',
    descricao: 'Explore o Costume Manor e sobreviva ao Mimic, um protótipo que imita qualquer coisa.',
  },
]

export default function Platinas() {
  const [selecionado, setSelecionado] = useState(null)

  return (
    <div className="platinas-page">
      <div className="platinas-contador">
        ✦ {platinas.length} platinas conquistadas ✦
      </div>

      <div className="platinas-grid">
        {platinas.map((jogo) => (
          <div
            key={jogo.titulo}
            className={`platina-card ${selecionado === jogo.titulo ? 'ativo' : ''}`}
            onClick={() => setSelecionado(selecionado === jogo.titulo ? null : jogo.titulo)}
          >
            <div className="platina-imagem-wrapper">
              <img
                src={jogo.imagem}
                alt={jogo.titulo}
                className="platina-imagem"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="platina-overlay" />
              <div className="platina-estrela">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                  <polygon
                    points="16,2 19.5,11.5 30,11.5 21.5,17.5 24.5,28 16,22 7.5,28 10.5,17.5 2,11.5 12.5,11.5"
                    fill="#c0c0c0"
                    stroke="#888"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>

            <div className="platina-corpo">
              <h3 className="platina-titulo">{jogo.titulo}</h3>
              {selecionado === jogo.titulo && (
                <p className="platina-descricao">{jogo.descricao}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}