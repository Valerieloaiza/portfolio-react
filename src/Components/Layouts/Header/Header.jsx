import React from "react";
import { ItemNavbar } from "../../IU/ItemNavbar/Item.jsx";

export const Header = () => {
  return (
    
    <header className="w-full bg-pink-600 p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold text-white">MI PORTAFOLIO VALERIE CALLE</h1>

        <nav className="flex gap-8 mt-4 md:mt-0 list-none">
          <ItemNavbar 
            url="/" 
            content="Inicio"
          />
          <ItemNavbar 
            url="/Habilidades" 
            content="Habilidades"
          />
          <ItemNavbar 
            url="/Estudios" 
            content="Estudios"
          />
        </nav>
      </div>
    </header>
  );
};


