import marcaPagina from "../assets/images/notas/marcaPaginas.jpg";
import grogu from "../assets/images/notas/grogu.jpg";

export const notes = [
  {
    id: 10,
    data: "24 de maio 2026",
    text: "imprimir cortadores com temática de halloween e fiz alguns biscoitos, ficaram mt bom (preciso lembrar de subir as fotos aqui)"
  },
  {
    id: 1,
    date: "16 maio 2026",
    text: "fiz um charmander e um Grogu (Bebe Yoda), o charmander vai ser pintado amanhã, meu irmão pintou o grogu hj",
    image: grogu,
  },
  {
    id: 2,
    date: "16 maio 2026",
    text: "entreguei uma das encomendas em 3D para uma cliente, canetinhas acrilicas chegaram e os projetos estão mais bonitinhos",
  },
  {
    id: 3,
    date: "15 maio 2026",
    text: "comprei um nintendo switch lite desbloqueado... foi o impulso, não me arrependo",
  },
  {
    id: 4,
    date: "13 maio 2026",
    text: "Peguei meu notebook na assistencia técnica, ele estava com o teclado zoado.",
  },
  {
    id: 5,
    date: "13 maio 2026",
    text: 'Desenvolvi o "SearchPeople (SP)" no trabalho, ele consegue encontrar dados de pessoas com cadastro ativo do Cadúnico.',
  },
  {
    id: 6,
    date: "12 maio 2026",
    text: "Fiz o design no estilo marionete com Photoshop e After Effects.",
  },
  {
    id: 7,
    date: "12 maio 2026",
    text: "comecei esse site inspirado em colagem e sites antigos",
  },
  {
    id: 8,
    date: "11 maio 2026",
    text: "imprimi um marca paginas de gatinho usando a impressora 3D.",
    image: marcaPagina,
  },
  {
    id: 9,
    date: "08 maio 2026",
    text: "organizei minhas texturas, projetos e imagens antigas.",
  },
];

function Notas() {
  return (
    <div className="page-content">
      <div className="news">
        {notes.map((note) => (
          <div className="news-item" key={note.id}>
            <h3>{note.date}</h3>

            {note.image && (
              <img
                src={note.image}
                alt={note.text}
                className="news-image"
              />
            )}

            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notas;