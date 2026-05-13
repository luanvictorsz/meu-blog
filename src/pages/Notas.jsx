import marcaPagina from "../assets/images/notas/marcaPaginas.jpg"

export const notes = [
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
    text: 'imprimi um marca paginas de gatinho.',
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