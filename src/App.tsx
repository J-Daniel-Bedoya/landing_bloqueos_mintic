import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CsamLanding } from './components/CsamLanding';
import { GamblingLanding } from './components/GamblingLanding';
import { ShieldAlert, Gamepad2, ArrowRight, Eye, Settings2 } from 'lucide-react';

function App() {
  const [blockedUrl, setBlockedUrl] = useState('');
  const [activeView, setActiveView] = useState<'hub' | 'csam' | 'gambling'>('hub');
  const [showDemoSelector, setShowDemoSelector] = useState(false);

  // Parse path and query parameters
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const rawUrl = params.get('url') || params.get('domain') || '';
    const rawCat = params.get('cat') || params.get('category') || '';
    const showPreview = params.get('preview') === 'true' || params.get('demo') === 'true';

    // Set blocked URL
    if (rawUrl) {
      setBlockedUrl(decodeURIComponent(rawUrl));
    } else {
      setBlockedUrl('www.sitio-restringido-ejemplo.com/acceso');
    }

    // Determine category based on path, query param, or URL heuristics
    let detectedView: 'hub' | 'csam' | 'gambling' = 'hub';

    if (path.includes('/csam') || path.includes('/pornografia') || rawCat.toLowerCase() === 'csam') {
      detectedView = 'csam';
    } else if (path.includes('/gambling') || path.includes('/juegos') || rawCat.toLowerCase() === 'gambling') {
      detectedView = 'gambling';
    } else if (rawUrl) {
      // Heuristic detection based on URL
      const urlLower = rawUrl.toLowerCase();
      if (
        urlLower.includes('casino') || 
        urlLower.includes('bet') || 
        urlLower.includes('poker') || 
        urlLower.includes('juego') || 
        urlLower.includes('slots') || 
        urlLower.includes('azar')
      ) {
        detectedView = 'gambling';
      } else {
        // Default to CSAM for high-importance prevention layout if blocked from LIS filter
        detectedView = 'csam';
      }
    }

    setActiveView(detectedView);

    if (showPreview) {
      setShowDemoSelector(true);
    }
  }, []);

  const handleSwitchView = (view: 'hub' | 'csam' | 'gambling') => {
    setActiveView(view);
    // Adjust mock URL based on view for visual realism
    if (view === 'csam') {
      setBlockedUrl('www.sitio-sospechoso-abuso.org/index.html');
    } else if (view === 'gambling') {
      setBlockedUrl('www.casino-apuestas-ilegal.net/play');
    } else {
      setBlockedUrl('www.sitio-restringido-ejemplo.com/acceso');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 flex flex-col relative overflow-x-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-lis-blue/15 to-transparent blur-3xl rounded-full pointer-events-none -z-10"></div>

      {/* LIS Branded Header */}
      <Header />

      {/* Main container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8 z-10">
        
        {activeView === 'hub' ? (
          /* Hub Landing Selector (Visible if no specific route or parameter matches) */
          <div className="space-y-8 text-center animate-fade-in">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest border border-lis-orange/20 bg-lis-orange/10 text-lis-orange">
                Portal de Cumplimiento Normativo
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Módulos de Control y Filtros de Navegación
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Logística Integral Satelital opera bajo el cumplimiento estricto del marco legal colombiano y el Ministerio de las TIC para garantizar redes seguras y libres de contenidos ilegales.
              </p>
            </div>

            {/* Layout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* CSAM Card */}
              <div 
                onClick={() => handleSwitchView('csam')}
                className="group glass-panel rounded-2xl p-6 md:p-8 border border-red-500/10 hover:border-red-500/40 text-left cursor-pointer transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden bg-gradient-to-b from-black/10 to-red-950/5"
              >
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-red-600/10 blur-2xl group-hover:bg-red-600/20 transition-all pointer-events-none"></div>
                <div className="p-4 rounded-xl bg-red-600 shadow-md shadow-red-950/20 w-fit mb-6 text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-red-400 transition-colors">
                  <span>1. Protección Infantil (CSAM)</span>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                  Landing page obligatoria contra la explotación, abuso y pornografía infantil en Internet. Cumple con la <strong>Ley 679 de 2001</strong> y la <strong>Ley 1336 de 2009</strong> del MinTIC.
                </p>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                  <span>Ver plantilla de bloqueo</span>
                  <span className="text-red-500">•</span>
                </span>
              </div>

              {/* Gambling Card */}
              <div 
                onClick={() => handleSwitchView('gambling')}
                className="group glass-panel rounded-2xl p-6 md:p-8 border border-amber-500/10 hover:border-amber-500/40 text-left cursor-pointer transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden bg-gradient-to-b from-black/10 to-amber-950/5"
              >
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-amber-600/10 blur-2xl group-hover:bg-amber-600/20 transition-all pointer-events-none"></div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 shadow-md shadow-amber-950/20 w-fit mb-6 text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Gamepad2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-amber-400 transition-colors">
                  <span>2. Juegos de Azar Ilegales</span>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                  Landing page regulada para sitios web que operan sin concesión de <strong>Coljuegos</strong>. Aplica los principios de monopolio rentístico según la <strong>Ley 643 de 2001</strong>.
                </p>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <span>Ver plantilla de bloqueo</span>
                  <span className="text-amber-500">•</span>
                </span>
              </div>

            </div>

            {/* Quick integration snippet */}
            <div className="glass-panel rounded-xl p-4 border border-white/5 text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed mt-12">
              <span className="font-extrabold text-white uppercase tracking-wider block mb-1">Nota de Integración Técnica:</span>
              Para redirigir usuarios bloqueados por FlashStart, configure la URL de redirección usando los siguientes sub-rutas o parámetros:
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left font-mono text-[11px] bg-black/40 p-3 rounded-lg border border-white/5">
                <div>• Abuso Infantil: <code className="text-red-400">/csam</code> o <code className="text-red-400">?cat=csam</code></div>
                <div>• Juegos de Azar: <code className="text-amber-400">/gambling</code> o <code className="text-amber-400">?cat=gambling</code></div>
              </div>
            </div>
          </div>
        ) : activeView === 'csam' ? (
          <CsamLanding blockedUrl={blockedUrl} />
        ) : (
          <GamblingLanding blockedUrl={blockedUrl} />
        )}

      </main>

      {/* Floating Demo Mode Selector Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowDemoSelector(!showDemoSelector)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-panel hover:bg-white/10 text-xs font-bold text-gray-300 hover:text-white border border-white/10 hover:border-lis-orange/40 transition-all shadow-xl shadow-black/40"
        >
          <Settings2 className="h-4 w-4 text-lis-orange" />
          <span>{showDemoSelector ? 'Ocultar Selector de Pruebas' : 'Alternar Landings (Modo Demo)'}</span>
        </button>
      </div>

      {/* Demo Selector Panel Overlay */}
      {showDemoSelector && (
        <div className="fixed inset-x-0 bottom-0 bg-gray-950/95 border-t border-white/10 backdrop-blur-md p-4 md:p-6 z-40 animate-slide-up shadow-2xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="text-left flex items-start gap-3">
              <div className="p-2 rounded-lg bg-lis-orange/10 text-lis-orange shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">Panel de Pruebas & Control de Demo</h4>
                <p className="text-xs text-gray-400">
                  Simula la respuesta del filtro de red para validar ambas páginas de bloqueo requeridas por MinTIC Colombia.
                </p>
              </div>
            </div>

            {/* Selector buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => handleSwitchView('hub')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  activeView === 'hub'
                    ? 'bg-lis-blue-light border-blue-500 text-white'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                Panel General (Hub)
              </button>

              <button
                onClick={() => handleSwitchView('csam')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  activeView === 'csam'
                    ? 'bg-red-600 border-red-500 text-white shadow-md shadow-red-500/20'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-red-500/10 hover:text-white'
                }`}
              >
                1. Pornografía Infantil (Ley 679)
              </button>

              <button
                onClick={() => handleSwitchView('gambling')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  activeView === 'gambling'
                    ? 'bg-amber-600 border-amber-500 text-white shadow-md shadow-amber-500/20'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-amber-500/10 hover:text-white'
                }`}
              >
                2. Juegos de Azar (Coljuegos)
              </button>
            </div>

            <div className="text-[10px] text-gray-500 max-w-[200px] text-center md:text-right hidden lg:block leading-relaxed">
              * Redireccione a <br />
              <code className="text-lis-orange bg-black/40 px-1 py-0.5 rounded text-[9px] font-mono">/csam</code> o <code className="text-lis-orange bg-black/40 px-1 py-0.5 rounded text-[9px] font-mono">/gambling</code>
            </div>

          </div>
        </div>
      )}

      {/* LIS Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
