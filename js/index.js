const TOTAL_WEEKS  = 41;
const DONE_WEEKS   = 1;
const WEEK1_START  = new Date('2026-05-18'); // lunes 18 mayo

// Barra de progreso
document.getElementById('pct').textContent = `${DONE_WEEKS} / ${TOTAL_WEEKS} semanas`;
document.getElementById('bar').style.width = Math.round((DONE_WEEKS / TOTAL_WEEKS) * 100) + '%';

// Formato de fecha: "18 May"
const fmt = d => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
                  .replace('.', '');

const grid = document.getElementById('grid');

for (let w = 1; w <= TOTAL_WEEKS; w++) {
    const num   = String(w).padStart(2, '0');
    const start = new Date(WEEK1_START);
    start.setDate(WEEK1_START.getDate() + (w - 1) * 7);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    const card = document.createElement('a');
    card.href  = `pages/week${num}.html`;
    card.className = 'card';
    card.style.animationDelay = `${(w - 1) * 40}ms`;
    card.setAttribute('aria-label', `Semana ${w} — ${fmt(start)} al ${fmt(end)}`);

    card.innerHTML = `
        <div>
            <p class="card-week">Week</p>
            <p class="card-number">${num}</p>
        </div>
        <div class="card-meta">
            <span class="card-dates">${fmt(start)}<br>${fmt(end)}</span>
            <span class="card-arrow">→</span>
        </div>
    `;

    grid.appendChild(card);
}
