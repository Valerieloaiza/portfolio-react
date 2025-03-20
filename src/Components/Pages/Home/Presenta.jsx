import React from "react";
import Valerie from '../../../assets/ValerieCalle.jpeg';

export const Presenta = () => {
  return (
    <div className="w-full h-screen bg-pink-100 p-6 shadow-lg border border-pink-300 flex justify-center items-center">
      <div className="bg-pink-600 p-8 rounded-2xl shadow-2xl border border-pink-300 max-w-lg flex flex-col items-center">
        <div className="w-44 h-56 md:w-60 md:h-72 rounded-xl overflow-hidden shadow-lg border-4 border-pink-300 mb-4">
          <img src={Valerie} alt="" className="w-full h-full object-cover" />
        </div>

        <p className="text-black text-lg leading-relaxed">
          Soy una desarrolladora junior que actualmente estudia para obtener el título de
          tecnólogo en análisis y desarrollo de software en el SENA. Me gusta trabajar en equipo,
          aprender nuevas cosas y compartir conocimientos. Mi objetivo es graduarme y seguir 
          creciendo profesionalmente en el mundo del desarrollo de software.
        </p>
      </div>
    </div>
  );
};
