import { Card } from "../../IU/Card/Card.jsx";

export const Studies = () => {
  return (
     <div className="flex flex-1 justify-center items-start p-10">
      <div className="w-full max-w-5xl h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <Card titulo="Estudios">
            <li>🎓 Bachiller Técnico en Desarrollo de Software (2022 - 2023)</li>
            <li>🤩Certificación en Curso RPA - Básico (Julio 2024)</li>
            <li>📚Curso de inglés (Octubre 2024)</li>
          </Card>
    
          <Card titulo="Experiencia">
            <li>👩🏻‍💻Página web Seguridad Comunitaria Policial (SCP) (Noviembre 2023)</li>
            <li>🔡Proyecto de Desarrollo de Diccionario (2024)</li>
          </Card>

      
          <Card titulo="Inglés">
            <li>📝Nivel de Inglés: A2 <br />Pre-intermedio</li>
          </Card>

        </div>
      </div>
    </div>
  );
};
