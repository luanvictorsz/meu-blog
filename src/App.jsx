import { useMemo, useState, useEffect } from "react";

export default function App() {
  const year = new Date().getFullYear();

  const projects = useMemo(
    () => [
      {
        title: "Aeternus — Painel de Gestão (Angular)",
        tag: "Web App",
        stack: ["Angular", "TypeScript", "Forms", "Componentização"],
        desc: "Painel com telas ricas, validações, estados previsíveis e foco em UX.",
        links: { demo: "#", repo: "#" },
      },
      {
        title: "Aeternus — API de Operações (C#)",
        tag: "Backend",
        stack: ["C#", "ASP.NET", "REST", "SQL"],
        desc: "API previsível com autenticação, camadas bem definidas e integração com banco.",
        links: { demo: "#", repo: "#" },
      },
      {
        title: "Aeternus — Jogo 2D (GameMaker)",
        tag: "Game",
        stack: ["GameMaker", "State Machine", "UI/HUD", "Input"],
        desc: "Protótipo 2D com troca de personagens, interação contextual e gameplay responsivo.",
        links: { demo: "#", repo: "#" },
      },
      {
        title: "Aeternus — Protótipos e Sistemas (Unity)",
        tag: "Game",
        stack: ["Unity", "C#", "Scenes/States", "UI"],
        desc: "Sistemas de jogo e protótipos: controle, feedback, menus e fluxo de cena.",
        links: { demo: "#", repo: "#" },
      },
      {
        title: "Aeternus — Protótipos 2D (Godot)",
        tag: "Game",
        stack: ["Godot", "2D", "Input", "UI"],
        desc: "Protótipos 2D com foco em game feel, estados e iteração rápida.",
        links: { demo: "#", repo: "#" },
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      { group: "Frontend", items: ["Angular", "TypeScript", "Componentização", "Forms", "Observabilidade", ""] },
      { group: "Backend", items: ["C#", "ASP.NET", "REST", "SQL", "Arquitetura em camadas", ".NET Framework", "NuGet"] },
      { group: "GameDev", items: ["Unity", "Godot", "GameMaker", "State Machine", "UI/HUD"] },
    ],
    []
  );

  const [toast, setToast] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setToast("Copiado para a área de transferência.");
      window.setTimeout(() => setToast(""), 1800);
    } catch {
      setToast("Não foi possível copiar.");
      window.setTimeout(() => setToast(""), 1800);
    }
  }

  useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="bm">
      <Noise />

      <header className="top">
        <div className="brand">
          <span className="sigil" aria-hidden="true" />
          <div className="brandText">
            <div className="name">AETERNUS</div>
            <div className="role">C# • Angular • GameDev</div>
          </div>
        </div>

        <nav className="nav desktop">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <button
          className="burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawerPanel" role="dialog" aria-label="Menu">
          <div className="drawerHead">
            <div className="drawerTitle">NAVEGAÇÃO</div>
            <button className="btn ghost smallBtn" onClick={() => setMenuOpen(false)}>
              Fechar
            </button>
          </div>

          <div className="drawerLinks">
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="drawerActions">
            <button className="btn primary" onClick={() => copy("luanvitorlima2017@gmail.com")}>
              Copiar Email
            </button>
            <a className="btn ghost" href="#projetos">
              Ver Projetos
            </a>
          </div>
        </div>
        <div className="drawerBackdrop" onClick={() => setMenuOpen(false)} />
      </div>

      <main className="wrap">
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
              <button className="btn ghost" onClick={() => copy("luanvitorlima2017@gmail.com")}>
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
                  “Deixe um rastro.” →
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

        <Divider />

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
            <Timeline
              items={[
                { time: "2025 — Atual", title: "Dev (Angular/C#)", desc: "Telas complexas, validações, APIs e evolução do produto." },
                { time: "2024 — 2025", title: "Projetos GameDev", desc: "Protótipos 2D, arquitetura por estados, UI/HUD e input." },
                { time: "2023 — 2024", title: "Freelas/Estudos", desc: "Apps e protótipos focando em base sólida e iteração." },
              ]}
            />
          </div>
        </section>

        <Divider />

        <section id="habilidades" className="card">
          <div className="sectionHead">
            <h2 className="h2">Habilidades</h2>
            <p className="p dim">Organizadas por domínio.</p>
          </div>

          <div className="skills">
            {skills.map((s) => (
              <div className="skillBox" key={s.group}>
                <div className="skillTitle">{s.group}</div>
                <div className="tags">
                  {s.items.map((x) => (
                    <span className="tag" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section id="projetos" className="card">
          <div className="sectionHead">
            <h2 className="h2">Projetos</h2>
            <p className="p dim">Troque por links reais e resultados.</p>
          </div>

          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="projectTop">
                  <div className="projTitleWrap">
                    <div className="projectTitle">{p.title}</div>
                    <div className="badge">{p.tag}</div>
                  </div>
                  <div className="projLinks">
                    <a className="link" href={p.links.demo}>
                      Demo
                    </a>
                    <a className="link" href={p.links.repo}>
                      Repo
                    </a>
                  </div>
                </div>

                <p className="p">{p.desc}</p>

                <div className="tags">
                  {p.stack.map((x) => (
                    <span className="tag" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        <section id="contato" className="grid2">
          <div className="card">
            <h2 className="h2">Contato</h2>
            <p className="p">Preferência: mensagem direta com contexto (vaga/projeto), stack e prazo.</p>

            <div className="contact">
              <button className="contactRow" onClick={() => copy("luanvitorlima2017@gmail.com")}>
                <span className="contactKey">Email</span>
                <span className="contactVal">luanvitorlima2017@gmail.com</span>
                <span className="contactHint">copiar</span>
              </button>

              <a className="contactRow" href="https://github.com/luanvictorsz" target="_blank" rel="noreferrer">
                <span className="contactKey">GitHub</span>
                <span className="contactVal">github.com/luanvictorsz</span>
                <span className="contactHint">abrir</span>
              </a>

              <a className="contactRow" href="https://www.linkedin.com/in/luanvictorsz/" target="_blank" rel="noreferrer">
                <span className="contactKey">LinkedIn</span>
                <span className="contactVal">linkedin.com/in/luanvictorsz</span>
                <span className="contactHint">abrir</span>
              </a>
            </div>
          </div>

          <div className="card">
            <h2 className="h2">Disponibilidade</h2>
            <div className="availability">
              <div className="availItem">
                <div className="k">Modelo</div>
                <div className="v">CLT • PJ • Freela</div>
              </div>
              <div className="availItem">
                <div className="k">Modalidade</div>
                <div className="v">Remoto • Híbrido</div>
              </div>
              <div className="availItem">
                <div className="k">Interesses</div>
                <div className="v">Produtos • Jogos • Ferramentas internas</div>
              </div>
            </div>

            <div className="seal" aria-hidden="true">
              <div className="sealInner" />
            </div>
          </div>
        </section>

        <footer className="foot">
          <span>© {year} AETERNUS</span>
          <span className="dim">Forjado em React • Tema Black Metal</span>
        </footer>
      </main>

      {toast ? <div className="toast">{toast}</div> : null}

      <style>{css}</style>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="meta">
      <div className="metaK">{label}</div>
      <div className="metaV">{value}</div>
    </div>
  );
}

function Divider() {
  return (
    <div className="divider" role="separator" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it) => (
        <div className="tlItem" key={it.time + it.title}>
          <div className="dot" />
          <div className="tlBody">
            <div className="tlTop">
              <div className="tlTitle">{it.title}</div>
              <div className="tlTime">{it.time}</div>
            </div>
            <div className="tlDesc">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Noise() {
  return (
    <div className="noise" aria-hidden="true">
      <svg width="0" height="0">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
    </div>
  );
}

const css = `
:root{
  --bg0:#07070a;
  --bg1:#0b0b11;
  --card:#0e0f16cc;
  --line:#1f2230;
  --txt:#e8e8ef;
  --mut:#a8a8b5;
  --hot:#f0f0ff;
  --accent:#cfcfe6;
  --shadow: 0 20px 60px rgba(0,0,0,.55);
  --radius: 18px;
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  background: radial-gradient(1200px 700px at 10% 10%, #131526 0%, transparent 55%),
              radial-gradient(900px 600px at 90% 40%, #0f1221 0%, transparent 55%),
              linear-gradient(180deg, var(--bg0), var(--bg1));
  color:var(--txt);
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

.bm{ position:relative; min-height:100vh; overflow-x:hidden; }
.wrap{ max-width:1100px; margin:0 auto; padding: 36px 16px 64px; }

.noise{
  pointer-events:none;
  position:fixed; inset:0;
  opacity:.08;
  background: rgba(255,255,255,.06);
  filter:url(#n);
  mix-blend-mode: overlay;
}

.top{
  position:sticky;
  top:0;
  z-index:20;
  backdrop-filter: blur(10px);
  background: linear-gradient(180deg, rgba(7,7,10,.82), rgba(7,7,10,.45));
  border-bottom:1px solid rgba(31,34,48,.7);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 14px 16px;
}

.brand{ display:flex; gap:12px; align-items:center; min-width: 0; }
.sigil{
  width:34px; height:34px;
  border-radius:10px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,.22), transparent 55%),
    linear-gradient(135deg, rgba(255,255,255,.12), rgba(0,0,0,.2)),
    repeating-linear-gradient(45deg, rgba(255,255,255,.06) 0 8px, transparent 8px 16px);
  border:1px solid rgba(207,207,230,.25);
  box-shadow: 0 12px 30px rgba(0,0,0,.45);
  flex: 0 0 auto;
}

.brandText{ min-width:0; }
.brandText .name{
  letter-spacing: .16em;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brandText .role{
  font-size: 12px;
  color: var(--mut);
  letter-spacing: .06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav{ display:flex; gap:14px; }
.nav a{
  text-decoration:none;
  color: var(--mut);
  font-size: 13px;
  letter-spacing:.08em;
  text-transform: uppercase;
  padding: 10px 10px;
  border-radius: 10px;
  transition: .18s ease;
  border:1px solid transparent;
  white-space: nowrap;
}
.nav a:hover{
  color: var(--txt);
  border-color: rgba(207,207,230,.18);
  background: rgba(255,255,255,.04);
}

/* Burger */
.burger{
  display:none;
  width: 44px; height: 40px;
  border-radius: 12px;
  border:1px solid rgba(207,207,230,.18);
  background: rgba(255,255,255,.03);
  cursor:pointer;
  padding: 10px;
}
.burger span{
  display:block;
  height: 2px;
  background: rgba(232,232,239,.9);
  margin: 5px 0;
  border-radius: 999px;
}

/* Drawer mobile */
.drawer{ position:fixed; inset:0; z-index:50; pointer-events:none; }
.drawer.open{ pointer-events:auto; }
.drawerPanel{
  position:absolute;
  top:0; right:0;
  height: 100%;
  width: min(86vw, 360px);
  background: linear-gradient(180deg, rgba(10,10,16,.92), rgba(7,7,10,.92));
  border-left:1px solid rgba(31,34,48,.95);
  box-shadow: 0 30px 120px rgba(0,0,0,.7);
  transform: translateX(110%);
  transition: transform .18s ease;
  padding: 16px;
  display:flex;
  flex-direction:column;
  gap: 14px;
}
.drawer.open .drawerPanel{ transform: translateX(0); }

.drawerBackdrop{
  position:absolute; inset:0;
  background: rgba(0,0,0,.55);
  backdrop-filter: blur(2px);
  opacity:0;
  transition: opacity .18s ease;
}
.drawer.open .drawerBackdrop{ opacity:1; }

.drawerHead{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 12px;
}
.drawerTitle{
  font-size: 12px;
  letter-spacing:.14em;
  text-transform: uppercase;
  color: var(--mut);
}
.drawerLinks{
  display:flex;
  flex-direction:column;
  gap: 10px;
}
.drawerLinks a{
  text-decoration:none;
  color: var(--txt);
  border:1px solid rgba(31,34,48,.95);
  background: rgba(255,255,255,.02);
  padding: 12px 12px;
  border-radius: 14px;
  letter-spacing:.08em;
  text-transform: uppercase;
  font-size: 13px;
}
.drawerLinks a:hover{
  background: rgba(255,255,255,.04);
  border-color: rgba(207,207,230,.22);
}
.drawerActions{ display:flex; flex-direction:column; gap: 10px; margin-top:auto; }

.hero{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 18px;
  padding-top: 22px;
  align-items:start;
}

.title{
  margin:0 0 10px;
  font-family: "Metal Mania", "UnifrakturMaguntia", serif;
  font-size: clamp(34px, 6.2vw, 62px);
  letter-spacing: .06em;
  line-height: .92;
  text-transform: uppercase;
  text-shadow: 0 20px 70px rgba(0,0,0,.75);
  word-break: break-word;
}
.glow{
  color: var(--hot);
  text-shadow:
    0 0 12px rgba(255,255,255,.08),
    0 0 38px rgba(207,207,230,.08);
}
.lead{
  margin: 0 0 16px;
  color: var(--mut);
  font-size: 15px;
  line-height: 1.7;
  max-width: 58ch;
}

.ctaRow{ display:flex; flex-wrap:wrap; gap:10px; margin: 18px 0 14px; }

.btn{
  cursor:pointer;
  border-radius: 14px;
  padding: 11px 14px;
  font-size: 13px;
  letter-spacing:.08em;
  text-transform: uppercase;
  border:1px solid rgba(207,207,230,.18);
  background: rgba(255,255,255,.03);
  color: var(--txt);
  transition: .18s ease;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.btn:hover{ transform: translateY(-1px); border-color: rgba(207,207,230,.28); background: rgba(255,255,255,.05); }
.btn:active{ transform: translateY(0px); }
.btn.primary{
  background: linear-gradient(135deg, rgba(255,255,255,.10), rgba(207,207,230,.06));
  border-color: rgba(207,207,230,.28);
}
.btn.ghost{ color: var(--mut); }
.smallBtn{ padding: 9px 12px; font-size: 12px; }

.metaRow{ display:flex; flex-wrap:wrap; gap:10px; margin-top: 14px; }
.meta{
  padding: 10px 12px;
  border-radius: 14px;
  border:1px solid rgba(31,34,48,.9);
  background: rgba(255,255,255,.02);
  min-width: 160px;
}
.metaK{
  font-size: 11px;
  letter-spacing:.10em;
  text-transform: uppercase;
  color: var(--mut);
}
.metaV{
  font-size: 13px;
  letter-spacing:.02em;
}

.card{
  border-radius: var(--radius);
  border:1px solid rgba(31,34,48,.95);
  background: linear-gradient(180deg, rgba(14,15,22,.78), rgba(10,10,16,.55));
  box-shadow: var(--shadow);
  padding: 18px;
  position:relative;
  overflow:hidden;
  min-width: 0;
}
.card::before{
  content:"";
  position:absolute;
  inset:-2px;
  border-radius: calc(var(--radius) + 2px);
  background: radial-gradient(500px 200px at 15% 0%, rgba(207,207,230,.10), transparent 60%);
  pointer-events:none;
}
.card.small{ margin-top: 14px; }

.smallTitle{
  font-size: 12px;
  letter-spacing:.12em;
  text-transform: uppercase;
  color: var(--mut);
  margin-bottom: 10px;
}

.altar{ padding: 16px; }
.altarTop{ display:flex; justify-content:space-between; gap:10px; position:relative; z-index:1; flex-wrap:wrap; }
.chip{
  font-size: 11px;
  letter-spacing:.12em;
  text-transform: uppercase;
  padding: 8px 10px;
  border-radius: 999px;
  border:1px solid rgba(207,207,230,.18);
  background: rgba(255,255,255,.03);
}
.chip.dim{ color: var(--mut); }

.runes{
  display:flex; gap:10px;
  margin: 14px 0 10px;
  position:relative; z-index:1;
}
.runes span{
  flex:1;
  height: 10px;
  border-radius: 999px;
  border:1px solid rgba(31,34,48,.95);
  background: repeating-linear-gradient(90deg, rgba(255,255,255,.06) 0 10px, transparent 10px 20px);
  opacity:.8;
}

.altarBody{ display:grid; gap:12px; position:relative; z-index:1; }
.stat{
  display:flex;
  justify-content:space-between;
  gap:12px;
  padding: 10px 12px;
  border-radius: 14px;
  border:1px solid rgba(31,34,48,.95);
  background: rgba(255,255,255,.02);
  flex-wrap:wrap;
}
.stat .k{ font-size: 11px; letter-spacing:.14em; text-transform: uppercase; color: var(--mut); }
.stat .v{ font-size: 13px; letter-spacing:.02em; }

.altarFoot{ margin-top: 12px; position:relative; z-index:1; }
.inline{ color: var(--accent); text-decoration:none; font-size: 13px; }
.inline:hover{ text-decoration: underline; }

.list{ margin:0; padding-left: 18px; color: var(--mut); line-height: 1.7; font-size: 14px; }

.divider{
  display:flex; gap:10px;
  align-items:center;
  margin: 22px 0;
  opacity:.9;
}
.divider span{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(207,207,230,.22), transparent);
  flex:1;
}
.divider span:nth-child(2){
  height: 6px;
  border-radius: 999px;
  background: repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 10px, transparent 10px 20px);
  border:1px solid rgba(31,34,48,.95);
  flex: .45;
}

.grid2{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.h2{
  margin:0 0 8px;
  font-family: "Metal Mania", "UnifrakturMaguntia", serif;
  font-size: 30px;
  letter-spacing:.06em;
  text-transform: uppercase;
}
.p{ margin: 0 0 10px; color: var(--mut); line-height: 1.7; font-size: 14px; }
.dim{ color: rgba(168,168,181,.78); }

.pillRow{ display:flex; flex-wrap:wrap; gap:8px; margin-top: 12px; position:relative; z-index:1; }
.pill{
  font-size: 12px;
  color: var(--txt);
  padding: 8px 10px;
  border-radius: 999px;
  border:1px solid rgba(207,207,230,.14);
  background: rgba(255,255,255,.03);
}

.timeline{ display:grid; gap: 14px; margin-top: 8px; position:relative; z-index:1; }
.tlItem{ display:grid; grid-template-columns: 18px 1fr; gap: 10px; }
.dot{
  width: 10px; height:10px;
  border-radius: 999px;
  margin-top: 6px;
  border:1px solid rgba(207,207,230,.25);
  background: rgba(255,255,255,.06);
  box-shadow: 0 0 0 6px rgba(255,255,255,.02);
}
.tlTop{ display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
.tlTitle{ font-weight: 600; letter-spacing:.02em; }
.tlTime{ font-size: 12px; color: var(--mut); letter-spacing:.08em; text-transform: uppercase; }
.tlDesc{ color: var(--mut); line-height:1.6; font-size: 14px; margin-top: 4px; }

.sectionHead{ margin-bottom: 10px; position:relative; z-index:1; }

.skills{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  position:relative; z-index:1;
}
.skillBox{ padding: 12px; border-radius: 16px; border:1px solid rgba(31,34,48,.95); background: rgba(255,255,255,.02); min-width:0; }
.skillTitle{
  font-size: 12px;
  letter-spacing:.12em;
  text-transform: uppercase;
  color: var(--mut);
  margin-bottom: 10px;
}
.tags{ display:flex; flex-wrap:wrap; gap:8px; }
.tag{
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  border:1px solid rgba(207,207,230,.14);
  background: rgba(255,255,255,.03);
  color: var(--txt);
  max-width: 100%;
}

.projects{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  position:relative; z-index:1;
}
.project{
  border-radius: 18px;
  border:1px solid rgba(31,34,48,.95);
  background: rgba(255,255,255,.02);
  padding: 14px;
  min-width:0;
}
.projectTop{
  display:flex;
  justify-content:space-between;
  gap:12px;
  align-items:flex-start;
  flex-wrap:wrap; /* aqui resolve “quebra” no topo */
}
.projTitleWrap{ min-width: 0; }
.projectTitle{ font-weight: 700; letter-spacing:.02em; margin-bottom: 6px; word-break: break-word; }
.badge{
  display:inline-block;
  font-size: 11px;
  letter-spacing:.12em;
  text-transform: uppercase;
  padding: 7px 10px;
  border-radius: 999px;
  border:1px solid rgba(207,207,230,.14);
  background: rgba(255,255,255,.03);
  color: var(--mut);
}
.projLinks{ display:flex; gap:10px; flex-wrap:wrap; }
.link{
  font-size: 12px;
  letter-spacing:.10em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration:none;
  padding: 8px 10px;
  border-radius: 12px;
  border:1px solid rgba(207,207,230,.14);
  background: rgba(255,255,255,.02);
  display:inline-flex;
}
.link:hover{ border-color: rgba(207,207,230,.26); background: rgba(255,255,255,.05); }

.contact{ display:grid; gap:10px; margin-top: 12px; position:relative; z-index:1; }
.contactRow{
  width:100%;
  display:flex;
  justify-content:space-between;
  gap:12px;
  align-items:center;
  text-decoration:none;
  border-radius: 16px;
  border:1px solid rgba(31,34,48,.95);
  background: rgba(255,255,255,.02);
  padding: 12px;
  color: var(--txt);
  cursor:pointer;
  flex-wrap:wrap;
}
.contactRow:hover{ background: rgba(255,255,255,.04); border-color: rgba(207,207,230,.22); }
.contactKey{
  font-size: 12px;
  letter-spacing:.12em;
  text-transform: uppercase;
  color: var(--mut);
}
.contactVal{ font-size: 13px; word-break: break-word; }
.contactHint{ font-size: 12px; color: rgba(168,168,181,.72); letter-spacing:.08em; text-transform: uppercase; }

.availability{ display:grid; gap:10px; position:relative; z-index:1; }
.availItem{
  padding: 12px;
  border-radius: 16px;
  border:1px solid rgba(31,34,48,.95);
  background: rgba(255,255,255,.02);
  display:flex;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.availItem .k{ font-size: 12px; letter-spacing:.12em; text-transform: uppercase; color: var(--mut); }
.availItem .v{ font-size: 13px; color: var(--txt); }

.seal{
  width: 140px; height:140px;
  border-radius: 999px;
  border: 1px solid rgba(207,207,230,.16);
  margin-top: 16px;
  position:relative;
  background:
    radial-gradient(circle at 35% 30%, rgba(255,255,255,.10), transparent 60%),
    repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 10px, transparent 10px 20px);
  box-shadow: 0 30px 80px rgba(0,0,0,.55);
}
.sealInner{
  position:absolute; inset: 16px;
  border-radius: 999px;
  border: 1px dashed rgba(207,207,230,.18);
  opacity:.9;
}

.foot{
  display:flex;
  justify-content:space-between;
  gap:12px;
  margin-top: 22px;
  color: var(--mut);
  font-size: 12px;
  letter-spacing:.08em;
  text-transform: uppercase;
  opacity:.9;
  flex-wrap:wrap;
}

.toast{
  position: fixed;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 12px;
  border-radius: 999px;
  border:1px solid rgba(207,207,230,.18);
  background: rgba(10,10,16,.72);
  backdrop-filter: blur(10px);
  color: var(--txt);
  font-size: 12px;
  letter-spacing:.06em;
  box-shadow: 0 20px 70px rgba(0,0,0,.55);
  z-index: 60;
}

@media (max-width: 980px){
  .hero{ grid-template-columns: 1fr; }
  .skills{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .projects{ grid-template-columns: 1fr; }
  .grid2{ grid-template-columns: 1fr; }
}

@media (max-width: 640px){
  .wrap{ padding: 26px 14px 54px; }
  .nav.desktop{ display:none; }
  .burger{ display:inline-block; }
  .meta{ min-width: 0; width: 100%; }
  .ctaRow .btn{ flex: 1 1 auto; }
  .title{ letter-spacing: .04em; }
}

   <meta name="viewport" content="width=device-width, initial-scale=1" />
`;