
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://cdn.jsdelivr.net/gh/freshlab-web/talkaio-lp-medico@main/dist/lovable-uploads/fc743b2e-b47e-455c-a025-daf0e32c8796.png" 
            alt="Talkaio Logo" 
            className="h-8 md:h-10" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium">
            Benefícios
          </a>
          <a href="#recursos" className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium">
            Recursos
          </a>
          <a href="#diferenciais" className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium">
            Diferenciais
          </a>
          <a href="#faq" className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium">
            FAQ
          </a>
          <a href="#contato">
          <Button className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white transition-colors">
            Fale Conosco
          </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-talkaio-dark" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col gap-4">
            <a 
              href="#beneficios" 
              className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#recursos" 
              className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#diferenciais" 
              className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Diferenciais
            </a>
            <a 
              href="#faq" 
              className="text-talkaio-dark hover:text-talkaio-blue transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white transition-colors w-full mt-2">
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
