---
icon: fas fa-code-branch
order: 2
title: Projets
layout: page
---

<style>
.proj-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.proj-filters .filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

.proj-filters .filter-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.6;
  margin-right: 0.25rem;
}

.filter-btn {
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  border: 1.5px solid var(--border-color, #ccc);
  background: transparent;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.15s ease;
  color: inherit;
}

.filter-btn:hover { opacity: 0.8; }

.filter-btn.active {
  color: #fff;
}

.filter-btn[data-theme="all"].active   { background: #6c757d; border-color: #6c757d; }
.filter-btn[data-theme="rl"].active    { background: #7c3aed; border-color: #7c3aed; }
.filter-btn[data-theme="nn"].active    { background: #2563eb; border-color: #2563eb; }
.filter-btn[data-theme="or"].active    { background: #059669; border-color: #059669; }
.filter-btn[data-theme="ml"].active    { background: #d97706; border-color: #d97706; }

.filter-btn[data-level="all"].active        { background: #6c757d; border-color: #6c757d; }
.filter-btn[data-level="debutant"].active   { background: #16a34a; border-color: #16a34a; }
.filter-btn[data-level="intermediaire"].active { background: #d97706; border-color: #d97706; }
.filter-btn[data-level="avance"].active     { background: #dc2626; border-color: #dc2626; }

.filter-separator {
  width: 100%;
  height: 1px;
  background: var(--border-color, #ccc);
  opacity: 0.4;
  margin: 0.25rem 0;
}

.proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.25rem;
}

.proj-card {
  border: 1px solid var(--border-color, #dee2e6);
  border-radius: 10px;
  padding: 1.25rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background: var(--card-bg, transparent);
}

.proj-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.proj-card.hidden { display: none; }

.proj-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.proj-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}

.proj-subtitle {
  font-size: 0.8rem;
  opacity: 0.65;
  margin: 0;
}

.proj-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.25rem;
}

.badge {
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge-rl    { background: #ede9fe; color: #5b21b6; }
.badge-nn    { background: #dbeafe; color: #1d4ed8; }
.badge-or    { background: #d1fae5; color: #065f46; }
.badge-ml    { background: #fef3c7; color: #92400e; }

.badge-debutant      { background: #dcfce7; color: #166534; }
.badge-intermediaire { background: #fef9c3; color: #854d0e; }
.badge-avance        { background: #fee2e2; color: #991b1b; }

.badge-done     { background: #d1fae5; color: #065f46; }
.badge-proposed { background: #f3f4f6; color: #6b7280; border: 1px solid #d1d5db; }

.proj-desc {
  font-size: 0.85rem;
  line-height: 1.55;
  opacity: 0.8;
  flex: 1;
}

.proj-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.tech-tag {
  font-size: 0.68rem;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  background: var(--code-bg, #f3f4f6);
  color: var(--code-color, #374151);
  font-family: monospace;
}

.proj-count {
  font-size: 0.8rem;
  opacity: 0.55;
  margin-bottom: 0.75rem;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  opacity: 0.5;
  font-size: 0.9rem;
}
</style>

<div class="proj-filters">
  <div class="filter-group">
    <span class="filter-label">Thème</span>
    <button class="filter-btn active" data-theme="all">Tous</button>
    <button class="filter-btn" data-theme="rl">🤖 RL / Multi-Agent</button>
    <button class="filter-btn" data-theme="nn">🧠 Réseaux de Neurones</button>
    <button class="filter-btn" data-theme="or">📐 Optimisation / OR</button>
    <button class="filter-btn" data-theme="ml">📊 Machine Learning</button>
  </div>
  <div class="filter-separator"></div>
  <div class="filter-group">
    <span class="filter-label">Niveau</span>
    <button class="filter-btn active" data-level="all">Tous</button>
    <button class="filter-btn" data-level="debutant">🟢 Débutant</button>
    <button class="filter-btn" data-level="intermediaire">🟡 Intermédiaire</button>
    <button class="filter-btn" data-level="avance">🔴 Avancé</button>
  </div>
</div>

<p class="proj-count" id="proj-count"></p>

<div class="proj-grid" id="proj-grid">

{% for p in site.data.projects %}
<div class="proj-card"
  data-themes="{{ p.themes | join: ' ' }}"
  data-level="{{ p.level }}"
  data-status="{{ p.status }}">

  <div class="proj-card-header">
    <div>
      <p class="proj-title">{{ p.title }}</p>
      <p class="proj-subtitle">{{ p.subtitle }}</p>
    </div>
    <span class="badge badge-{{ p.status }}">
      {% if p.status == 'done' %}✓ Réalisé{% else %}Proposé{% endif %}
    </span>
  </div>

  <div class="proj-badges">
    {% for t in p.themes %}
      {% if t == 'rl' %}<span class="badge badge-rl">RL / Multi-Agent</span>{% endif %}
      {% if t == 'nn' %}<span class="badge badge-nn">Réseaux de Neurones</span>{% endif %}
      {% if t == 'or' %}<span class="badge badge-or">Optimisation / OR</span>{% endif %}
      {% if t == 'ml' %}<span class="badge badge-ml">Machine Learning</span>{% endif %}
    {% endfor %}
    <span class="badge badge-{{ p.level }}">
      {% if p.level == 'debutant' %}Débutant
      {% elsif p.level == 'intermediaire' %}Intermédiaire
      {% else %}Avancé{% endif %}
    </span>
  </div>

  <p class="proj-desc">{{ p.description | strip_newlines | strip }}</p>

  <div class="proj-tech">
    {% for t in p.tech %}<span class="tech-tag">{{ t }}</span>{% endfor %}
  </div>

</div>
{% endfor %}

<div class="no-results hidden" id="no-results">Aucun projet ne correspond aux filtres sélectionnés.</div>

</div>

<script>
(function () {
  let activeTheme = 'all';
  let activeLevel = 'all';

  const cards = document.querySelectorAll('.proj-card');
  const countEl = document.getElementById('proj-count');
  const noResults = document.getElementById('no-results');

  function applyFilters() {
    let visible = 0;
    cards.forEach(function (card) {
      const themes = card.dataset.themes.split(' ');
      const level  = card.dataset.level;

      const themeOk = activeTheme === 'all' || themes.includes(activeTheme);
      const levelOk = activeLevel === 'all' || level === activeLevel;

      if (themeOk && levelOk) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    countEl.textContent = visible + ' projet' + (visible > 1 ? 's' : '') + ' affiché' + (visible > 1 ? 's' : '');
    noResults.classList.toggle('hidden', visible > 0);
  }

  document.querySelectorAll('.filter-btn[data-theme]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn[data-theme]').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeTheme = btn.dataset.theme;
      applyFilters();
    });
  });

  document.querySelectorAll('.filter-btn[data-level]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn[data-level]').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeLevel = btn.dataset.level;
      applyFilters();
    });
  });

  applyFilters();
})();
</script>
