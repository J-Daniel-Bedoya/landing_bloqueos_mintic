import React from 'react';
import { ShieldCheck, Server } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full glass-panel border-b border-white/5 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-40">
      {/* Brand logo and name */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-lis-orange to-blue-500 opacity-20 blur group-hover:opacity-40 transition duration-300"></div>
          <img 
            src="/assets/lis/logo.png" 
            alt="Logística Integral Satelital Logo" 
            className="h-12 w-auto relative object-contain bg-white/5 p-1.5 rounded-lg"
            onError={(e) => {
              // Fallback if logo is missing
              (e.target as HTMLImageElement).src = '/assets/lis/cropped-logo-e1619636974166.png';
            }}
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
            LOGÍSTICA
            <span className="text-lis-orange font-medium text-sm px-1.5 py-0.5 rounded bg-lis-orange/10">INTEGRAL</span>
          </span>
          <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
            Satelital & Fibra Óptica
          </span>
        </div>
      </div>

      {/* Security Status Info */}
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
          <Server className="h-4 w-4 text-gray-500" />
          <span>Filtro DNS: <strong className="text-gray-200">FlashStart® Active</strong></span>
        </div>

        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Red Protegida Activa</span>
        </div>
      </div>
    </header>
  );
};
