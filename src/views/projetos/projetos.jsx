import React from "react";
import "./style.css";

const projects = [
  {  
    name: "PROINFE", 
    description: "Sistema web para organização escolar do governo. Participo desde 2023 como desenvolvedor front-end.", 
    link: "#" 
  },
  {  
    name: "Robótica IFRO", 
    description: "Participando como bolsista, dando aula e ensinando lógica da programação básica.", 
    link: "https://portal.ifro.edu.br/ji-parana/noticias/article?id=12178" 
  },
  { 
    name: "System Escola", 
    description: "projeto desenvolvido no 3° ano para gerenciamento de escolas com foco no aprendizado. Disponível no GitHub.", 
    link: "https://github.com/rafaelfelipeaguiar/System_Escola-" 
  },
  { 
    name: "System Cont", 
    description: "projeto desenvolvido no 3° ano para gerenciamento de escritórios de advocacia feito para conclusão de curso juntamento com outros colegas     . Disponível no GitHub.", 
    link: "https://github.com/rafaelfelipeaguiar/System-Cont" 
  },
  { 
    name: "App mobile de Fanfics", 
    description: "Projeto junto com o IFRO em Flutter para criação de um aplicativo de fanfics. Não concluído, sai antes do final.", 
    link: "#" 
  }
];

function Projetos() {
  return (
    <section className="projects-container">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link === "#" ? null :(
                <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Mais</a>   
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
