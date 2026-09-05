const Calculadoras = {
  // JUBILACIÓN COMPLETA
  calcularJubilacion: function(edadActual, cotizadoActual, salarioBruto) {
    const edad = parseInt(edadActual);
    const cotizado = parseFloat(cotizadoActual);
    const salario = parseFloat(salarioBruto);

    if (isNaN(edad) || isNaN(cotizado) || isNaN(salario) || edad < 16 || edad > 70) return null;

    // Determinar edad legal
    const anosCotizadosAlJubilar = cotizado + (65 - edad);
    const edadJubilacionLegal = (anosCotizadosAlJubilar >= 38.5) ? 65 : 67;
    const anosRestantes = Math.max(0, edadJubilacionLegal - edad);
    const cotizaciónTotalEstimada = cotizado + anosRestantes;

    // Estimación base reguladora (simplificada sobre salario bruto mensual)
    const baseMensualEstimada = (salario / 12) * 0.85; // Aproximación considerando aportaciones
    let porcentajePension = 0;

    if (cotizaciónTotalEstimada >= 36.5) {
      porcentajePension = 1.0; // 100%
    } else if (cotizaciónTotalEstimada >= 15) {
      porcentajePension = 0.5 + ((cotizaciónTotalEstimada - 15) * 0.023); // Crecimiento progresivo
    } else {
      porcentajePension = 0; // Sin pensión contributiva (< 15 años)
    }

    const pensionEstimadaMensual = baseMensualEstimada * porcentajePension;

    return {
      edadJubilacion: edadJubilacionLegal + " años",
      anosRestantes: anosRestantes + " años",
      cotizacionFinal: cotizaciónTotalEstimada.toFixed(1) + " años",
      pensionMensual: pensionEstimadaMensual > 0 ? pensionEstimadaMensual.toFixed(2) + " €/mes" : "Sin derecho a contributiva (<15 años)"
    };
  },

  // HIPOTECA
  calcularHipoteca: function(capital, interesAnual, anos) {
    const P = parseFloat(capital);
    const r = parseFloat(interesAnual);
    const t = parseInt(anos);

    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0) return null;

    const i = (r / 100) / 12;
    const n = t * 12;
    const cuota = (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    const totalPagado = cuota * n;

    return {
      cuota: cuota.toFixed(2) + " €/mes",
      totalPagado: totalPagado.toFixed(2) + " €",
      intereses: (totalPagado - P).toFixed(2) + " €"
    };
  },

  // SUELDO NETO
  calcularSueldo: function(brutoAnual, pagas, irpf) {
    const bruto = parseFloat(brutoAnual);
    const numPagas = parseInt(pagas);
    const retención = parseFloat(irpf) / 100;

    if (isNaN(bruto) || bruto <= 0) return null;

    const ss = bruto * 0.0635;
    const deduccionIRPF = bruto * retención;
    const netoAnual = bruto - ss - deduccionIRPF;

    return {
      netoMensual: (netoAnual / numPagas).toFixed(2) + " €/mes",
      netoAnual: netoAnual.toFixed(2) + " €",
      impuestosTotal: (ss + deduccionIRPF).toFixed(2) + " €"
    };
  },

  // INTERÉS COMPUESTO
  calcularInteres: function(capital, tasa, anos) {
    const P = parseFloat(capital);
    const r = parseFloat(tasa) / 100;
    const t = parseInt(anos);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const final = P * Math.pow(1 + r, t);
    return {
      montoFinal: final.toFixed(2) + " €",
      ganancias: (final - P).toFixed(2) + " €"
    };
  },

  // NOTA PAU
  calcularPAU: function(bach, ebau, m1, p1, m2, p2) {
    const b = parseFloat(bach);
    const e = parseFloat(ebau);
    if (isNaN(b) || isNaN(e) || b > 10 || e > 10) return null;

    const faseGeneral = (b * 0.6) + (e * 0.4);
    const optativas = (parseFloat(m1) * parseFloat(p1)) + (parseFloat(m2) * parseFloat(p2));

    return {
      notaFinal: Math.min(faseGeneral + optativas, 14).toFixed(2) + " / 14",
      faseGeneral: faseGeneral.toFixed(2) + " / 10"
    };
  }
};