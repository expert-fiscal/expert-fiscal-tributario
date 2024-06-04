const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const lcto = {
  dt_cpl1: "24/06",
  dt_cpl2: "26/06",
  dt_cpl3: "28/06",
  dt_cpl4: "30/06",
  dt_abertura: "01/07",
  lnk_cpl1: "https://www.youtube.com/embed/BGYZrZJaG9w",
  lnk_cpl2: "https://www.youtube.com/embed/fA1qNaHJ5g8",
  lnk_cpl3: "https://www.youtube.com/embed/-pA90qWb1DA",
  lnk_cpl4: "https://www.youtube.com/embed/6SnOEvlukOY"
};


// Datas do Evento - Ex.: 29 de Abril ao dia 05 de Maio
const dt_ev = document.getElementById("datas_evento")
if (dt_ev) {
    dt_ev.innerHTML = lcto.dt_cpl1.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl1.split("/")[1])] + " ao dia " +  lcto.dt_cpl4.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl4.split("/")[1])] ;
}

//Inclusão do link da aula 1
const lnkcpl1 = document.getElementById("link_cpl1")
if (lnkcpl1) {
  lnkcpl1.src = lcto.lnk_cpl1;
}

//Inclusão do link da aula 2
const lnkcpl2 = document.getElementById("link_cpl2")
if (lnkcpl2) {
  lnkcpl2.src = lcto.lnk_cpl2;
}

//Inclusão do link da aula 3
const lnkcpl3 = document.getElementById("link_cpl3")
if (lnkcpl3) {
  lnkcpl3.src = lcto.lnk_cpl3;
}

//Inclusão do link da aula 4
const lnkcpl4 = document.getElementById("link_cpl4")
if (lnkcpl4) {
  lnkcpl4.src = lcto.lnk_cpl4;
}

//Data Aula 1 no menu 
const dt_aula1 = document.getElementById("dta_aula1")
if (dt_aula1) {
  dt_aula1.innerHTML = lcto.dt_cpl1;
}

//Data Aula 2 no menu 
const dt_aula2 = document.getElementById("dta_aula2")
if (dt_aula2) {
  dt_aula2.innerHTML = lcto.dt_cpl2;
}

//Data Aula 3 no menu 
const dt_aula3 = document.getElementById("dta_aula3")
if (dt_aula3) {
  dt_aula3.innerHTML = lcto.dt_cpl3;
}

//Data Aula 4 no menu 
const dt_aula4 = document.getElementById("dta_aula4")
if (dt_aula4) {
  dt_aula4.innerHTML = lcto.dt_cpl4;
}