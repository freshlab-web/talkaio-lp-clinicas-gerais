
import React from 'react';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.47C18.24 1.19 15.12 0 11.88 0C5.39 0 0.12 5.27 0.12 11.76C0.12 13.83 0.66 15.85 1.66 17.64L0 24L6.48 22.36C8.22 23.27 10.05 23.73 11.87 23.73C18.37 23.73 23.63 18.46 23.63 11.98C23.63 8.72 22.44 5.6 20.51 3.47H20.52Z" fill="#0056FB" />
        </svg>
      ),
      title: 'Plataforma 100% integrada com WhatsApp',
      description: 'Nossa solução se integra perfeitamente ao WhatsApp oficial para uma experiência fluida.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Personalizável para o seu tipo de clínica',
      description: 'Adaptamos nossa solução para atender exatamente às necessidades da sua especialidade.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Suporte humano e técnico para sua equipe',
      description: 'Nossa equipe está sempre disponível para ajudar e garantir o sucesso da sua implementação.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12H15" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 16H15" stroke="#0056FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Integração com sistema de gestão de clinicas/consultórios e disparo automático',
      description: 'Nossa plataforma se integra facilmente com seus sistemas existentes e automatiza o envio de mensagens.'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-talkaio-dark mb-16">
          Por que escolher a Talkaio?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-talkaio-extraLight rounded-xl p-6 md:p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-talkaio-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-talkaio-dark mb-8">
            Pronto para automatizar seu atendimento e ter mais tempo <br className="hidden md:inline" />
            para cuidar dos seus pacientes?
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Preencha o formulário abaixo e fale com a nossa equipe via WhatsApp e reduza até 60% no tempo 
            gasto com agendamentos manuais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
