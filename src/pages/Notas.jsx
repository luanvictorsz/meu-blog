import { useState } from 'react'

const initialNotes = [
  {
    id: 1,
    date: '12 maio 2026',
    text: 'Fiz o design no estilo marionete com Photoshop e After Effects.',
  },
  {
    id: 2,
    date: '12 maio 2026',
    text: 'comecei esse site inspirado em colagem e sites antigos',
  },
  {
    id: 3,
    date: '08 maio 2026',
    text: 'organizei minhas texturas, projetos e imagens antigas.',
  },
]

function Notas() {
  const [notes, setNotes] = useState(initialNotes)
  const [text, setText] = useState('')
  const [editing, setEditing] = useState(null)

  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  function addNote() {
    if (!text.trim()) return
    setNotes([{ id: Date.now(), date: today, text }, ...notes])
    setText('')
  }

  function deleteNote(id) {
    setNotes(notes.filter((n) => n.id !== id))
  }

  function saveEdit(id) {
    setNotes(notes.map((n) => (n.id === id ? { ...n, text: editing.text } : n)))
    setEditing(null)
  }

  return (
    <div className="page-content">
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="card-title">✏️ Nova Nota</div>
        <div style={{ padding: '0 16px 16px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <textarea
            className="note-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="escreva algo..."
            rows={3}
          />
          <button className="btn-add" onClick={addNote}>
            + adicionar
          </button>
        </div>
      </div>

      <div className="news">
        {notes.map((note) => (
          <div className="news-item" key={note.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>{note.date}</h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  className="btn-icon"
                  onClick={() => setEditing({ id: note.id, text: note.text })}
                >
                  ✏️
                </button>
                <button className="btn-icon btn-delete" onClick={() => deleteNote(note.id)}>
                  🗑️
                </button>
              </div>
            </div>

            {editing?.id === note.id ? (
              <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
                <textarea
                  className="note-input"
                  value={editing.text}
                  onChange={(e) => setEditing({ ...editing, text: e.target.value })}
                  rows={3}
                />
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn-add" onClick={() => saveEdit(note.id)}>
                    salvar
                  </button>
                  <button className="btn-cancel" onClick={() => setEditing(null)}>
                    cancelar
                  </button>
                </div>
              </div>
            ) : (
              <p>{note.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notas
