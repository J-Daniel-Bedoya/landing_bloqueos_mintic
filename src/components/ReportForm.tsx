import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, User, HelpCircle, FileCheck2 } from 'lucide-react';

interface ReportFormProps {
  blockedUrl: string;
}

export const ReportForm: React.FC<ReportFormProps> = ({ blockedUrl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('academic');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !comments) return;

    setLoading(true);
    // Simulate API request to support
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Reporte de desbloqueo enviado:', {
        name,
        email,
        reason,
        comments,
        blockedUrl,
        timestamp: new Date().toISOString()
      });
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setComments('');
    setSubmitted(false);
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 border border-white/5 text-left animate-slide-up [animation-delay:200ms]">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="p-2 rounded-lg bg-lis-orange/10 text-lis-orange">
          <FileCheck2 className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-0.5">¿Crees que es un error?</h2>
          <p className="text-xs text-gray-400">Envía una solicitud de revisión de categoría al equipo de soporte de LIS</p>
        </div>
      </div>

      {submitted ? (
        <div className="py-8 px-4 flex flex-col items-center justify-center text-center animate-fade-in">
          <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
            <CheckCircle2 className="h-12 w-12 animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Solicitud Recibida</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
            Hemos registrado tu solicitud para revisar la categorización del sitio <strong className="text-lis-orange font-mono select-all break-all">{blockedUrl}</strong>. Nuestro equipo técnico validará el reporte en un plazo máximo de 24 horas hábiles.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-xs font-bold tracking-wide transition-all text-white"
          >
            Enviar otro reporte
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                Nombre Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="name-input"
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 focus:border-lis-orange/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="email-input" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="juan.perez@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 focus:border-lis-orange/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Reason selector */}
            <div className="md:col-span-1 space-y-1.5">
              <label htmlFor="reason-select" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                Motivo de Solicitud
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <select
                  id="reason-select"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 focus:border-lis-orange/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="academic" className="bg-lis-card text-white">Uso Académico / Estudio</option>
                  <option value="work" className="bg-lis-card text-white">Uso Laboral / Trabajo</option>
                  <option value="error" className="bg-lis-card text-white">Clasificación Errónea (Falso Positivo)</option>
                  <option value="other" className="bg-lis-card text-white">Otro Motivo</option>
                </select>
              </div>
            </div>

            {/* Comments Field */}
            <div className="md:col-span-2 space-y-1.5">
              <label htmlFor="comments-input" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                Detalla por qué consideras que el sitio es seguro
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 text-gray-500">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <textarea
                  id="comments-input"
                  required
                  rows={2}
                  placeholder="Por favor explica brevemente las funciones del sitio web..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 focus:border-lis-orange/60 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all resize-none"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading || !blockedUrl}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-lis-orange to-amber-600 hover:from-lis-orange-hover hover:to-amber-700 active:scale-[0.98] text-white font-bold tracking-wide text-xs px-6 py-3 rounded-xl shadow-lg shadow-lis-orange/15 hover:shadow-lis-orange/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Enviar Solicitud de Revisión</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
