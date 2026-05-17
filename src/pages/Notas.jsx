import marcaPagina from "../assets/images/notas/marcaPaginas.jpg"
import grogu from "../assets/images/notas/gorgu.jpg"

export const notes = [
  {
    date: '16 maio 2026',
    text: 'fiz um charmander e um Grogu (Bebe Yoda)',
    image: grogu
  },
  {
    date: '16 maio 2026',
    text: 'entreguei uma das encomendas em 3D para uma cliente, canetinhas acrilicas chegaram e os projetos estão mais boniotinhos'
  },
  {
    date: '15 maio 2026',
    text: 'comprei um nintendo switch lite desbloqueado... foi o impulso, não me arrependo'
  },
  {
    date: '13 maio 2026',
    text: 'Peguei meu notebook na assistencia técnica, ele estava com o teclado zoado.'
  },
  {
    date: '13 maio 2026',
    text: 'Desenvolvi o "SearchPeople (SP)" no trabalho, ele consegue encontrar dados de pessoas com cadastro ativo do Cadúnico.'
  },
  {
    date: '12 maio 2026',
    text: 'Fiz o design no estilo marionete com Photoshop e After Effects.'
  },
  {
    date: '12 maio 2026',
    text: 'comecei esse site inspirado em colagem e sites antigos'
  },
  {
    date: '11 maio 2026',
    text: 'imprimi um marca paginas de gatinho usando a impressora 3D.',
    image: marcaPagina
  },
  {
    date: '08 maio 2026',
    text: 'organizei minhas texturas, projetos e imagens antigas.'
  },
]

function Notas() {
  return (
    <div className="page-content">
      <div className="news">
        {notes.map((note) => (
          <div className="news-item">
            <h3>{note.date}</h3>

            {note.image && (
              <img
                src={note.image}
                alt={note.text}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '8px',
                  marginBottom: '10px'
                }}
              />
            )}

            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notas