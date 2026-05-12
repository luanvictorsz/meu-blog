import './index.css'
import aeternus from "./assets/images/aeternus.png"
const newsItems = [
  {
    date: '12 maio 2026',
    text: 'comecei esse site inspirado em colagem e sites antigos ★',
  },
  {
    date: '07 maio 2026',
    text: 'desenhei novos personagens pro meu jogo lowpoly azul.',
  },
  {
    date: '01 maio 2026',
    text: 'organizei minhas texturas, scans e imagens antigas.',
  },
]

function App() {
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
          <a href="#">projetos</a>
          <a href="#">Notas</a>
          <a href="#">Galeria</a>
        </nav>

        <div className="grid">
          <div className="card">
            <div className="card-title">Bem vindo!!</div>
            <p>
              esse é meu diário digital, vou usar esse "blog" para registrar minhas
              criações, ideias ou qualquer coisa que eu achar interessante.
            </p>
          </div>

          <div className="card">
            <div className="card-title">Notas</div>
            <div className="news">
              {newsItems.map((item, i) => (
                <div className="news-item" key={i}>
                  <h3>{item.date}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer">all rights reserved © 2026</div>
    </div>
  )
}

export default App
