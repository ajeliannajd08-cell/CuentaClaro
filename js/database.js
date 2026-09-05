const DB_CALCULADORAS = {
  jubilacion: {
    articulo: `
      <h3>1. Normativa Legal sobre la Edad de Jubilación</h3>
      <p>Según la Ley 27/2011 sobre la actualización del sistema de la Seguridad Social, la edad ordinaria de jubilación en España depende del total de años cotizados:</p>
      <ul>
        <li><strong>Jubilación a los 65 años:</strong> Requiere cotizaciones acumuladas de al menos 38 años y 6 meses.</li>
        <li><strong>Jubilación a los 67 años:</strong> Edad exigible para quienes no alcancen los 38,5 años cotizados.</li>
      </ul>
      <h3>2. Cálculo de la Base Reguladora y Pensión</h3>
      <p>La base reguladora para estimar la pensión se calcula sumando las bases de cotización de los últimos 25 años (300 meses) y dividiendo el resultado entre 350.</p>
      <p><em>Fuente oficial: Seguridad Social (Ministerio de Inclusión, Seguridad Social y Migraciones).</em></p>
    `
  },
  hipoteca: {
    articulo: `
      <h3>1. Sistema Francés de Amortización</h3>
      <p>Es el modelo regulado en España para el cálculo de hipotecas. Establece cuotas periódicas constantes donde al inicio del préstamo se abonan mayoritariamente intereses.</p>
      <h4>Fórmula matemática oficial</h4>
      <p><strong>Cuota = [Capital × i × (1 + i)^n] / [(1 + i)^n - 1]</strong></p>
      <p><em>Fuente oficial: Banco de España (Portal del Cliente Bancario) y Ley 5/2019 (BOE).</em></p>
    `
  },
  sueldo: {
    articulo: `
      <h3>1. Retenciones Oficiales en la Nómina</h3>
      <p>El paso del sueldo bruto al neto implica descontar la cotización a la Seguridad Social (entorno al 6,35% para contingencias comunes) y la retención a cuenta del IRPF fijada por la Agencia Tributaria.</p>
      <p><em>Fuente oficial: Agencia Estatal de Administración Tributaria (AEAT).</em></p>
    `
  },
  interes: {
    articulo: `
      <h3>1. Fórmula de Capitalización Compuesta</h3>
      <p>Calcula el rendimiento donde los beneficios se reinvierten periódicamente para generar nuevos intereses.</p>
      <p><strong>Monto Final = Capital Inicial × (1 + Tasa)^Años</strong></p>
      <p><em>Fuente oficial: Comisión Nacional del Mercado de Valores (CNMV).</em></p>
    `
  },
  pau: {
    articulo: `
      <h3>1. Baremo de la Nota de Admisión (Sobre 14 Puntos)</h3>
      <p>La calificación oficial de la PAU / EBAU combina el 60% de la Nota Media de Bachillerato con el 40% de la Fase Obligatoria, sumando hasta 4 puntos adicionales por las asignaturas específicas.</p>
      <p><em>Fuente oficial: Ministerio de Educación, Formación Profesional y Deportes.</em></p>
    `
  }
};

/* BASE DE DATOS DE NOTICIAS CLASIFICADAS POR TEMA */
const DB_NOTICIAS = [
  {
    seccion: "jubilacion",
    categoria: "Seguridad Social",
    tagClass: "tag-orange",
    titulo: "Cambios en el cálculo de la pensión para carreras de cotización irregulares",
    fecha: "Actualizado esta semana",
    resumen: "Explicación detallada de cómo afecta la integración de lagunas de cotización en el cálculo final de la base reguladora.",
    fuente: "Seguridad Social / BOE"
  },
  {
    seccion: "hipoteca",
    categoria: "Vivienda & Hipotecas",
    tagClass: "tag-blue",
    titulo: "Novedades en los tipos de interés de las hipotecas fijas y variables",
    fecha: "Actualizado esta semana",
    resumen: "El Banco de España publica la evolución media del Euríbor y las condiciones de financiación aplicadas por las entidades bancarias.",
    fuente: "Banco de España"
  },
  {
    seccion: "sueldo",
    categoria: "Fiscalidad",
    tagClass: "tag-green",
    titulo: "Revisión de tramos de IRPF y mínimos personales exentos de retención",
    fecha: "Actualizado esta semana",
    resumen: "Análisis práctico de las retenciones en nómina según los últimos ajustes de la Agencia Tributaria para rentas del trabajo.",
    fuente: "Agencia Tributaria (AEAT)"
  }
];