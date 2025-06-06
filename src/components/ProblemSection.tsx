
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-talkaio-dark mb-12">
          Chega de perder pacientes por falta de resposta
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Você não precisa de mais uma secretária: você precisa de eficiência! É 
            comprovado que clínicas que usam a Talkaio têm até <span className="font-bold text-talkaio-blue">40% menos faltas</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-gray-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Sem a Talkaio</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">Respostas lentas e pacientes impacientes</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">Faltas frequentes</span>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">Secretárias sobrecarregadas</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-talkaio-extraLight p-8 rounded-xl border-2 border-talkaio-blue shadow-lg">
            <h3 className="text-2xl font-bold text-talkaio-blue mb-4">Com a Talkaio</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-talkaio-blue mr-3">
                  <CheckCircle size={20} />
                </div>
                <span className="text-gray-700">Mensagens respondidas automaticamente</span>
              </li>
              <li className="flex items-start">
                <div className="text-talkaio-blue mr-3">
                  <CheckCircle size={20} />
                </div>
                <span className="text-gray-700">Lembretes automáticos e mais pacientes na hora certa</span>
              </li>
              <li className="flex items-start">
                <div className="text-talkaio-blue mr-3">
                  <CheckCircle size={20} />
                </div>
                <span className="text-gray-700">Atendimento mais leve, mais ágil, mais humano</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 bg-talkaio-lightBlue rounded-xl p-8">
          <h3 className="text-xl font-bold text-talkaio-dark mb-6">
            E muito mais, com a Talkaio, você:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-talkaio-blue mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.47C18.24 1.19 15.12 0 11.88 0C5.39 0 0.12 5.27 0.12 11.76C0.12 13.83 0.66 15.85 1.66 17.64L0 24L6.48 22.36C8.22 23.27 10.05 23.73 11.87 23.73C18.37 23.73 23.63 18.46 23.63 11.98C23.63 8.72 22.44 5.6 20.51 3.47H20.52Z" fill="#0056FB"/>
                </svg>
              </div>
              <p className="text-gray-700">Responde pacientes automaticamente, 24h por dia</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-talkaio-blue mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 10L12 6M12 6L8 10M12 6V18" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="#0056FB" strokeWidth="2"/>
                </svg>
              </div>
              <p className="text-gray-700">Confirma consultas com 1 clique</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-talkaio-blue mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700">Envia lembretes sem depender da equipe</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-talkaio-blue mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700">Tem controle total com indicadores e relatórios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
