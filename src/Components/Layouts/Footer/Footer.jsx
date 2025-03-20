import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-pink-600 p-8 shadow-2xl border-t border-pink-300 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-lg font-bold text-black">© 2025 Creado por | Valerie Calle Loaiza</p>

        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/Valerieloaiza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition-transform duration-300 transform hover:scale-125 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/vale06c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition-transform duration-300 transform hover:scale-125 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/15t7rJ9RmT/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-white transition-transform duration-300 transform hover:scale-125 text-2xl"
          >
            <FaFacebook />
          </a>
        </div>
        
        <div className="flex flex-col gap-4 mt-4">
          <p className="text-black text-lg">
            <strong>Teléfono:</strong> 3225962507
          </p>
          <p className="text-black text-lg">
            <strong>Correo:</strong> callevalerie60@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};
