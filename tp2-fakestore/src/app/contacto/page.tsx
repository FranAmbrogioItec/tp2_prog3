"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-700/50 mt-10 w-full">
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Contáctanos</h1>
      <p className="text-gray-400 mb-8">¿Tenés alguna duda o sugerencia? Escribinos y te responderemos a la brevedad.</p>
      
      {enviado ? (
        <div className="bg-green-900/30 border border-green-500/50 text-green-400 px-6 py-4 rounded-xl relative flex items-center gap-4 animate-[pulse_1s_ease-in-out]">
          <span className="text-2xl">✅</span>
          <div>
            <strong className="font-bold block text-green-300">¡Mensaje enviado con éxito!</strong>
            <span className="block sm:inline text-sm mt-1">Nos pondremos en contacto contigo pronto.</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="nombre">Nombre completo</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Ej. Juan Pérez"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="email">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              placeholder="ejemplo@correo.com"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2" htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" 
              rows={5} 
              placeholder="Escribe tu consulta aquí..."
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
}