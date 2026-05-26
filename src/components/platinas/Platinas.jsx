import './platinas.css'

const platinas = [
  {
    titulo: 'Eastward',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/977880/header.jpg',
  },
  {
    titulo: 'FNaF: Into the Pit',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2638370/header.jpg',
  },
  {
    titulo: 'Junji Ito Maniac: An Infinite Gaol',
    imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3633250/header.jpg',
  },
  {
    titulo: 'It Takes Two',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg',
  },
  {
    titulo: 'My Little Puppy',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2102040/header.jpg',
  },
  {
    titulo: 'STEINS;GATE',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/412830/header.jpg',
  },
  {
    titulo: 'Little Misfortune',
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg',
  },
  {
    titulo: 'FNaF: Secret of the Mimic',
    imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215390/header.jpg',
  },
]

export default function Platinas() {
  return (
    <div className="platinas-page">
      <div className="platinas-contador">
        ✦ {platinas.length} platinas conquistadas ✦
      </div>

      <div className="platinas-grid">
        {platinas.map((jogo) => (
          <div key={jogo.titulo} className="platina-card">
            <div className="platina-imagem-wrapper">
              <img
                src={jogo.imagem}
                alt={jogo.titulo}
                className="platina-imagem"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="platina-overlay" />
              <div className="platina-estrela">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}