import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const systemsList = [
  "iClinic", "ProDoctor", "Feegow Clinic", "ClinicWeb", "Doctoralia", "Outro"
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    system: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      setDestinatario(root.getAttribute('data-destinatario') || '');
      setAssunto(root.getAttribute('data-assunto') || '');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);

    // Envia dados para o backend
    fetch('https://webdesign.freshlab.com.br/lp-mail/lp-mail.php', {
      method: 'POST',
      body: formDataToSend
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao enviar');
        return res.text();
      })
      .then(() => {
        toast({
          title: "Solicitação enviada com sucesso!",
          description: "Em breve nossa equipe entrará em contato pelo WhatsApp.",
          variant: "default",
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          clinicName: '',
          system: ''
        });
      })
      .catch(() => {
        toast({
          title: "Erro ao enviar formulário",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contato" className="py-16 bg-talkaio-extraLight">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} method="POST" action="https://webdesign.freshlab.com.br/lp-mail/lp-mail.php">
            {/* Hidden inputs dinâmicos */}
            <input type="hidden" name="destinatario" value={destinatario} />
            <input type="hidden" name="assunto" value={assunto} />

            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  className="mt-2"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  className="mt-2"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="system">Qual sistema você utiliza?</Label>
                <select
                  id="system"
                  name="system"
                  required
                  value={formData.system}
                  onChange={handleChange}
                  className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-talkaio-blue"
                >
                  <option value="" disabled>Selecione um sistema</option>
                  {systemsList.map(system => (
                    <option key={system} value={system}>{system}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="clinicName">Nome da clínica</Label>
                <Input
                  id="clinicName"
                  name="clinicName"
                  className="mt-2"
                  required
                  value={formData.clinicName}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-talkaio-blue hover:bg-talkaio-darkBlue font-semibold py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero automatizar meu atendimento"}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Ao clicar em "Quero automatizar meu atendimento", você concorda em receber comunicações da Talkaio via WhatsApp.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
