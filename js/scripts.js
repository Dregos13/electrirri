/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// --- datos de cada servicio ---
const serviceDetails = {
    instalDispo: {
      title: 'Instalación de dispositivos de iluminación',
      description: 'Montaje profesional de lámparas, plafones y apliques en interior.',
      tasks: [
        'Inspección del punto de luz existente',
        'Tendido o ampliación de cableado necesario',
        'Fijación y conexionado del dispositivo',
        'Pruebas de funcionamiento y seguridad'
      ]
    },
    instalExterior: {
      title: 'Instalación de iluminación exterior',
      description: 'Colocación de focos y apliques para jardín, fachadas y terrazas.',
      tasks: [
        'Selección de luminarias resistentes al clima',
        'Instalación de toma estanca y protección IP',
        'Montaje en pared o pérgola',
        'Verificación de niveles lumínicos'
      ]
    },
    instalTomas: {
      title: 'Instalación de tomas eléctricas e interruptores',
      description: 'Añadimos nuevos enchufes e interruptores donde los necesites.',
      tasks: [
        'Determinación del circuito adecuado',
        'Apertura de caja empotrada',
        'Colocación de mecanismos y conexiones',
        'Chequeo de polaridad y puesta a tierra'
      ]
    },
    redisTomas: {
      title: 'Redistribución de tomas eléctricas e interruptores',
      description: 'Reordenamos puntos de luz y enchufes para optimizar tu espacio.',
      tasks: [
        'Planificación de nueva ubicación',
        'Desmontaje y reutilización de cableado existente',
        'Instalación en los nuevos puntos',
        'Pruebas de carga'
      ]
    },
    reparTomas: {
      title: 'Reparación de tomas eléctricas e interruptores',
      description: 'Reparamos averías, contactos flojos o mecanismos estropeados.',
      tasks: [
        'Diagnóstico de fallo',
        'Sustitución de mecanismos dañados',
        'Ajuste de conexiones',
        'Prueba final de seguridad'
      ]
    },
    cambioFusibles: {
      title: 'Cambio de fusibles',
      description: 'Reemplazo rápido de fusibles quemados en tu cuadro eléctrico.',
      tasks: [
        'Localización del fusible fundido',
        'Retirada segura del fusible dañado',
        'Instalación de fusible nuevo acorde al circuito',
        'Revisión de posibles sobrecargas'
      ]
    },
    cambioResistencias: {
      title: 'Cambio de resistencias térmicas eléctricas',
      description: 'Sustitución de resistencias en equipos de calefacción o climatización.',
      tasks: [
        'Desmontaje del elemento térmico',
        'Instalación de resistencia nueva',
        'Conexión y ajuste de parámetros',
        'Verificación de funcionamiento'
      ]
    },
    cambioCuadros: {
      title: 'Cambio o renovación de cuadros eléctricos',
      description: 'Actualización o reemplazo completo de tu cuadro de protección.',
      tasks: [
        'Desconexión y retirada del cuadro antiguo',
        'Montaje de cuadro modular nuevo',
        'Reconfiguración de líneas y magnetotérmicos',
        'Pruebas de aislamiento y protecciones'
      ]
    },
    inspecciones: {
      title: 'Inspecciones eléctricas',
      description: 'Chequeo normativo de tu instalación para asegurar el cumplimiento.',
      tasks: [
        'Medición de continuidad y aislamiento',
        'Revisión de diferenciales y protecciones',
        'Emisión de informe técnico',
        'Asesoría para posibles mejoras'
      ]
    },
    instalAparatos: {
      title: 'Instalación de aparatos eléctricos',
      description: 'Montaje y conexionado de electrodomésticos y equipos fijos.',
      tasks: [
        'Comprobación de requisitos de carga',
        'Tendido de circuitos dedicados',
        'Conexionado según manual del fabricante',
        'Pruebas de correcto arranque'
      ]
    },
    instalCableado: {
      title: 'Instalación de cableado eléctrico',
      description: 'Tendido completo de cables para obra nueva o reformas.',
      tasks: [
        'Diseño de trazado',
        'Colocación de tubo y canalizaciones',
        'Tendido de conductores',
        'Conexionado a cuadro y puntos finales'
      ]
    },
    instalCargadores: {
      title: 'Instalación de cargadores de coches eléctricos',
      description: 'Instalación de wallboxes y puntos de recarga para vehículo eléctrico.',
      tasks: [
        'Verificación de potencia disponible',
        'Instalación de línea dedicada al cuadro',
        'Montaje y conexionado del cargador',
        'Certificación de puesta en marcha'
      ]
    },
    reparCableado: {
      title: 'Reparación de cableado eléctrico',
      description: 'Solución de cortocircuitos, roturas o corrosión en cables.',
      tasks: [
        'Localización de la avería',
        'Sustitución o empalme de tramos dañados',
        'Aislamiento y sujeción adecuada',
        'Pruebas de carga y aislamiento'
      ]
    },
    reparCuadros: {
      title: 'Reparación de cuadros eléctricos',
      description: 'Reparación de fallos en magnetotérmicos, diferenciales y bornes.',
      tasks: [
        'Identificación de componentes averiados',
        'Reemplazo o ajuste de mecanimos',
        'Revisión de tensiones y disparos',
        'Informe de estado'
      ]
    },
    reparGen: {
      title: 'Reparaciones generales',
      description: 'Servicio integral para todo tipo de averías eléctricas.',
      tasks: [
        'Diagnóstico in situ',
        'Reparación o sustitución de componentes',
        'Verificación de seguridad',
        'Consejos para mantenimiento futuro'
      ]
    }
  };
  
  // --- comportamiento interactivo ---
  document.querySelectorAll('#services-list button').forEach(btn => {
    btn.addEventListener('click', () => {
      // estilo de activo
      document.querySelectorAll('#services-list .active')
        .forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
  
      const key = btn.getAttribute('data-service');
      const svc = serviceDetails[key];
      const container = document.getElementById('service-detail');
  
      // generar contenido
      let html = `<h3>${svc.title}</h3>
                  <p>${svc.description}</p>
                  <h5>¿Qué incluye?</h5>
                  <ul>`;
      svc.tasks.forEach(t => html += `<li>${t}</li>`);
      html += `</ul>`;
  
      container.innerHTML = html;
    });
  });
  