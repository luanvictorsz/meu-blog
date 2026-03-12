import { useState, useEffect } from "react";

export default function Header({ onCopyEmail }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <header className="top">
        <div className="brand">
          <span className="sigil" aria-hidden="true" />
          <div className="brandText">
            <div className="name">Luan Victor (AETERNUS)</div>
            <div className="role">C Sharp • Angular/React • GameDev</div>
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
            <button className="btn primary" onClick={onCopyEmail}>
              Copiar Email
            </button>
            <a className="btn ghost" href="#projetos">
              Ver Projetos
            </a>
          </div>
        </div>
        <div className="drawerBackdrop" onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
}