import { useState } from "react";
import PrimeiroVideo from "../../assets/images/notas/PrimeiroVideo.png";

export const notes = [
  {
    date: "18 de julho 2026",
    text: "estou sozinho em casa desde o dia 9, minha mãe e irmão estão de ferias, tem sido uma semana bem conturbada mas está sendo divertido estar sozinho, um dos pontos positivos é que a casa está arrumada, posso tomar meu vinho em paz e escutar Sade em som alto, aproveitei e lavei as roupas hoje, fui ao shopping e encontrei filamentos de ótima qualidade."
  },
  {
    date: "11 de julho 2026",
    text: "terminei com a garota ontem e hj ela postou status flertando com alguém, parece que é algo de tempos então a minha suspeita não estava tão errada... bem, é irrelevante, hoje foi um dia divertido, fui ver o pessoal da Melts e fui em um evento de jogos retro com um amigo"
  },
  {
    date: "05 de julho 2026",
    text: "ahooy, zerei o primeiro resident evil usando a Jill, mas eu tenho que ver se surge a coragem na platina..."
  },
  {
    date: "04 de julho 2026",
    text: "recebi o salario então lançei o bundle de resident evil e os de far cry"
  },
  {
    date: "03 de julho 2026",
    text: "reorganizei a vida, vou aproveitar e quitar algumas dívidas, e só comprar novos jogos na steam (chega de novos portateis por enquanto)...",
  },
  {
    date: "30 de junho 2026",
    text: "fiz uma nova encomenda, dessa vez de um funko artesal da Sakura, estou feliz com o resultado",
  },
  {
    date: "27 de junho 2026",
    text: "voltei ao desenvolvimento de jogos, tive um progresso incrivel e fiz amizade com uma garota do egito chamada Menna, ela me conta muitas curiosidades sobre Cairo"
  },
  {
    image: PrimeiroVideo,
    date: "24 de junho 2026",
    text: "zerei pragmata e iniciei um canal no youtube, logo no primeiro dia bateu 3 mil view em shorts,logo posto imagem para relembrar"
  },
  { date: "20 de junho 2026", text: "zerei mario Odissey" },
  { date: "14 de junho 2026", text: "zerei Kirby and the forgotten land" },
  {
    date: "08 de junho 2026",
    text: "fiz algumas encomendas para entrega, preciso me organizar melhor para conseguir entregar mais rápido, mas estou feliz com o resultado",
  },
  {
    date: "06 de junho 2026",
    text: "fiz duas novas impressões e cortei o cabelo, vou começar a publicar as impressoes aqui no site"
  },
  { date: "29 de maio 2026", text: "organizei alguns links do meu notion, mt coisa legal" },
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
];

function Notas() {
  const [busca, setBusca] = useState("");

  const notasFiltradas = notes.filter((note) => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return true;
    return (
      note.text.toLowerCase().includes(termo) ||
      note.date.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="page-content">
      <div className="news-search">
        <input
          type="text"
          placeholder="buscar palavra..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="news-search-input"
        />
        {busca && (
          <button className="news-search-clear" onClick={() => setBusca("")}>
            ✕
          </button>
        )}
      </div>

      <div className="news">
        {notasFiltradas.length === 0 && (
          <p className="news-empty">nenhuma nota encontrada</p>
        )}

        {notasFiltradas.map((note, i) => (
          <div className="news-item" key={note.date + i}>
            <h3>{note.date}</h3>

            {note.image && (
              <img src={note.image} alt={note.text} className="news-image" />
            )}

            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notas;