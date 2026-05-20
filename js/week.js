const days = {
  lun: {
    title: '🛌 Lunes 18 — Descanso completo',
    content: '<strong>Fuerza: ❌ No.</strong> Descanso total. Tu cuerpo reconstruye músculo en reposo, no en el gym. El lunes es sagrado en este plan.',
    color: 'var(--muted)'
  },
  mar: {
    title: '🏃 Martes 19 — Rodaje suave 35-40 min',
    content: 'Después del rodaje puedes añadir <strong>10 min de core ligero</strong> (plancha, dead bug, bird-dog). Solo core — nada de piernas. Las piernas deben llegar frescas al domingo. <span style="color:var(--accent)">Esta semana: Core post-rodaje ✓</span>',
    color: '#4a9ee0'
  },
  mie: {
    title: '✅ Miércoles 20 — La ventana de fuerza',
    content: '<strong>Esta semana: 15 min de Core muy ligero.</strong> Plancha 3×30s · Bird-dog 3×10 · Dead bug 3×10. Sin piernas. Sin fatiga. Protege el domingo. Desde semana 02: aquí irá la sesión de Fuerza A completa (40 min).',
    color: 'var(--accent)'
  },
  jue: {
    title: '⚡ Jueves 21 — Activación pre-carrera',
    content: '<strong>Fuerza: ❌ No.</strong> Solo el entrenamiento de activación planificado: 25 min suave + 4-5 aceleraciones. Las piernas se preparan para el domingo. Añadir fuerza hoy sería un error.',
    color: '#4a9ee0'
  },
  vie: {
    title: '📦 Viernes 22 — Logística de carrera',
    content: '<strong>Fuerza: ❌ No.</strong> Prepara el dorsal, la ropa, las zapatillas. Cena de carbohidratos. Acuéstate pronto. Tu único trabajo hoy es llegar descansado al domingo.',
    color: 'var(--muted)'
  },
  sab: {
    title: '🧘 Sábado 23 — Reposo total',
    content: '<strong>Fuerza: ❌ Absolutamente no.</strong> Paseo suave de 15 min máximo. Prepara la cabeza para la carrera. Hidratación. Sueño. Mañana es el día.',
    color: 'var(--muted)'
  },
  dom: {
    title: '🏁 Domingo 24 — CARRERA 10K Canarias7',
    content: 'Salida 9:00h · Fuente Luminosa · <strong>Estrategia: split negativo.</strong> Km 0-2 a 6:50/km aunque te adelanten todos. Km 2-8 a 6:10/km. Km 8-10 a tope. Este es el objetivo de toda la semana.',
    color: 'var(--accent2)'
  }
};

function showDay(day) {
  const d = days[day];
  const el = document.getElementById('day-detail');
  el.innerHTML = `<h3 style="color:${d.color}">${d.title}</h3><p>${d.content}</p>`;
  el.style.borderColor = d.color;
  document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active'));
}
