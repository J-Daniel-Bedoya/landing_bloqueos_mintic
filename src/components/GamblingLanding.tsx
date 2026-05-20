import React, { useState } from 'react';
import { Gamepad2, Scale, AlertTriangle, Globe, Copy, Check, ExternalLink, HelpCircle, User, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface GamblingLandingProps {
  blockedUrl: string;
}

export const GamblingLanding: React.FC<GamblingLandingProps> = ({ blockedUrl }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(blockedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !comments) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Reporte Juegos de Azar enviado:', { name, email, comments, blockedUrl });
    }, 1500);
  };

  return (
    <div className="w-full space-y-8 animate-fade-in">
      {/* 1. Main Alert Card */}
      <div className="w-full glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden border border-amber-500/25">
        {/* Dynamic amber/gold background glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-amber-600/20 to-yellow-600/10 blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-gradient-to-br from-amber-600/10 to-yellow-600/10 blur-3xl opacity-30 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 shadow-lg shadow-amber-900/30 shrink-0">
            <Gamepad2 className="h-10 w-10 text-white" />
          </div>

          <div className="flex-1 text-left w-full">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-amber-500/10 text-amber-400 border-amber-500/30">
                Restricción Coljuegos - Ley 643 de 2001
              </span>
              <span className="bg-amber-500/15 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                <span>Monopolio Rentístico</span>
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
              Sitio de Juegos de Suerte y Azar No Autorizado
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              El acceso a este portal ha sido suspendido de forma preventiva en la red de <strong>Logística Integral Satelital</strong>. En Colombia, la operación de juegos de suerte y azar, apuestas deportivas y casinos en línea requiere una concesión y autorización explícita otorgada por <strong>Coljuegos</strong>. Los sitios que operan de manera informal evaden impuestos obligatorios que financian la salud pública del país.
            </p>

            {/* Requested URL display */}
            <div className="bg-black/45 rounded-xl border border-amber-500/15 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="p-2 rounded-lg bg-amber-950/30 text-amber-400 shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Sitio Web Solicitado</p>
                  <p className="text-sm md:text-base font-mono font-semibold text-white truncate select-all">
                    {blockedUrl}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 active:bg-amber-500/30 text-amber-200 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all border border-amber-500/20"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copiar URL</span>
                  </>
                )}
              </button>
            </div>

            {/* Entidades de Control y Vigilancia Logos */}
            <div className="mt-8 pt-6 border-t border-amber-500/15">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400/70 mb-4 text-center md:text-left">
                Entidad reguladora y ministerio de control:
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
                <div className="h-12 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 flex items-center justify-center" title="Ministerio TIC Colombia">
                  <img src="/assets/logos/mintic.svg" alt="MinTIC" className="h-7 w-auto object-contain" />
                </div>
                <div className="h-12 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 flex items-center justify-center" title="Coljuegos Colombia">
                  <img src="/assets/logos/coljuegos.svg" alt="Coljuegos" className="h-7 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Legal details and official reporting channels */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coljuegos legislation info */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/5 text-left flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-0.5">Régimen y Control de Suerte y Azar</h2>
                <p className="text-xs text-gray-400">Legislación colombiana sobre el monopolio rentístico</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-amber-500/10 bg-amber-950/5 p-4 text-sm text-gray-300">
                <h3 className="font-bold text-white mb-1.5">Ley 643 de 2001</h3>
                <p className="text-xs text-gray-400 mb-2">
                  Regula el monopolio rentístico de los juegos de suerte y azar en el territorio nacional. Establece que cualquier operación comercial de juegos o apuestas en línea que no tenga autorización expresa y contrato de concesión vigente constituye una actividad ilegal.
                </p>
                <div className="pl-3 border-l border-amber-500/30 text-xs text-white/90 space-y-1 font-mono">
                  <div>• Artículo 4: Exclusividad del monopolio en favor de la salud.</div>
                  <div>• Regulación de Internet: Resoluciones de bloqueo de dominios no autorizados por Coljuegos.</div>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-black/10 p-4 text-sm text-gray-300">
                <h3 className="font-bold text-white mb-1.5">¿Por qué es importante jugar en sitios autorizados?</h3>
                <p className="text-xs text-gray-400">
                  Los operadores autorizados pagan derechos de explotación que se destinan en su totalidad al sistema de salud de los departamentos. Adicionalmente, garantizan al jugador el pago correcto de sus apuestas, la transparencia en los algoritmos y la protección de su dinero y datos personales.
                </p>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-gray-400 mt-6 pt-4 border-t border-white/5 leading-relaxed">
            * Este bloqueo automático se realiza mediante herramientas de filtrado web FlashStart® aliadas a la seguridad de red de Logística Integral Satelital.
          </div>
        </div>

        {/* Action button panel */}
        <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 bg-amber-950/5 text-left flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Gamepad2 className="h-5 w-5 text-amber-400 shrink-0" />
              <h2 className="text-lg font-bold text-white">Canales Coljuegos</h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed mb-6 text-amber-200/90">
              Verifique si su operador favorito de casino, ruleta o apuestas deportivas online cuenta con contrato vigente y está autorizado oficialmente para ofrecer servicios legales en Colombia:
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="text-xs text-gray-400 mb-1 font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-70">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Verificaciones oficiales</span>
            </div>

            <a
              href="https://www.coljuegos.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all bg-amber-600 hover:bg-amber-750 text-white shadow-lg shadow-amber-900/15"
            >
              <span>Ver Operadores Autorizados</span>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>

            <a
              href="https://www.coljuegos.gov.co/index.php?idcategoria=2153"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all bg-white/5 hover:bg-white/10 text-white border border-white/10"
            >
              <span>Reportar un Sitio de Apuestas Ilegal</span>
              <ExternalLink className="h-4 w-4 shrink-0 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. False Positive Report Form */}
      <div className="w-full glass-panel rounded-2xl p-6 border border-white/5 text-left">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-0.5">¿Consideras que este bloqueo es un error?</h2>
            <p className="text-xs text-gray-400">Envía una solicitud de revisión de bloqueo al equipo de soporte de Logística Integral Satelital</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 px-4 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Solicitud de Revisión Enviada</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
              Registramos tu solicitud para el sitio <strong className="text-amber-400 font-mono select-all break-all">{blockedUrl}</strong>. Evaluaremos si el dominio tiene licencia de Coljuegos o es un falso positivo y te notificaremos en un plazo de 24 horas hábiles.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleReport} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="gamb-name-input" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    id="gamb-name-input"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 focus:border-amber-500/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="gamb-email-input" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    id="gamb-email-input"
                    type="email"
                    required
                    placeholder="juan.perez@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 focus:border-amber-500/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="gamb-comments-input" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                Detalla por qué consideras que el bloqueo de esta dirección es un error
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 text-gray-500">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <textarea
                  id="gamb-comments-input"
                  required
                  rows={3}
                  placeholder="Por favor explícanos las razones, detalles del operador o el uso del dominio..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 focus:border-amber-500/60 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-all resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-750 active:scale-[0.98] text-white font-bold tracking-wide text-xs px-6 py-3 rounded-xl shadow-lg shadow-amber-950/20 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Enviar Reporte de Desbloqueo</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
