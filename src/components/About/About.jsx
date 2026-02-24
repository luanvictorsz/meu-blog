import Timeline from "../ui/Timeline";
import { timeline } from "../../data/portfolio";

export default function About() {
  return (
    <section id="sobre" className="grid2">
      <div className="card">
        <h2 className="h2">Sobre</h2>
        <p className="p">
          Trabalho com aplicações web (Angular + C#) e desenvolvimento de jogos (Unity/Godot/GameMaker). Busco código
          previsível, componentes reutilizáveis e pipelines simples.
        </p>
        <p className="p dim">Ajuste este texto para: anos de experiência, empresas, nicho e foco atual.</p>
        <div className="pillRow">
          <span className="pill">C#</span>
          <span className="pill">Angular</span>
          <span className="pill">SQL</span>
          <span className="pill">Unity</span>
          <span className="pill">Godot</span>
          <span className="pill">GameMaker</span>
        </div>
      </div>

      <div className="card">
        <h2 className="h2">Experiência</h2>
        <Timeline items={timeline} />
      </div>
    </section>
  );
}