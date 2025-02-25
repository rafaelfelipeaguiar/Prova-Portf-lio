import React from "react";
import "./style.css"; // Certifique-se do caminho correto do CSS

function Sobre() {
  return (
    <section className="about-container">
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor web apaixonado por tecnologia e inovação, especializado em desenvolvimento 
        front-end e sistemas escaláveis. Atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong> no Instituto Federal de Rondônia (IFRO).
      </p>

      <div className="info-section">
        <h3>🎓 Formação Acadêmica</h3>
        <p><strong>Técnico em Informática</strong> - IFRO (2020 - 2022)</p>
        <p><strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> - IFRO (2023 - atual)</p>
      </div>

      <div className="info-section">
        <h3>🛠️ Minhas Habilidades</h3>
        <ul>
          <li>Front-end: Next.js, React, Vue.js, JavaScript, HTML, CSS</li>
          <li>Back-end: PHP, Laravel, JavaScript</li>
          <li>Versionamento de Código com Git</li>
          <li>Trabalho em equipe, adaptabilidade e comunicação</li>
        </ul>
      </div>

      <div className="info-section">
        <h3>👨‍🏫 Experiência</h3>
        <p><strong>Monitor de ensino de lógica de programação</strong> - IFRO (2021 - 2022)</p>
        <p>Auxiliei alunos em vulnerabilidade econômica no aprendizado de lógica de programação.</p>

        <p><strong>Desenvolvedor Front-end</strong> - IFRO (2023 - atual)</p>
        <p>Participo como desenvolvedor front-end e auxilio no entendimento das funcionalidades de sistemas acadêmicos.</p>

        <p><strong>Desenvolvedor Web</strong> - Fiscontech (2024 - atual)</p>
        <p>Atuando como desenvolvedor web, além de desenvolver diversas atividades envolvidas na área de ti.</p>
      </div>
    </section>
  );
}

export default Sobre;
