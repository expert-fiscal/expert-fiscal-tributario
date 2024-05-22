const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const lcto = {
  dt_cpl1: "27/05",
  dt_cpl2: "29/05",
  dt_cpl3: "31/05",
  dt_cpl4: "02/06",
  dt_abertura: "03/06",
  lnk_cpl1: "https://www.youtube.com/embed/9B_wO-LCd6o",
  lnk_cpl2: "https://www.youtube.com/embed/FSCxvlIpH2Q",
  lnk_cpl3: "https://www.youtube.com/embed/eUNGDt8LlZw",
  lnk_cpl4: "https://www.youtube.com/embed/wSad1RKC6tc"
};


// Datas do Evento - Ex.: 29 de Abril ao dia 05 de Maio
const dt_ev = document.getElementById("datas_evento")
if (dt_ev) {
    dt_ev.innerHTML = lcto.dt_cpl1.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl1.split("/")[1])] + " ao dia " +  lcto.dt_cpl4.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl4.split("/")[1])] ;
}

const lnkcpl1 = document.getElementById("link_cpl1")
if (lnkcpl1) {
  lnkcpl1.src = lcto.lnk_cpl1;
}

const lnkcpl2 = document.getElementById("link_cpl2")
if (lnkcpl2) {
  lnkcpl2.src = lcto.lnk_cpl2;
}

const lnkcpl3 = document.getElementById("link_cpl3")
if (lnkcpl3) {
  lnkcpl3.src = lcto.lnk_cpl3;
}

const lnkcpl4 = document.getElementById("link_cpl4")
if (lnkcpl4) {
  lnkcpl4.src = lcto.lnk_cpl4;
}