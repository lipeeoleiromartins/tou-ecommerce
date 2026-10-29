import { useState } from "react";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { MessageCircle, Instagram, MapPin } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_DISPLAY, whatsappLink } from "../config/site";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada",
      description: "Obrigado pelo contacto! Retornaremos em breve.",
    });
    setForm({ name: "", phone: "", message: "" });
  };

  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento ou tirar dúvidas sobre as peças da TOŪ.";

  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4">
            <h1 className="text-display">Contato</h1>
            <p className="text-xl text-muted-foreground">
              Entre em contacto para encomendas sob medida, dúvidas sobre tamanhos ou projetos especiais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-foreground">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-label">WhatsApp</p>
                    <a 
                      href={whatsappLink(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:underline text-foreground"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-foreground">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-label">Instagram</p>
                    <a 
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:underline text-foreground"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-foreground">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-label">Localização</p>
                    <p className="text-lg font-medium text-foreground">São Paulo, SP — Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-secondary/30 p-8 rounded-2xl border border-separator">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input 
                    required
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
                    placeholder="O seu nome" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone / WhatsApp</label>
                  <Input 
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(11) 99999-9999" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea 
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva o seu projeto ou pedido..." 
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}