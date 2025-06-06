import React, { useState } from 'react';
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

    const finalFormData = { ...formData };

    // Simulate form submission
    setTimeout(() => {
      console.log("Dados enviados:", finalFormData); // Aqui você envia os dados para a API

      setIsSubmitting(false);
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Em breve nossa equipe entrará em contato pelo WhatsApp.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        clinicName: '',
        system: ''
      });
    }, 1500);
  };

  return (
    <section id="contato" className="py-16 bg-talkaio-extraLight">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit}>
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
                    <option key={system} value={system}>
                      {system}
                    </option>
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
