import { useState } from "react";

import "./styles/global.css";

import Noise from "./components/ui/Noise";
import Divider from "./components/ui/Divider";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function App() {
  const year = new Date().getFullYear();
  const [toast, setToast] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("luanvitorlima2017@gmail.com");
      setToast("Copiado para a área de transferência.");
      window.setTimeout(() => setToast(""), 1800);
    } catch {
      setToast("Não foi possível copiar.");
      window.setTimeout(() => setToast(""), 1800);
    }
  }

  return (
    <div className="bm">
      <Noise />

      <Header onCopyEmail={copyEmail} />

      <main className="wrap">
        <Hero onCopyEmail={copyEmail} />

        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />

        <Contact onCopyEmail={copyEmail} />

        <footer className="foot">
          <span>© {year} AETERNUS</span>
          <span className="dim">Forjado em React</span>
        </footer>
      </main>

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}