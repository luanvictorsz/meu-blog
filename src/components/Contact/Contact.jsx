export default function Contact({ onCopyEmail }) {
  return (
    <section id="contato" className="grid2">
      <div className="card">
        <h2 className="h2">Contato</h2>
        <p className="p">Preferência: mensagem direta com contexto (vaga/projeto), stack e prazo.</p>

        <div className="contact">
          <button className="contactRow" onClick={onCopyEmail}>
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
  );
}