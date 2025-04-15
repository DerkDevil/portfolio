"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const timeInput = formRef.current.querySelector("input[name='time']");
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs
      .sendForm(
        "service_3jo7let",
        "template_dqu6055",
        formRef.current,
        "9mRqa_a37dbSJ7wGT"
      )
      .then(
        () => {
          setStatus("¡Mensaje enviado con éxito!");
          e.target.reset();
        },
        () => {
          setStatus("Hubo un error. Inténtalo nuevamente.");
        }
      );
  };

  return (
    <section className="min-h-screen py-20 px-4 xl:px-0 bg-background text-white">
      <div className="container mx-auto grid xl:grid-cols-2 gap-12">
        <div className="bg-[#1e1e1f] p-8 rounded-xl">
          <h2 className="text-accent text-3xl font-semibold mb-4">Contáctame</h2>
          <p className="text-white/70 mb-8">
            Cada gran proyecto comienza con una conversación. Si tienes una idea o solo quieres conectar, estaré feliz de hablar contigo.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                className="bg-primary text-white border-accent focus:outline-none focus:ring-0 autofill:bg-primary autofill:text-white"
                name="name"
                placeholder="Nombre completo"
                required
              />
              <Input
                className="bg-primary text-white border-accent focus:outline-none focus:ring-0 autofill:bg-primary autofill:text-white"
                name="phone"
                placeholder="Teléfono"
              />
              <Input
                className="bg-primary text-white md:col-span-2 border-accent focus:outline-none focus:ring-0 autofill:bg-primary autofill:text-white"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                required
              />
            </div>

            <Textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              className="min-h-[150px] bg-primary text-white border-accent"
              required
            />

            {/* Campo oculto para enviar la hora */}
            <input type="hidden" name="time" />

            <Button type="submit" className="bg-accent text-black hover:bg-accent/80">
              Enviar mensaje
            </Button>

            {status && <p className="text-white/70 text-sm pt-2">{status}</p>}
          </form>
        </div>

        <div className="flex flex-col gap-8 text-white/80">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#1e1e1f] rounded-lg">
              <Phone className="text-accent" />
            </div>
            <div>
              <p className="text-white">Teléfono</p>
              <p>(+57) 322 384 1792</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#1e1e1f] rounded-lg">
              <Mail className="text-accent" />
            </div>
            <div>
              <p className="text-white">Correo</p>
              <p>derecksebas7777@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
