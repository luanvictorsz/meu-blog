import { notes } from './Notas.jsx'

function Home({ onNavigate }) {
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
        <div className="card-title">
          Notas
        </div>

        <div className="news">
          {notes.map((item) => (
            <div className="news-item" key={item.id}>
              <h3>{item.date}</h3>

              {item.image && (
                <img
                  src={item.image}
                  alt={item.text}
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
              )}

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home