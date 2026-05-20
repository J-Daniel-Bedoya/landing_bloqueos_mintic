import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full glass-panel border-t border-white/5 mt-12 py-8 px-6 md:px-12 flex flex-col items-center justify-center gap-6 animate-slide-up [animation-delay:300ms]">
      
      {/* Essential Contact and Info Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-6 border-b border-white/5 text-left text-xs md:text-sm text-gray-400">
        
        {/* Column 1: Corporate Branding */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/lis/cropped-logo-1-32x32.png" 
              alt="Logística Integral Satelital" 
              className="h-7 w-7 rounded-full bg-white/10 p-0.5 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/lis/logo-300x200.png';
              }}
            />
            <span className="font-extrabold text-white tracking-wider uppercase">
              Logística Integral Satelital S.A.S.
            </span>
          </div>
          <p className="leading-relaxed text-xs text-gray-400">
            Proveedor regional de internet por fibra óptica y soluciones de conectividad con atención cercana en el occidente antioqueño.
          </p>
        </div>

        {/* Column 2: Contacto Directo */}
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-xs text-white tracking-wider uppercase">Contacto Directo</span>
          
          <div className="space-y-2.5">
            {/* Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-lis-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Dirección de Oficinas</p>
                <p className="text-xs text-gray-300">Carrera 13 # 9-45, Sopetrán, Antioquia</p>
              </div>
            </div>

            {/* Telephones */}
            <div className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-lis-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Líneas de Atención</p>
                <p className="text-xs text-gray-300">322 651 2970 · 310 593 0440</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-lis-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Correo Electrónico</p>
                <a href="mailto:lis.sopetran2018@gmail.com" className="text-xs text-gray-300 hover:text-lis-orange transition-colors">
                  lis.sopetran2018@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Horarios de atención */}
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-xs text-white tracking-wider uppercase">Horarios de atención</span>
          
          <div className="space-y-3">
            {/* Weekdays */}
            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-lis-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-300">Lunes a viernes:</p>
                <p className="text-xs text-gray-400 mt-0.5">7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.</p>
              </div>
            </div>

            {/* Saturdays */}
            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-lis-orange shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-300">Sábados en oficinas:</p>
                <p className="text-xs text-gray-400 mt-0.5">8:00 AM a 12:00 PM.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Legal Footnote (original important regulatory information) */}
      <div className="text-[10px] text-gray-500 max-w-4xl text-center leading-relaxed">
        <p>© {currentYear} Logística Integral Satelital S.A.S. Todos los derechos reservados.</p>
        <p className="mt-1">
          Página de advertencia de acceso restringido en cumplimiento con el artículo 8 de la Ley 679 de 2001, Ley 1336 de 2009, Ley 643 de 2001 y Ley 1273 de 2009. El filtro dinámico de contenidos es operado e integrado bajo tecnologías seguras provistas por FlashStart® para la mitigación automática de riesgos cibernéticos y contenidos no autorizados en la red.
        </p>
      </div>
    </footer>
  );
};
