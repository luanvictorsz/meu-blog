import { useState } from 'react'
import '../styles/Jogos.css'

// Lista completa de jogos com imagens LOCAIS
const jogos = [
  // ── PLATINADOS (jogos da Steam, imagens via CDN funcionam) ─────
  { titulo: "Marvel's Spider-Man: Miles Morales", imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1817190/header.jpg', platinado: true },
  { titulo: 'Resident Evil Requiem', imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1779840172', platinado: true},
  { titulo: 'Eastward', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/977880/header.jpg', platinado: true },
  { titulo: 'FNaF: Into the Pit', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2638370/header.jpg', platinado: true },
  { titulo: 'Junji Ito Maniac: An Infinite Gaol', imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3633250/9a59ab7e423e3cf3cf47972cefb488660642acc3/capsule_616x353.jpg?t=1762998552', platinado: true},
  { titulo: 'It Takes Two', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg', platinado: true },
  { titulo: 'My Little Puppy', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2102040/header.jpg', platinado: true },
  { titulo: 'STEINS;GATE', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/412830/header.jpg', platinado: true },
  { titulo: 'Little Misfortune', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg', platinado: true },
  { titulo: 'Trailmakers', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/585420/header.jpg', platinado: true },
  { titulo: 'PEAK', imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3527290/c6791f0f1b7b29f6304e283ac7a2cabc27c7eb0d/capsule_616x353.jpg?t=1775581133', platinado: true },
  { titulo: 'Lucius', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/218640/header.jpg', platinado: true },
  { titulo: 'FNaF: Secret of the Mimic', imagem: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/c/cf/SecretoftheMimic_PSIcon2.jpg/revision/latest/scale-to-width-down/1000?cb=20250213015424', platinado: true },
  { titulo: 'Rogue Heroes: Ruins of Tasos', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/787810/header.jpg', platinado: true },
  { titulo: 'Road Defense: Outsiders', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1973320/header.jpg', platinado: true },
  { titulo: 'Bad Cheese', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/3094480/header.jpg', platinado: true },
  { titulo: 'Before Your Eyes', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1082430/header.jpg', platinado: true },
  { titulo: 'Donut County', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/702670/header.jpg', platinado: true },
  { titulo: 'fault - milestone one', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/286260/header.jpg', platinado: true },
  { titulo: 'fault - milestone two side:above', imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/344770/capsule_616x353.jpg?t=1667230393', platinado: true },
  { titulo: 'fault - lightkravte', imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1917450/capsule_616x353.jpg?t=1667230149', platinado: true },
  { titulo: 'Fears to Fathom - Home Alone', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1671340/header.jpg', platinado: true },
  { titulo: 'Fears to Fathom - Norwood Hitchhike', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1763050/header.jpg', platinado: true },
  { titulo: 'Fears to Fathom - Carson House', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2120900/header.jpg', platinado: true },
  { titulo: 'Fears to Fathom - Ironbark Lookout', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2506160/header.jpg', platinado: true },
  { titulo: 'Fears to Fathom - Woodbury Getaway', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2961530/header.jpg', platinado: true },
  { titulo: 'To the Moon', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/206440/header.jpg', platinado: true },
  { titulo: 'Finding Paradise', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/337340/header.jpg', platinado: true },
  { titulo: 'Impostor Factory', imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1182620/capsule_616x353.jpg?t=1726196467', platinado: true },
  { titulo: 'Five Hearts Under One Roof', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/3021100/header.jpg', platinado: true },
  { titulo: 'Flowers Blooming at the End of Summer', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1173010/header.jpg', platinado: true },
  { titulo: 'Necrobarista', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/725270/header.jpg', platinado: true },
  { titulo: 'RoboCop: Rogue City', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1681430/header.jpg', platinado: true },
  { titulo: 'Mr. Saitou', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/628740/header.jpg', platinado: true },
  { titulo: 'The Last Campfire', imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/990630/header.jpg', platinado: true },
  { titulo: "Tiny Terry's Turbo Trip", imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2238040/header.jpg', platinado: true },
  
  // ── JOGADOS DA NINTENDO (IMAGENS LOCAIS) ───────────────────────

  { titulo: 'Kirby and the Forgotten Land', 
    imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch2/70010000096829/0a06bf277f1eb585fcbb7ddeb4f70014fd1c860d326eb33c8accf4d4827ade72', 
    platinado: false 
  },
  { 
    titulo: 'Mario Odyssey', 
    imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5', 
    platinado: false
  },
  { titulo: 'The Legend of Zelda: Breath of the Wild', 
    imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1200/store/software/switch2/70010000096817/cfe9f8d674be958326d3ba11fc7598a4383e5c5d7809b6239ccac0783aac6cd8', 
    platinado: false },
    
  { titulo: 'Mario Golf: Super Rush', 
    imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1200/store/software/switch/70010000038622/af5246b2f01dee8111a70bcb3f556e65a492801d6677d0ab0f17b566a7b0285b', 
    platinado: false },
    
  // ── OUTROS JOGOS NÃO PLATINADOS
  { titulo: 'a plague tale: innocence', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/752590/header.jpg', 
    platinado: false 
  },
  {
    titulo: "Resident evil",
    imagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4249100/c6a3c50a9fd16bb11cf5d1a3f551fa7edcab09ef/capsule_616x353.jpg",
    platinado: false
  },
  { titulo: 'Clair Obscur: Expedition 33', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1903340/header.jpg', 
    platinado: false },
    
  { titulo: 'R.E.P.O.', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/3241660/header.jpg', 
    platinado: false },
    
  { titulo: "Baldur's Gate 3", 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg', 
    platinado: false },
    
  { titulo: 'Halo: The Master Chief Collection', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/header.jpg', 
    platinado: false },
    
  { titulo: 'Conan Exiles', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/440900/header.jpg', 
    platinado: false },
    
  { titulo: 'Black Myth: Wukong', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg', 
    platinado: false },
    
  { titulo: 'Warhammer 40,000: Space Marine 2', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/2183900/header.jpg', 
    platinado: false },
    
  { titulo: 'Cyberpunk 2077', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg', 
    platinado: false },
    
  { titulo: 'ONE PIECE World Seeker', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/755500/header.jpg', 
    platinado: false },
    
  { titulo: 'We Happy Few', 
    imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/320240/header.jpg', 
    platinado: false },
]

// Ícones e componentes...
const IconeEstrelaPrata = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <polygon points="16,2 19.5,11.5 30,11.5 21.5,17.5 24.5,28 16,22 7.5,28 10.5,17.5 2,11.5 12.5,11.5" fill="#c0c0c0" stroke="#888" strokeWidth="1" />
  </svg>
)

const IconeJogado = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <circle cx="16" cy="16" r="13" fill="#7a4020" stroke="#5c2a10" strokeWidth="1.5" />
    <path d="M11 10 h3 v5 h4 v-5 h3 v12 h-3 v-5 h-4 v5 h-3z" fill="#c49060" />
  </svg>
)

function PlatinaCard({ jogo }) {
  const [imgError, setImgError] = useState(false)
  
  return (
    <div className="platina-card">
      <div className="platina-imagem-wrapper">
        <img
          src={jogo.imagem}
          alt={jogo.titulo}
          className="platina-imagem"
          onError={(e) => { 
            setImgError(true)
            e.target.style.display = 'none' 
          }}
        />
        {imgError && (
          <div className="platina-imagem-fallback">
            {jogo.titulo}
          </div>
        )}
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
            <PlatinaCard key={jogo.titulo} jogo={jogo} />
          ))}
        </div>
      )}
    </div>
  )
}