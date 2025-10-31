    // Helpers
    const $ = (sel, ctx=document) => ctx.querySelector(sel);
    const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

    const AREAS = [
      { key:'cnae', label:'NÚCLEO TRIB.', selector:'.area-cnae' },
      { key:'cfop', label:'CFOP', selector:'.area-cfop' },
      { key:'ncm',  label:'NCM',  selector:'.area-ncm'  },
      { key:'cst',  label:'CST',  selector:'.area-cst'  },
      { key:'imp',  label:'TRIBUTOS', selector:'.area-imp' },
      { key:'ref',  label:'REF. TRIB.', selector:'.area-ref' },
    ];

    function updateRangeBadges(){
      $$('input[type="range"]').forEach(r=>{
        const out = document.querySelector(`.range-value[data-for="${r.id}"]`);
        if(out) out.textContent = r.value;
      });
    }
    function mean(nums){ return nums.length ? nums.reduce((a,b)=>a+Number(b),0) / nums.length : 0; }

    // Card thresholds (percentual médio 0–100)
    function statusClass(percent){
      if(percent >= 75) return 'success';
      if(percent > 25 && percent <= 74) return 'warning';
      if(percent <= 25) return 'danger';
      return 'danger';
    }

    function statusLabel(percent){
      if(percent >= 75) return 'Domina o Assunto';
      if(percent > 25 && percent <= 74) return 'Precisa Melhorar';
      if(percent <= 25) return 'Prioridade de Estudo';
      return 'Prioridade de Estudo';
    }

    // Bar thresholds (total 0–50)
    function barClass(total){
      if(total >= 41) return 'success';
      if(total > 12 && total <= 40) return 'warning';
      if(total <= 12) return 'danger';
      return 'danger';
    }

    function computeResults(){
      const results = {};
      AREAS.forEach(area=>{
        const sliders = $$(area.selector).map(el => Number(el.value));
        const avg = mean(sliders);
        const percent = Math.round((avg/10)*100); // 0–100
        const total = sliders.reduce((a,b)=>a+b,0); // 0–30
        results[area.key] = { label: area.label, avg, percent, total };
      });
      return results;
    }

    function renderCards(results){
      const row = $('#cardsRow');
      row.innerHTML = '';
      AREAS.forEach(area=>{
        const { label, percent } = results[area.key];
        const klass = statusClass(percent);
        const tag   = statusLabel(percent);
        const bgMap = { success:'bg-success text-white', warning:'bg-warning', danger:'bg-danger text-white' };
        const badgeClass = { success:'text-bg-success', warning:'text-bg-warning', danger:'text-bg-danger' }[klass];
        const col = document.createElement('div');

        col.className = 'col-12 col-md-6 col-xl-4';
        col.innerHTML = `
          <div class="card shadow-sm result-card ${klass}">
            <div class="card-header fw-semibold">${label}</div>
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <div class="percent">${percent}%</div>                  
                </div>
                <span class="badge ${badgeClass}">${tag}</span>
              </div>
              <div class="progress" role="progressbar" aria-label="Progresso ${label}" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar ${bgMap[klass] || ''}" style="width:${percent}%"></div>
              </div>
            </div>
          </div>`;
        row.appendChild(col);
      });
    }

    function renderBarChart(results){
      const body = $('#chartBody');
      body.innerHTML = '';
      AREAS.forEach(area=>{
        const { label, total } = results[area.key];
        const klass = barClass(total);
        const widthPct = Math.max(0, Math.min(100, Math.round((total/50)*100)));
        const fillClass = {
          success:'bg-success',
          warning:'bg-warning',
          danger:'bg-danger'
        }[klass];

        const row = document.createElement('div');
        row.className = 'chart-row';
        row.innerHTML = `
          <div class="chart-label">${label}</div>
          <div class="chart-bar" aria-label="Total ${label}" role="img">
            <div class="chart-fill ${fillClass}" style="width:${widthPct}%"></div>
          </div>
          <div class="chart-value">${(total*100)/50}%</div>
        `;
        body.appendChild(row);
      });
    }

    // RADAR CHART (Chart.js)
    let radarChartInstance = null;
    function renderRadarChart(results){
      const labels = AREAS.map(a => results[a.key].label);
      const dataPct = AREAS.map(a => results[a.key].percent); // 0–100

      const ctx = document.getElementById('radarChart').getContext('2d');

      if(radarChartInstance){
        radarChartInstance.data.labels = labels;
        radarChartInstance.data.datasets[0].data = dataPct;
        radarChartInstance.update();
        return;
      }

      radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels,
          datasets: [{
            // label: 'Percentual Médio',
            data: dataPct,
            fill: true,
            backgroundColor: 'rgba(0,90,52,0.15)',
            borderColor: 'rgba(0,90,52,0.85)',
            pointBackgroundColor: 'rgba(0,90,52,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0,90,52,1)'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => `${c.formattedValue}%` } }
          },
          scales: {
            r: {
              beginAtZero: true, min:0, max:100,
              ticks: { stepSize: 20, showLabelBackdrop: false },
              grid: { color: 'rgba(0,0,0,0.08)' },
              angleLines: { color: 'rgba(0,0,0,0.08)' },
              pointLabels: { font: { size: 12 } }
            }
          },
          elements: { line: { borderWidth: 2 } }
        }
      });
    }

    // ALERTS (dinâmicos)
    function listAreas(arr){
      if(arr.length === 0) return '<em>Nenhuma</em>';
      return '<ul class="mb-0">' + arr.map(a => `<li>${a}</li>`).join('') + '</ul>';
    }

    function renderAlerts(results){
      // Categorias específicas para os alerts:
      // Sucesso: >75%
      // Aviso: 26%–74% (inclusive)
      // Perigo: <25%
      const successAreas = [];
      const warningAreas = [];
      const dangerAreas  = [];

      AREAS.forEach(a=>{
        const p = results[a.key].percent;
        if(p > 75){ successAreas.push(results[a.key].label); }
        else if(p >= 26 && p <= 74){ warningAreas.push(results[a.key].label); }
        else if(p < 26){ dangerAreas.push(results[a.key].label); }
      });

      const successRecom = 'Aproveite essas áreas fortes para liderar projetos, treinar a equipe e posicionar-se como referência em Notas Fiscais e Reforma Tributária.';
      const warningRecom = 'Defina um plano de estudo de 3 a 6 meses com metas semanais e prática em casos reais para elevar essas competências ao nível avançado.';
      const dangerRecom  = 'Aja agora: priorize capacitação imediata nessas áreas, pois a Reforma Tributária inicia em outubro/2025 e a falta de domínio pode afetar sua atuação profissional.';

      $('#alertsSection').innerHTML = `
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading mb-2">✅ Domina o Assunto [Pontuação acima de 75%]</h4>
          <p class="mb-1"><strong>Áreas:</strong></p>
          ${listAreas(successAreas)}
          <p class="mb-0 mt-2"><strong>Recomendação:</strong> ${successRecom}</p>
        </div>

        <div class="alert alert-warning" role="alert">
          <h4 class="alert-heading mb-2">⚠️ Precisa Melhorar [Pontuação entre 26% e 74%]</h4>
          <p class="mb-1"><strong>Áreas:</strong></p>
          ${listAreas(warningAreas)}
          <p class="mb-0 mt-2"><strong>Recomendação:</strong> ${warningRecom}</p>
        </div>

        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading mb-2">🚨 Prioridade de Estudo [Pontuação abaixo de 25%]</h4>
          <p class="mb-1"><strong>Áreas:</strong></p>
          ${listAreas(dangerAreas)}
          <p class="mb-0 mt-2"><strong>Recomendação:</strong> ${dangerRecom}</p>
        </div>
      `;
    }

    function calculateAndShow(){
      const results = computeResults();
      renderCards(results);
      renderBarChart(results);
      renderRadarChart(results);
      renderAlerts(results);
      $('#results').scrollIntoView({behavior:'smooth', block:'start'});
    }

    // Eventos
    document.addEventListener('DOMContentLoaded', ()=>{
      updateRangeBadges();

      // Sliders
      $$( 'input[type="range"]' ).forEach(r=>{
        r.addEventListener('input', ()=>{
          updateRangeBadges();
          if($('#autoUpdate').checked){
            const results = computeResults();
            renderCards(results);
            renderBarChart(results);
            renderRadarChart(results);
            renderAlerts(results);
          }
        });
      });

      // Botões
      // $('#calcBtn').addEventListener('click', calculateAndShow);
      
      // $('#resetBtn').addEventListener('click', ()=>{
      //   $$('input[type="range"]').forEach(r=> r.value = 5);
      //   updateRangeBadges();
      //   if($('#autoUpdate').checked){
      //     const results = computeResults();
      //     renderCards(results);
      //     renderBarChart(results);
      //     renderRadarChart(results);
      //     renderAlerts(results);
      //   }
      // });

      $('#sendBtn').addEventListener('click', async () => {
        // Opcional: atualiza os gráficos/cards antes de enviar
        const results = computeResults();
        renderCards(results);
        renderBarChart(results);
        renderRadarChart(results);
        renderAlerts(results);

        // Envia para Google Sheets
        await enviarParaPlanilha();
      });
      
      // Render inicial
      const initial = computeResults();
      renderCards(initial);
      renderBarChart(initial);
      renderRadarChart(initial);
      renderAlerts(initial);
    });

    
    function coletarRespostas30() {
  // Retorna array com 30 valores na ordem fixa: CNAE(5), CFOP(5), NCM(5), CST(5), IMP(5), REF(5)
  const ordem = [
    { selector: '.area-cnae' },
    { selector: '.area-cfop' },
    { selector: '.area-ncm'  },
    { selector: '.area-cst'  },
    { selector: '.area-imp'  },
    { selector: '.area-ref'  },
  ];
  const valores = [];
  ordem.forEach(grupo => {
    const sliders = Array.from(document.querySelectorAll(grupo.selector));
    sliders.forEach(s => valores.push(Number(s.value)));
  });
  return valores;
}

