import marcaPagina from "../assets/images/notas/marcaPaginas.jpg";
import grogu from "../assets/images/notas/grogu.jpg";

export const notes = [
  {
    date: "24 de maio 2026",
    text: "imprimir cortadores com temática de halloween e fiz alguns biscoitos, ficaram mt bons (preciso lembrar de subir as fotos aqui)"
  },
  {
    date: "23 de maio 2026",
    text: "fix a pintura da espada da minha namorada e de alguns outros modelos em 3D que eu havia feito"
  },
  {
    date: "16 maio 2026",
    text: "fiz um charmander e um Grogu (Bebe Yoda), o charmander vai ser pintado amanhã, meu irmão pintou o grogu hj",
    image: grogu,
  },
  {
    date: "16 maio 2026",
    text: "entreguei uma das encomendas em 3D para uma cliente, canetinhas acrilicas chegaram e os projetos estão mais bonitinhos",
  },
  {
    date: "15 maio 2026",
    text: "comprei um nintendo switch lite desbloqueado... foi o impulso, não me arrependo",
  },
  {
    date: "13 maio 2026",
    text: "Peguei meu notebook na assistencia técnica, ele estava com o teclado zoado.",
  },
  {
    date: "13 maio 2026",
    text: 'Desenvolvi o "SearchPeople (SP)" no trabalho, ele consegue encontrar dados de pessoas com cadastro ativo do Cadúnico.',
  },
  {
    date: "12 maio 2026",
    text: "Fiz o design no estilo marionete com Photoshop e After Effects.",
  },
  {
    date: "12 maio 2026",
    text: "comecei esse site inspirado em colagem e sites antigos",
  },
  {
    date: "11 maio 2026",
    text: "imprimi um marca paginas de gatinho usando a impressora 3D.",
    image: marcaPagina,
  },
  {
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