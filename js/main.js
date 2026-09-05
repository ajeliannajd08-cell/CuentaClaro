document.addEventListener("DOMContentLoaded", () => {

  function showView(viewId) {
    document.querySelectorAll(".view-panel").forEach(panel => {
      panel.classList.remove("active-view");
    });
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add("active-view");
      window.scrollTo(0, 0);
    }
  }

  // Navegación por data-target
  document.querySelectorAll("[data-target]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-target");
      showView(targetView);
    });
  });

  const btnExplore = document.getElementById("btn-explore-calcs");
  if (btnExplore) {
    btnExplore.addEventListener("click", () => {
      showView("view-hipoteca");
    });
  }

  document.getElementById("logo-btn").addEventListener("click", (e) => {
    e.preventDefault();
    showView("view-home");
  });

  // Carga de contenido dinámico desde database.js
  if (typeof DB_CALCULADORAS !== "undefined") {
    if (document.getElementById("art-jubilacion")) document.getElementById("art-jubilacion").innerHTML = DB_CALCULADORAS.jubilacion.articulo;
    if (document.getElementById("art-hipoteca")) document.getElementById("art-hipoteca").innerHTML = DB_CALCULADORAS.hipoteca.articulo;
    if (document.getElementById("art-sueldo")) document.getElementById("art-sueldo").innerHTML = DB_CALCULADORAS.sueldo.articulo;
    if (document.getElementById("art-interes")) document.getElementById("art-interes").innerHTML = DB_CALCULADORAS.interes.articulo;
    if (document.getElementById("art-pau")) document.getElementById("art-pau").innerHTML = DB_CALCULADORAS.pau.articulo;
  }

  function renderNewsCard(item) {
    return `
      <div class="news-card">
        <div>
          <span class="category-tag ${item.tagClass}">${item.categoria}</span>
          <span class="news-date">${item.fecha}</span>
          <h3>${item.titulo}</h3>
          <p>${item.resumen}</p>
        </div>
        <div>
          <span class="news-link">Fuente: ${item.fuente}</span>
        </div>
      </div>
    `;
  }

  if (typeof DB_NOTICIAS !== "undefined") {
    const newsJubilacion = DB_NOTICIAS.filter(n => n.seccion === "jubilacion");
    const newsHipoteca = DB_NOTICIAS.filter(n => n.seccion === "hipoteca");
    const newsSueldo = DB_NOTICIAS.filter(n => n.seccion === "sueldo");

    if (document.getElementById("news-jubilacion")) document.getElementById("news-jubilacion").innerHTML = newsJubilacion.map(renderNewsCard).join("");
    if (document.getElementById("news-hipoteca")) document.getElementById("news-hipoteca").innerHTML = newsHipoteca.map(renderNewsCard).join("");
    if (document.getElementById("news-sueldo")) document.getElementById("news-sueldo").innerHTML = newsSueldo.map(renderNewsCard).join("");

    if (document.getElementById("home-news-container")) document.getElementById("home-news-container").innerHTML = DB_NOTICIAS.map(renderNewsCard).join("");
    if (document.getElementById("all-news-container")) document.getElementById("all-news-container").innerHTML = DB_NOTICIAS.map(renderNewsCard).join("");
  }

  // Eventos de Calculadoras (Funcionalidad idéntica)
  const btnJubila = document.getElementById("btn-calc-jubilacion");
  if (btnJubila) {
    btnJubila.addEventListener("click", () => {
      const e = document.getElementById("jubila-edad").value;
      const c = document.getElementById("jubila-cotizado").value;
      const s = document.getElementById("jubila-salario").value;
      const res = Calculadoras.calcularJubilacion(e, c, s);
      const out = document.getElementById("res-jubilacion");
      if (res) {
        out.innerHTML = `
          <div class="res-box"><label>Edad legal de jubilación:</label><strong>${res.edadJubilacion}</strong></div>
          <div class="res-box"><label>Años de trabajo restantes:</label><strong>${res.anosRestantes}</strong></div>
          <div class="res-box"><label>Cotización total estimada:</label><strong>${res.cotizacionFinal}</strong></div>
          <div class="res-box"><label>Pensión estimación inicial:</label><strong>${res.pensionMensual}</strong></div>
        `;
      }
    });
  }

  const btnHipo = document.getElementById("btn-calc-hipoteca");
  if (btnHipo) {
    btnHipo.addEventListener("click", () => {
      const cap = document.getElementById("hipoteca-capital").value;
      const int = document.getElementById("hipoteca-interes").value;
      const anos = document.getElementById("hipoteca-anos").value;
      const res = Calculadoras.calcularHipoteca(cap, int, anos);
      const out = document.getElementById("res-hipoteca");
      if (res) {
        out.innerHTML = `
          <div class="res-box"><label>Cuota mensual:</label><strong>${res.cuota}</strong></div>
          <div class="res-box"><label>Total intereses:</label><strong>${res.intereses}</strong></div>
          <div class="res-box"><label>Total coste hipoteca:</label><strong>${res.totalPagado}</strong></div>
        `;
      }
    });
  }

  const btnSueldo = document.getElementById("btn-calc-sueldo");
  if (btnSueldo) {
    btnSueldo.addEventListener("click", () => {
      const b = document.getElementById("sueldo-bruto").value;
      const p = document.getElementById("sueldo-pagas").value;
      const i = document.getElementById("sueldo-irpf").value;
      const res = Calculadoras.calcularSueldo(b, p, i);
      const out = document.getElementById("res-sueldo");
      if (res) {
        out.innerHTML = `
          <div class="res-box"><label>Sueldo Neto Mensual:</label><strong>${res.netoMensual}</strong></div>
          <div class="res-box"><label>Sueldo Neto Anual:</label><strong>${res.netoAnual}</strong></div>
          <div class="res-box"><label>Total Impuestos (SS + IRPF):</label><strong>${res.impuestosTotal}</strong></div>
        `;
      }
    });
  }

  const btnInteres = document.getElementById("btn-calc-interes");
  if (btnInteres) {
    btnInteres.addEventListener("click", () => {
      const c = document.getElementById("interes-capital").value;
      const t = document.getElementById("interes-tasa").value;
      const a = document.getElementById("interes-anos").value;
      const res = Calculadoras.calcularInteres(c, t, a);
      const out = document.getElementById("res-interes");
      if (res) {
        out.innerHTML = `
          <div class="res-box"><label>Capital Acumulado:</label><strong>${res.montoFinal}</strong></div>
          <div class="res-box"><label>Beneficios obtenidos:</label><strong>${res.ganancias}</strong></div>
        `;
      }
    });
  }

  const btnPAU = document.getElementById("btn-calc-pau");
  if (btnPAU) {
    btnPAU.addEventListener("click", () => {
      const b = document.getElementById("pau-bach").value;
      const e = document.getElementById("pau-ebau").value;
      const m1 = document.getElementById("pau-m1").value;
      const p1 = document.getElementById("pau-p1").value;
      const m2 = document.getElementById("pau-m2").value;
      const p2 = document.getElementById("pau-p2").value;
      const res = Calculadoras.calcularPAU(b, e, m1, p1, m2, p2);
      const out = document.getElementById("res-pau");
      if (res) {
        out.innerHTML = `
          <div class="res-box"><label>Nota de Admisión Final:</label><strong>${res.notaFinal}</strong></div>
          <div class="res-box"><label>Fase General (Bach + EBAU):</label><strong>${res.faseGeneral}</strong></div>
        `;
      }
    });
  }
});