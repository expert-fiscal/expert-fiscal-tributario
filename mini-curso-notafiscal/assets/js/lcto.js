const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const lcto = {
  dt_cpl1: "27/05",
  dt_cpl2: "29/05",
  dt_cpl3: "31/05",
  dt_cpl4: "02/06",
  dt_abertura: "03/06",
};



// 29 de Abril ao dia 05 de Maio
document.getElementById("datas_evento").innerHTML = lcto.dt_cpl1.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl1.split("/")[1])] + " ao dia " +  lcto.dt_cpl4.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl4.split("/")[1])] ;