const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const lcto = {
  dt_cpl1: "09/06",
  dt_cpl2: "11/06",
  dt_cpl3: "13/06",
  dt_cpl4: "15/06",
  dt_abertura: "16/06",
  lnk_cpl1: "https://www.youtube.com/embed/Ts09R4hosnY", 
  lnk_cpl2: "https://www.youtube.com/embed/JTwWbU1rxO0", 
  lnk_cpl3: "https://www.youtube.com/embed/_GkF8hScT2A", 
  lnk_cpl4: "https://www.youtube.com/embed/KCAZ1qeLDb8", 
  lnk_whts: "https://chat.whatsapp.com/KrCp55NB0qR8QZirQK1PBm",
  lnk_tabela_pilares: "https://www.expertfiscaltributario.com.br/contador-expert-em-notas-fiscais/aula-02/Tabela de CFOPs_CSTs_ICMS_IPI_PIS-COFINS.xlsx",
  tit_roma: "Ensino Contadores a <span style='color: #A9F62A;'>Dominarem </span> as <span style='color: #A9F62A;'>Notas Fiscais </span> com <span style='color: #A9F62A;'>Segurança </span> e estarem  <span style='color: #A9F62A;'>Prontos </span> para a <span style='color: #A9F62A;'>Reforma Tributária </span>",
  tit_cpl1: "Como a Reforma Tributária está Transformando a Profissão Contábil/Fiscal",
  tit_cpl2: "O Método simplificado das Notas Fiscais para navegar nas Ondas da Reforma Tributária sem Erro",
  tit_cpl3: "Como Dominar Notas Fiscais e ficar um passo à Frente na Reforma Tributária",
  tit_cpl4: "Acesse o método avançado e torne-se Expert em Notas Fiscais atualizado com a Reforma Tributária" 
};

const dt_ev = document.getElementById("datas_evento")
if (dt_ev) {    
    // Datas do Evento - Ex.: 29 de Abril ao dia 05 de Maio
    //dt_ev.innerHTML = lcto.dt_cpl1.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl1.split("/")[1])] + " à " +  lcto.dt_cpl4.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl4.split("/")[1])] ;
    
    // Dias 24, 26 e 28 de Junho
    dt_ev.innerHTML = "Dias " + lcto.dt_cpl1.split("/")[0] + ", " + lcto.dt_cpl2.split("/")[0] + ", " + lcto.dt_cpl3.split("/")[0] + " e " +  lcto.dt_cpl4.split("/")[0] + " de " + month_name[parseInt(lcto.dt_cpl3.split("/")[1])] ;
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

//Tabela Pilares da NFe
const lnk_pilares = document.getElementById("lnk_tabela_pilares")
if (lnk_pilares) {
  lnk_pilares.href = lcto.lnk_tabela_pilares;
}

//Roma / Promessa do Evento
const roma = document.getElementById("roma_promessa")
if (roma) {
  roma_promessa.innerHTML = lcto.tit_roma;
}

//Tema da Aula 01
const tema_cpl1 = document.getElementById("tema_cpl1")
if (tema_cpl1) {
  tema_cpl1.innerHTML = lcto.tit_cpl1;
}

//Tema da Aula 02
const tema_cpl2 = document.getElementById("tema_cpl2")
if (tema_cpl2) {
  tema_cpl2.innerHTML = lcto.tit_cpl2;
}

//Tema da Aula 03
const tema_cpl3 = document.getElementById("tema_cpl3")
if (tema_cpl3) {
  tema_cpl3.innerHTML = lcto.tit_cpl3;
}

//Tema da Aula 04
const tema_cpl4 = document.getElementById("tema_cpl4")
if (tema_cpl4) {
  tema_cpl4.innerHTML = lcto.tit_cpl4;
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  /*
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  */
  alert("Bem vindo, " + profile.getImageUrl() + "\n" + profile.getName() + "\n" + profile.getEmail() + "!");
}

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

/* Google-Sheet */
const form = document.getElementById('form-inscricao');
const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        tag: document.getElementById('tag').value
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzHdma_l-p9bJd39TaKxfZaFP-yeGs-H4TzcQjKCqHDJSG_fd8shRm6Nwi7sVzf8gFs/exec', {
          method: 'POST',
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          window.location.href = "https://www.expertfiscaltributario.com.br/contador-expert-em-notas-fiscais/obrigado/org/";
          //responseMessage.textContent = 'Thank you! Your message has been sent.';
          //form.reset();
        } else {
          responseMessage.textContent = 'Erro ao enviar a mensagem. Por favor, tente novamente.';
        }
      } catch (error) {
        responseMessage.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
      }
    });