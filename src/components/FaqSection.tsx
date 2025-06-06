
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Minha clínica é pequena, isso serve pra mim?",
      answer: "Muito. Nossa equipe configura tudo e treina sua secretária em minutos."
    },
    {
      question: "Preciso de conhecimento técnico para usar a plataforma?",
      answer: "De forma alguma. Nossa equipe configura tudo para você e oferece suporte completo. A plataforma é simples, intuitiva e fácil de usar no dia a dia."
    },
    {
      question: "A Talkaio substitui minha secretária?",
      answer: "Não. Ela ajuda a secretária a ser mais produtiva, cuidando das tarefas repetitivas como agendamentos e lembretes. Assim, sua equipe tem mais tempo para focar no que importa: o paciente."
    },
    {
      question: "Funciona mesmo fora do horário comercial?",
      answer: "Sim. A automação da Talkaio continua funcionando 24h por dia, inclusive em finais de semana e feriados. Seus pacientes nunca ficam sem resposta."
    },
    {
      question: "É possível personalizar as mensagens enviadas pelo WhatsApp?",
      answer: "Com certeza! Você define o tom, os horários e até as palavras que a IA vai usar, tudo com a cara da sua clínica."
    },
    {
      question: "A Talkaio se integra com meu sistema de agendamentos ou CRM?",
      answer: "Sim, temos integração com CRMs e sistemas médicos, e nossa equipe pode avaliar o seu caso para fazer a melhor configuração."
    },
    {
      question: "O que acontece depois que eu preencho o formulário?",
      answer: "Você recebe uma mensagem de boas-vindas no WhatsApp e nossa equipe entra em contato para entender sua necessidade e mostrar como a Talkaio pode te ajudar."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-talkaio-dark mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Tire suas dúvidas sobre a Talkaio e como podemos ajudar sua clínica
        </p>

        <div className="max-w-3xl mx-auto bg-talkaio-extraLight rounded-xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-talkaio-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
