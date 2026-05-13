const notes = [
  { id: 1, date: '12 maio 2026', text: 'Fiz o design no estilo marionete com Photoshop e After Effects.' },
  { id: 2, date: '12 maio 2026', text: 'comecei esse site inspirado em colagem e sites antigos' },
  { id: 3, date: '08 maio 2026', text: 'organizei minhas texturas, projetos e imagens antigas.' },
]

function Notas() {
  return (
    <div className="page-content">
      <div className="news">
        {notes.map((note) => (
          <div className="news-item" key={note.id}>
            <h3>{note.date}</h3>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notas
