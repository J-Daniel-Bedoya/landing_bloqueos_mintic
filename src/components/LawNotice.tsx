import React from 'react';
import type { BlockCategory } from '../categories';
import { Scale, ChevronDown, ChevronUp, ExternalLink, HelpCircle, ShieldAlert } from 'lucide-react';

interface LawNoticeProps {
  category: BlockCategory;
}

export const LawNotice: React.FC<LawNoticeProps> = ({ category }) => {
  const [expandedLaw, setExpandedLaw] = React.useState<number | null>(0);

  const toggleLaw = (index: number) => {
    if (expandedLaw === index) {
      setExpandedLaw(null);
    } else {
      setExpandedLaw(index);
    }
  };

  const getAlertStyles = () => {
    switch (category.id) {
      case 'csam':
        return 'glass-alert-csam text-red-200 border-red-500/20';
      case 'gambling':
        return 'glass-alert-gambling text-amber-200 border-amber-500/20';
      case 'security':
        return 'glass-alert-security text-blue-200 border-blue-500/20';
      default:
        return 'glass-alert-general text-gray-200 border-gray-500/20';
    }
  };

  const alertStyles = getAlertStyles();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up [animation-delay:100ms]">
      {/* Legal and Normative Section */}
      <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-white/5 flex flex-col text-left">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <div className="p-2 rounded-lg bg-lis-orange/10 text-lis-orange">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white mb-0.5">Normatividad y Marco Legal</h2>
            <p className="text-xs text-gray-400">Cumplimiento regulatorio del Ministerio de las TIC de Colombia (MinTIC)</p>
          </div>
        </div>

        {/* Laws Accordion */}
        <div className="space-y-3 flex-1">
          {category.laws.map((law, idx) => {
            const isExpanded = expandedLaw === idx;
            return (
              <div 
                key={idx} 
                className="rounded-xl border border-white/5 bg-black/10 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleLaw(idx)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-white tracking-wide">{law.title}</span>
                    <span className="text-xs text-gray-400 line-clamp-1">{law.description}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-white/5 bg-black/20 text-xs md:text-sm text-gray-300 leading-relaxed animate-fade-in">
                    <p className="mb-3 text-gray-400 font-medium">{law.description}</p>
                    {law.articles && law.articles.length > 0 && (
                      <div className="mt-2 pl-3 border-l-2 border-lis-orange/50 space-y-2">
                        {law.articles.map((article, artIdx) => (
                          <div key={artIdx} className="font-semibold text-white/90">
                            {article}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action and Authorities Reporting Section */}
      <div className={`glass-panel rounded-2xl p-6 border flex flex-col justify-between text-left ${alertStyles}`}>
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldAlert className="h-5 w-5 shrink-0" />
            <h2 className="text-lg font-bold text-white">Canales Oficiales</h2>
          </div>
          
          <p className="text-xs md:text-sm leading-relaxed mb-6 opacity-90 text-white/80">
            {category.id === 'csam' ? (
              <>
                <strong>ADVERTENCIA:</strong> En Colombia, la producción, distribución, posesión y facilitación de material de abuso o explotación sexual infantil está severamente penada por la ley. Si sospechas de un sitio ilegal, repórtalo inmediatamente.
              </>
            ) : category.id === 'gambling' ? (
              "Evite sitios de apuestas informales. Las apuestas en portales ilegales no garantizan el pago de premios y desvían recursos vitales del sistema de salud pública de Colombia."
            ) : (
              "El phishing y el malware son herramientas de la delincuencia informática para robar cuentas, dinero o datos. Utilice siempre conexiones seguras y reporte sitios sospechosos."
            )}
          </p>
        </div>

        {/* Buttons list */}
        <div className="space-y-2 mt-4">
          <div className="text-xs text-gray-400 mb-2 font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-70">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Acciones sugeridas</span>
          </div>

          {category.actions.map((act, actIdx) => (
            <a
              key={actIdx}
              href={act.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all ${
                act.primary 
                  ? 'bg-lis-orange hover:bg-lis-orange-hover text-white shadow-lg shadow-lis-orange/15 hover:shadow-lis-orange/25 active:scale-[0.98]'
                  : 'bg-white/5 hover:bg-white/10 active:bg-white/15 text-white border border-white/10'
              }`}
            >
              <span>{act.label}</span>
              <ExternalLink className="h-4 w-4 shrink-0 opacity-80" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
