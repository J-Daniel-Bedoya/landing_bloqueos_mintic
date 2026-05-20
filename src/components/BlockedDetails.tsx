import React from 'react';
import type { BlockCategory } from '../categories';
import { ShieldAlert, Gamepad2, Skull, Network, Globe, AlertTriangle, Copy, Check } from 'lucide-react';

interface BlockedDetailsProps {
  category: BlockCategory;
  blockedUrl: string;
}

export const BlockedDetails: React.FC<BlockedDetailsProps> = ({ category, blockedUrl }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(blockedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    const iconProps = { className: "h-10 w-10 text-white" };
    switch (category.iconName) {
      case 'ShieldAlert':
        return <ShieldAlert {...iconProps} />;
      case 'Gamepad2':
        return <Gamepad2 {...iconProps} />;
      case 'Skull':
        return <Skull {...iconProps} />;
      default:
        return <Network {...iconProps} />;
    }
  };

  // Color mappings based on category for special alerts
  const getColorClasses = () => {
    switch (category.id) {
      case 'csam':
        return {
          glow: 'from-red-600/20 to-rose-600/20',
          border: 'border-red-500/20',
          badge: 'bg-red-500/10 text-red-400 border-red-500/30',
          iconBg: 'bg-red-600',
        };
      case 'gambling':
        return {
          glow: 'from-amber-600/20 to-orange-600/20',
          border: 'border-amber-500/20',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          iconBg: 'bg-amber-600',
        };
      case 'security':
        return {
          glow: 'from-blue-600/20 to-indigo-600/20',
          border: 'border-blue-500/20',
          badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          iconBg: 'bg-blue-600',
        };
      default:
        return {
          glow: 'from-gray-600/20 to-slate-600/20',
          border: 'border-gray-500/20',
          badge: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
          iconBg: 'bg-gray-600',
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={`w-full glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden border ${colors.border} animate-slide-up`}>
      {/* Dynamic background glow */}
      <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br ${colors.glow} blur-3xl opacity-60 pointer-events-none`}></div>
      <div className={`absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-gradient-to-br ${colors.glow} blur-3xl opacity-30 pointer-events-none`}></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
        {/* Large graphic icon */}
        <div className={`p-4 rounded-2xl ${colors.iconBg} shadow-lg shadow-black/30 shrink-0 self-center md:self-start animate-pulse-slow`}>
          {getIcon()}
        </div>

        {/* Content detail */}
        <div className="flex-1 text-left w-full">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors.badge}`}>
              {category.badge}
            </span>
            <span className="bg-red-500/15 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              <span>Acceso Restringido</span>
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
            Se ha bloqueado la navegación a este sitio
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            {category.description}
          </p>

          {/* Locked URL display panel */}
          <div className="bg-black/35 rounded-xl border border-white/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="p-2 rounded-lg bg-white/5 text-gray-400 shrink-0">
                <Globe className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sitio Web Solicitado</p>
                <p className="text-sm md:text-base font-mono font-semibold text-lis-orange truncate select-all">
                  {blockedUrl || 'No especificado (url_vacia)'}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopy}
              disabled={!blockedUrl}
              className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 active:bg-white/15 text-gray-300 hover:text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all border border-white/10"
              title="Copiar URL bloqueada"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400 animate-bounce" />
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
        </div>
      </div>
    </div>
  );
};
