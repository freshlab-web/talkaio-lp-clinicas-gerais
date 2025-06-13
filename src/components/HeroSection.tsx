
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-talkaio-extraLight to-white">
      <div className="container mx-auto px-4 pt-16 pb-20 md:pt-20 md:pb-32 lg:pt-24 lg:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-talkaio-dark leading-tight">
              Transforme o atendimento da sua clínica com WhatsApp automatizado
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Sua equipe está sobrecarregada? O WhatsApp toca o dia todo? Pacientes desmarcam em cima da hora?
              <span className="block mt-2">
                <strong>A Talkaio entra em cena para mudar isso.</strong> Atenda mais pacientes com menos esforço.
              </span>
            </p>
            <div className="mt-8">
              <Button 
                className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white text-lg px-6 py-6 rounded-lg font-medium transition-all transform hover:scale-105"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Automatizar meu atendimento
              </Button>
              <a 
                href="#beneficios" 
                className="inline-flex items-center ml-6 text-talkaio-blue hover:text-talkaio-darkBlue transition-colors"
              >
                <span className="mr-2">Saiba mais</span>
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-talkaio-blue rounded-full opacity-10 animate-float"></div>
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="bg-talkaio-blue rounded-t-xl p-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-b-xl">
                  <div className="flex items-start mb-4">
                    <div className="bg-talkaio-lightBlue p-2 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.52 3.47C18.24 1.19 15.12 0 11.88 0C5.39 0 0.12 5.27 0.12 11.76C0.12 13.83 0.66 15.85 1.66 17.64L0 24L6.48 22.36C8.22 23.27 10.05 23.73 11.87 23.73C18.37 23.73 23.63 18.46 23.63 11.98C23.63 8.72 22.44 5.6 20.51 3.47H20.52ZM11.88 21.74C10.15 21.74 8.44 21.3 6.93 20.46L6.57 20.25L2.84 21.25L3.85 17.61L3.61 17.22C2.69 15.66 2.21 13.87 2.21 12.05C2.21 6.5 6.51 2.08 12.07 2.08C14.74 2.08 17.29 3.07 19.14 4.92C20.99 6.77 22.1 9.32 22.1 11.98C22.1 17.42 17.46 21.73 11.9 21.73L11.88 21.74ZM17.26 14.22C16.96 14.08 15.5 13.35 15.22 13.26C14.95 13.17 14.75 13.12 14.54 13.42C14.34 13.72 13.77 14.39 13.6 14.6C13.42 14.8 13.25 14.82 12.95 14.68C11.27 13.85 10.14 13.19 9 11.29C8.72 10.83 9.3 10.87 9.84 9.79C9.94 9.59 9.89 9.4 9.82 9.25C9.75 9.1 9.18 7.64 8.94 7.03C8.7 6.45 8.46 6.52 8.27 6.51C8.1 6.5 7.89 6.5 7.69 6.5C7.49 6.5 7.16 6.57 6.89 6.86C6.62 7.16 5.83 7.88 5.83 9.34C5.83 10.8 6.9 12.22 7.06 12.42C7.22 12.62 9.17 15.61 12.14 16.87C14.15 17.73 14.89 17.78 15.8 17.64C16.34 17.55 17.5 16.92 17.74 16.21C17.98 15.5 17.98 14.9 17.91 14.79C17.83 14.68 17.62 14.5 17.27 14.21L17.26 14.22Z" fill="#0056FB"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Olá! Bem-vindo à Clínica Saúde Total.</p>
                      <p className="text-xs text-gray-500 mt-1">10:30</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="bg-talkaio-lightBlue p-2 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.52 3.47C18.24 1.19 15.12 0 11.88 0C5.39 0 0.12 5.27 0.12 11.76C0.12 13.83 0.66 15.85 1.66 17.64L0 24L6.48 22.36C8.22 23.27 10.05 23.73 11.87 23.73C18.37 23.73 23.63 18.46 23.63 11.98C23.63 8.72 22.44 5.6 20.51 3.47H20.52ZM11.88 21.74C10.15 21.74 8.44 21.3 6.93 20.46L6.57 20.25L2.84 21.25L3.85 17.61L3.61 17.22C2.69 15.66 2.21 13.87 2.21 12.05C2.21 6.5 6.51 2.08 12.07 2.08C14.74 2.08 17.29 3.07 19.14 4.92C20.99 6.77 22.1 9.32 22.1 11.98C22.1 17.42 17.46 21.73 11.9 21.73L11.88 21.74ZM17.26 14.22C16.96 14.08 15.5 13.35 15.22 13.26C14.95 13.17 14.75 13.12 14.54 13.42C14.34 13.72 13.77 14.39 13.6 14.6C13.42 14.8 13.25 14.82 12.95 14.68C11.27 13.85 10.14 13.19 9 11.29C8.72 10.83 9.3 10.87 9.84 9.79C9.94 9.59 9.89 9.4 9.82 9.25C9.75 9.1 9.18 7.64 8.94 7.03C8.7 6.45 8.46 6.52 8.27 6.51C8.1 6.5 7.89 6.5 7.69 6.5C7.49 6.5 7.16 6.57 6.89 6.86C6.62 7.16 5.83 7.88 5.83 9.34C5.83 10.8 6.9 12.22 7.06 12.42C7.22 12.62 9.17 15.61 12.14 16.87C14.15 17.73 14.89 17.78 15.8 17.64C16.34 17.55 17.5 16.92 17.74 16.21C17.98 15.5 17.98 14.9 17.91 14.79C17.83 14.68 17.62 14.5 17.27 14.21L17.26 14.22Z" fill="#0056FB"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Lembrando da sua consulta amanhã às 15h com Dr. Silva.</p>
                      <p className="text-xs text-gray-500 mt-1">10:31</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mb-4">
                    <div className="bg-talkaio-lightBlue p-3 rounded-lg">
                      <p className="text-talkaio-dark">Obrigado pelo lembrete! Estarei lá.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">10:32</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-talkaio-lightBlue p-2 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.52 3.47C18.24 1.19 15.12 0 11.88 0C5.39 0 0.12 5.27 0.12 11.76C0.12 13.83 0.66 15.85 1.66 17.64L0 24L6.48 22.36C8.22 23.27 10.05 23.73 11.87 23.73C18.37 23.73 23.63 18.46 23.63 11.98C23.63 8.72 22.44 5.6 20.51 3.47H20.52ZM11.88 21.74C10.15 21.74 8.44 21.3 6.93 20.46L6.57 20.25L2.84 21.25L3.85 17.61L3.61 17.22C2.69 15.66 2.21 13.87 2.21 12.05C2.21 6.5 6.51 2.08 12.07 2.08C14.74 2.08 17.29 3.07 19.14 4.92C20.99 6.77 22.1 9.32 22.1 11.98C22.1 17.42 17.46 21.73 11.9 21.73L11.88 21.74ZM17.26 14.22C16.96 14.08 15.5 13.35 15.22 13.26C14.95 13.17 14.75 13.12 14.54 13.42C14.34 13.72 13.77 14.39 13.6 14.6C13.42 14.8 13.25 14.82 12.95 14.68C11.27 13.85 10.14 13.19 9 11.29C8.72 10.83 9.3 10.87 9.84 9.79C9.94 9.59 9.89 9.4 9.82 9.25C9.75 9.1 9.18 7.64 8.94 7.03C8.7 6.45 8.46 6.52 8.27 6.51C8.1 6.5 7.89 6.5 7.69 6.5C7.49 6.5 7.16 6.57 6.89 6.86C6.62 7.16 5.83 7.88 5.83 9.34C5.83 10.8 6.9 12.22 7.06 12.42C7.22 12.62 9.17 15.61 12.14 16.87C14.15 17.73 14.89 17.78 15.8 17.64C16.34 17.55 17.5 16.92 17.74 16.21C17.98 15.5 17.98 14.9 17.91 14.79C17.83 14.68 17.62 14.5 17.27 14.21L17.26 14.22Z" fill="#0056FB"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Ótimo! Até amanhã.</p>
                      <p className="text-xs text-gray-500 mt-1">10:33</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
