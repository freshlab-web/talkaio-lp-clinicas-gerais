
import React from 'react';
import { Calendar, Clock, MessageSquare, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Calendar className="h-12 w-12 text-talkaio-blue" />,
      title: 'Confirmação automática de consultas',
      description: 'Evite esquecimentos e otimize a agenda da equipe.'
    },
    {
      icon: <Users className="h-12 w-12 text-talkaio-blue" />,
      title: 'Redução de faltas e no-show',
      description: 'Lembretes inteligentes ajudam a reduzir até 40% das ausências.'
    },
    {
      icon: <Clock className="h-12 w-12 text-talkaio-blue" />,
      title: 'Atendimento fora do horário comercial',
      description: 'Seu WhatsApp continua ativo mesmo quando você não está.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-talkaio-blue" />,
      title: 'Relatórios e indicadores de atendimento',
      description: 'Saiba quem responde, quantas mensagens foram enviadas e melhore continuamente.'
    }
  ];

  return (
    <section id="recursos" className="py-16 bg-gradient-to-b from-white to-talkaio-extraLight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-talkaio-dark mb-4">
          O que sua clínica ganha com a Talkaio?
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Automatize seus agendamentos, confirmações e lembretes no WhatsApp, sem perder o toque humano.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-talkaio-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 bg-talkaio-blue bg-blue-gradient text-white rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Você sabia que nossos clientes respondem 80% dos pacientes automaticamente?
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Isso significa mais tempo para focar no que importa: o cuidado com seus pacientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
