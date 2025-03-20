import { Card } from "../../IU/Card/Card.jsx"; 

export const Skills = () => {
  return (
    <div className="flex flex-1 justify-center items-start p-10">
      <div className="w-full max-w-5xl h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
         
          <Card titulo="Habilidades Técnicas">
            <li>Bases de Datos</li>
            <li>Metodología ágil - Scrum</li>
            <li>Despliegue</li>
          </Card>

      
          <Card titulo="Herramientas">
            <li>Notion</li>
            <li>Trello</li>
            <li>Git Hub</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Bootstrap</li>
          </Card>

          
          <Card titulo="Habilidades Sociales">
            <li>Trabajo en equipo</li>
            <li>Comunicación</li>
            <li>Empatía</li>
            <li>Honestidad</li>
            <li>Resiliencia</li> 
            <li>Tolerancia Y Respeto</li>
          </Card>

         
          <Card titulo="Tecnologías Frontend">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>

          </Card>

      
          <Card titulo="Tecnologías Backend">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </Card>
        </div>
      </div>
    </div>
  );
};
