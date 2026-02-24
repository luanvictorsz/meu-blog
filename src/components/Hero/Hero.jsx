import Meta from "../ui/Meta";

export default function Hero({ onCopyEmail }) {
  return (
    <section className="hero">
      <div className="heroLeft">
        <h1 className="title">
          FORJANDO <span className="glow">SISTEMAS</span> E <span className="glow">MUNDOS</span>.
        </h1>
        <p className="lead">
          Desenvolvedor <b>C#</b> e <b>Angular</b>, com foco em <b>GameDev</b> (Unity/Godot/GameMaker). Interfaces
          sólidas, APIs previsíveis e gameplay responsivo.
        </p>

        <div className="ctaRow">
          <a className="btn primary" href="#projetos">
            Ver Projetos
          </a>
          <button className="btn ghost" onClick={onCopyEmail}>
            Copiar Email
          </button>
          <a className="btn ghost" href="#contato">
            Contato
          </a>
        </div>

        <div className="metaRow">
          <Meta label="Stack" value="C# • Angular • Unity • Godot • GameMaker" />
          <Meta label="Foco" value="Produto • UI/UX • Game Systems" />
          <Meta label="Local" value="Brasil (Remoto/Presencial)" />
        </div>
      </div>

      <div className="heroRight">
        <div className="card altar">
          <div className="altarTop">
            <div className="chip">AETERNUS • PORTFOLIO</div>
            <div className="chip dim">v1.0</div>
          </div>

          <div className="runes" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="altarBody">
            <div className="stat">
              <div className="k">FRONTEND</div>
              <div className="v">Angular • Forms • UI</div>
            </div>
            <div className="stat">
              <div className="k">BACKEND</div>
              <div className="v">C# • REST • SQL</div>
            </div>
            <div className="stat">
              <div className="k">GAMEDEV</div>
              <div className="v">Unity • Godot • GameMaker</div>
            </div>
          </div>

          <div className="altarFoot">
            <a className="inline" href="#contato">
              "Deixe um rastro." →
            </a>
          </div>
        </div>

        <div className="card small">
          <div className="smallTitle">Diferenciais</div>
          <ul className="list">
            <li>Arquitetura clara e refatoração com propósito</li>
            <li>UI consistente: validação, estados e componentes</li>
            <li>Game feel: input, feedback e ritmo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}