// Monta payload completo com nome, email, 30 respostas, totais (0–50) e percentuais (0–100)
function montarPayloadParaSheet() {
  const nome  = document.getElementById('alunoNome')?.value?.trim() || '';
  const email = document.getElementById('alunoEmail')?.value?.trim() || '';

  const respostas30 = coletarRespostas30();
  const results = computeResults(); 

  const totais = {
    cnae: results.cnae.total,
    cfop: results.cfop.total,
    ncm:  results.ncm.total,
    cst:  results.cst.total,
    imp:  results.imp.total,
    ref:  results.ref.total
  };

  const percentuais = {
    cnae: results.cnae.percent,
    cfop: results.cfop.percent,
    ncm:  results.ncm.percent,
    cst:  results.cst.percent,
    imp:  results.imp.percent,
    ref:  results.ref.percent
  };

  return { nome, email, respostas: respostas30, totais, percentuais };
}

function validarCamposBasicos() {
  const nome  = document.getElementById('alunoNome')?.value?.trim();
  const email = document.getElementById('alunoEmail')?.value?.trim();
  if (!nome)  { alert('Por favor, informe seu nome.'); return false; }
  if (!email) { alert('Por favor, informe seu e-mail.'); return false; }
  // Validação simples de e-mail
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!okEmail) { alert('E-mail inválido.'); return false; }
  return true;
}

async function enviarParaPlanilha() {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbyNKf7b0fxLntl6101qEnXidcmDpU6iuozRxocuRLZ1C_uaxwGecrXQHz2Z7OCGVz0CZA/exec";

  if (!validarCamposBasicos()) return;

  if (!GAS_URL) {
    alert('Configure a URL do Web App (GAS_URL) antes de enviar.');
    return;
  }

  const btn = document.getElementById('sendBtn');
  const original = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = 'Enviando…';

  try {
    const payload = montarPayloadParaSheet();

    const resp = await fetch(GAS_URL, {
      method: 'POST',
      //headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const json = await resp.json().catch(() => ({}));

    if (resp.ok) {
      alert('Respostas enviadas com sucesso! ✅');
    } else {
      console.error('Falha na resposta', json);
      alert('Não foi possível registrar. Tente novamente em instantes.');
    }

  } catch (err) {
    console.error(err);
    alert('Erro de rede ao enviar. Verifique sua conexão e tente novamente.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = original;    
  }
}