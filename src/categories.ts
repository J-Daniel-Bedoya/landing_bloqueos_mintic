export interface BlockCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  alertClass: string;
  iconName: 'ShieldAlert' | 'Gamepad2' | 'Skull' | 'Network';
  laws: {
    title: string;
    description: string;
    articles: string[];
  }[];
  actions: {
    label: string;
    url: string;
    primary: boolean;
  }[];
}

export const CATEGORIES: Record<string, BlockCategory> = {
  csam: {
    id: 'csam',
    title: 'Explotación y Pornografía Infantil',
    badge: 'Bloqueo Legal Obligatorio - Ley 679/1336',
    description: 'En cumplimiento del artículo 8 de la Ley 679 de 2001 y la Ley 1336 de 2009, este sitio web ha sido bloqueado de manera preventiva ya que ha sido catalogado por las autoridades competentes como distribuidor o promotor de material de explotación, abuso sexual o pornografía infantil.',
    alertClass: 'glass-alert-csam border-red-500/30 text-red-200',
    iconName: 'ShieldAlert',
    laws: [
      {
        title: 'Ley 679 de 2001 (MinTIC)',
        description: 'Establece un régimen de prevención y de sanciones penales y administrativas contra la explotación, la pornografía y el turismo sexual con menores de edad, y obliga a todos los proveedores de servicios de internet en Colombia a implementar bloqueos inmediatos de estos sitios.',
        articles: [
          'Artículo 8: Obligación de los proveedores de servicios de Internet de establecer mecanismos técnicos de bloqueo.',
          'Decreto 1524 de 2002: Reglamentación del procedimiento de exclusión y bloqueo de páginas web.'
        ]
      },
      {
        title: 'Ley 1336 de 2009',
        description: 'Robustece las medidas contra la explotación sexual infantil en medios electrónicos y endurece las sanciones para quienes faciliten o alojen dicho contenido ilegal.',
        articles: [
          'Corresponsabilidad ciudadana en la denuncia inmediata de contenidos sospechosos en la red.'
        ]
      }
    ],
    actions: [
      { label: 'Denunciar en Te Protejo', url: 'https://www.teprotejo.org', primary: true },
      { label: 'Portal ICBF', url: 'https://www.icbf.gov.co', primary: false },
      { label: 'Denunciar en CAI Virtual Policía', url: 'https://caivirtual.policia.gov.co', primary: false }
    ]
  },
  gambling: {
    id: 'gambling',
    title: 'Juegos de Suerte y Azar No Autorizados',
    badge: 'Restricción Coljuegos - Ley 643/2001',
    description: 'Este sitio web se encuentra bloqueado debido a que ofrece actividades de juegos de suerte y azar, apuestas deportivas o casinos online sin contar con el respectivo contrato de concesión o autorización legal exigido por Coljuegos, el ente regulador de los juegos de suerte y azar en Colombia.',
    alertClass: 'glass-alert-gambling border-amber-500/30 text-amber-200',
    iconName: 'Gamepad2',
    laws: [
      {
        title: 'Ley 643 de 2001',
        description: 'Fija el régimen propio del monopolio rentístico de los juegos de suerte y azar en Colombia. Los recursos recaudados de los juegos de azar legalmente autorizados tienen como destino exclusivo la financiación del servicio público de salud de los colombianos.',
        articles: [
          'Artículo 4: Exclusividad en la operación. Toda actividad de suerte y azar no autorizada es considerada ilegal.',
          'Regulación Coljuegos: Resoluciones de bloqueo de dominios web que evaden aportes a la salud pública.'
        ]
      }
    ],
    actions: [
      { label: 'Ver Operadores Autorizados', url: 'https://www.coljuegos.gov.co', primary: true },
      { label: 'Reportar Juego Ilegal', url: 'https://www.coljuegos.gov.co/index.php?idcategoria=2153', primary: false }
    ]
  },
  security: {
    id: 'security',
    title: 'Amenaza de Seguridad Cibernética',
    badge: 'Protección de Red - Ley 1273/2009',
    description: 'El acceso a este dominio ha sido restringido de forma automatizada por el filtro de seguridad FlashStart en la red de Logística Integral Satelital. Se ha detectado comportamiento malicioso activo, como intento de robo de información (Phishing), distribución de software dañino (Malware) o suplantación de identidad financiera.',
    alertClass: 'glass-alert-security border-blue-500/30 text-blue-200',
    iconName: 'Skull',
    laws: [
      {
        title: 'Ley 1273 de 2009 (Delitos Informáticos)',
        description: 'Establece penas de cárcel y multas de alta cuantía contra las personas naturales o jurídicas que realicen conductas delictivas en medios electrónicos o redes de telecomunicaciones, con el fin de proteger la confidencialidad, integridad y disponibilidad de los datos personales.',
        articles: [
          'Artículo 269A: Acceso abusivo a un sistema informático.',
          'Artículo 269F: Violación de datos personales mediante sitios web falsos (phishing).'
        ]
      }
    ],
    actions: [
      { label: 'Conocer más de Seguridad Digital', url: 'https://www.mintic.gov.co/portal/inicio/Glosario/S/5144:Seguridad-digital', primary: true },
      { label: 'Soporte Técnico LIS', url: 'https://logisticaintegralsatelital.com/', primary: false }
    ]
  },
  general: {
    id: 'general',
    title: 'Filtro de Contenido / Restricción General',
    badge: 'Política de Red Segura',
    description: 'El dominio solicitado ha sido restringido debido a las políticas de filtrado y administración de ancho de banda contratadas para esta red, o porque se trata de una categoría de contenidos restringida dentro de la política de navegación del servicio.',
    alertClass: 'glass-alert-general border-gray-500/30 text-gray-200',
    iconName: 'Network',
    laws: [
      {
        title: 'Políticas de Conectividad y Uso de Red',
        description: 'Los servicios de conectividad pueden estar sujetos a filtros de contenido dinámicos con el objetivo de preservar la integridad de la red, evitar el consumo excesivo de banda ancha en usos no autorizados o asegurar ambientes de navegación familiares y productivos.',
        articles: [
          'Condiciones del contrato de suministro de Internet.',
          'Configuraciones de perfiles de control parental solicitadas por el titular del servicio.'
        ]
      }
    ],
    actions: [
      { label: 'Portal de Soporte LIS', url: 'https://logisticaintegralsatelital.com/', primary: true }
    ]
  }
};
