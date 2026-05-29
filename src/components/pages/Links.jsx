export const links = [
  {
    id: 1,
    name: 'Synthhive',
    description: 'Meu Estudio AudioVisual',
    url: 'https://synthhive.vercel.app/',
    icon: '🎵',
  },
  {
    id: 2,
    name: 'Artstation',
    description: 'Portfólio de arte e projetos',
    url: 'https://a3ternus.artstation.com/albums/14141836',
    icon: '🎨',
  },
  {
    id: 3,
    name: 'Sketchfab',
    description: 'Modelos 3D interativos',
    url: 'https://sketchfab.com/a3ternus',
    icon: '📦',
  },
  {
    id: 4,
    name: 'Itch.io',
    description: 'Jogos publicados',
    url: 'https://a3ternus.itch.io/',
    icon: '🎮',
  },
  {
    id: 5,
    name: 'YouTube',
    description: 'Eu posto algo aqui',
    url: 'https://www.youtube.com/@AeternusPoison',
    icon: '📺',
  },
]

function Links({ onNavigate }) {
  return (
    <div className="grid">
      <div className="card">
        <div className="card-title">Meus Links</div>

        <div className="news">
          {links.map((link) => (
            <div className="news-item" key={link.id}>
              <h3>
                {link.icon} {link.name}
              </h3>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Links