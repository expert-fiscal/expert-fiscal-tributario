const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const lcto = {
  dt_cpl1: "22/07",
  dt_cpl2: "24/07",
  dt_cpl3: "26/07",
  dt_cpl4: "28/07",
  dt_abertura: "29/07",
  lnk_cpl1: "https://www.youtube.com/embed/bgGTNPCVwAY",
  lnk_cpl2: "https://www.youtube.com/embed/SG01i4Qcuu4",
  lnk_cpl3: "https://www.youtube.com/embed/EkxAXvLitfo",
  lnk_cpl4: "https://www.youtube.com/embed/MqARLBaUfKk",
  lnk_whts: "https://chat.whatsapp.com/J1VdopDUysTCdFxkFAusRT"
};


const dt_ev = document.getElementById("datas_evento")
if (dt_ev) {    
    // Datas do Evento - Ex.: 29 de Abril ao dia 05 de Maio
    // dt_ev.innerHTML = lcto.dt_cpl1.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl1.split("/")[1])] + " ao dia " +  lcto.dt_cpl4.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl4.split("/")[1])] ;
    // Dias 24, 26 e 28 de Junho
    dt_ev.innerHTML = "Dias " + lcto.dt_cpl1.split("/")[0] + ", " + lcto.dt_cpl2.split("/")[0] + " e " +  lcto.dt_cpl3.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl4.split("/")[1])] ;
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

//Link do Grupo de WhatsApp
//https://linktr.ee/minicurso_notafiscal
const lnk_whts = document.getElementById("lnk_grupo_whatsapp")
if (lnk_whts) {
  lnk_whts.href = lcto.lnk_whts;
}