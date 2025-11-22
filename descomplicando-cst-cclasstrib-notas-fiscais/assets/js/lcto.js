const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const lcto = {
  dt_cpl1: "27/11"
  ,dt_cpl2: "27/11"
  ,dt_cpl3: "27/11"
  ,dt_cpl4: "27/11"
  ,dt_abertura: "27/11"
  ,lnk_cpl1: "https://www.youtube.com/embed/QdV0LIclcc4"
  ,lnk_cpl2: "https://www.youtube.com/embed/wb6xxpkuwh0"
  ,lnk_cpl3: "https://www.youtube.com/embed/p_CBK1Lc6aE"
  ,lnk_cpl4: "https://www.youtube.com/embed/fZkqchiHBOM" 
  ,lnk_whts: "https://chat.whatsapp.com/LnSNnDozhZNIuwanWbuIez"
  ,lnk_tabela_pilares: "../assets/files/Tabela de CFOPs_CSTs_ICMS_IPI_PIS-COFINS.xlsx"
  ,lnk_detalhes_curso_pdf:"../assets/files/Detalhes do Curso Expert Fiscal 3K+.pdf"
  ,lnk_apostila_aula_01:"../assets/files/Apostila Aula 01 - Contador Expert em Notas Fiscais.pdf"
  ,lnk_apostila_aula_02:"../assets/files/Apostila Aula 02 - Contador Expert em Notas Fiscais.pdf"
  ,lnk_apostila_aula_03:"../assets/files/Apostila Aula 03 - Contador Expert em Notas Fiscais.pdf"
  ,lnk_apostila_aula_04:"../assets/files/Apostila Aula 04 - Contador Expert em Notas Fiscais.pdf"
  ,lnk_passoapasso_certificado:"../assets/files/Passo-a-Passo_Emissão Certificado de Participação.pdf"
  ,tit_roma: "Aulão <span style='color: #A9F62A;'>Descomplicando</span> o <span style='color: #A9F62A;'>CST/cClassTrib</span> nas Notas Fiscais"
  ,tit_cpl1: "A partir de 2026, nenhuma NF-e será autorizada sem CST e cClassTrib corretos do IBS/CBS.<br/>No meu aulão, você vai aprender o método técnico que contadores e analistas fiscais precisam dominar para atuar com precisão na Reforma Tributária. Esse aulão é o primeiro passo para você se tornar indispensável na Reforma Tributária.<br/>- Se você trabalha com notas fiscais, esse evento é obrigatório."
  ,tit_cpl2: "O Método simplificado das Notas Fiscais para navegar nas Ondas da Reforma Tributária sem Erro"
  ,tit_cpl3: "Como Dominar Notas Fiscais e ficar um passo à Frente na Reforma Tributária"
  ,tit_cpl4: "Acesse o método avançado e torne-se Expert em Notas Fiscais atualizado com a Reforma Tributária"
  //,lnk_redirect_aula: "window.location.href = 'https://www.expertfiscaltributario.com.br/expert-fiscal-3k-mais/matriculas-abertas/vip/';"
  //,lnk_redirect: "window.location.href = 'https://www.expertfiscaltributario.com.br/expert-fiscal-3k-mais/matriculas-abertas/vip/';"
};

const dt_ev = document.getElementById("datas_evento")
// Dia 27 de Novembro
dt_ev ? dt_ev.innerHTML = 'Dia ' + lcto.dt_cpl1.split('/')[0] + ' de ' + month_name[parseInt(lcto.dt_cpl3.split('/')[1])] + " de 2025 às 20h - Ao Vivo": "" ;

//Inclusão do link da aula 1
const lnkcpl1 = document.getElementById("link_cpl1")
lnkcpl1 ? lnkcpl1.src = lcto.lnk_cpl1 : "";

//Inclusão do link da aula 2
const lnkcpl2 = document.getElementById("link_cpl2")
lnkcpl2 ? lnkcpl2.src = lcto.lnk_cpl2: "";

//Inclusão do link da aula 3
const lnkcpl3 = document.getElementById("link_cpl3")
lnkcpl3 ? lnkcpl3.src = lcto.lnk_cpl3 : "";

//Inclusão do link da aula 4
const lnkcpl4 = document.getElementById("link_cpl4")
lnkcpl4 ? lnkcpl4.src = lcto.lnk_cpl4: "";

//Data Aula 1 no menu 
const dt_aula1 = document.getElementById("dta_aula1")
dt_aula1 ? dt_aula1.innerHTML = lcto.dt_cpl1: "";

//Data Aula 2 no menu 
const dt_aula2 = document.getElementById("dta_aula2")
dt_aula2 ? dt_aula2.innerHTML = lcto.dt_cpl2: "";

//Data Aula 3 no menu 
const dt_aula3 = document.getElementById("dta_aula3")
dt_aula3 ? dt_aula3.innerHTML = lcto.dt_cpl3: "";

//Data Aula 4 no menu 
const dt_aula4 = document.getElementById("dta_aula4")
dt_aula4 ?  dt_aula4.innerHTML = lcto.dt_cpl4: "";

//Link do Grupo de WhatsApp
//https://linktr.ee/minicurso_notafiscal
const lnk_whts = document.getElementById("lnk_grupo_whatsapp")
lnk_whts ? lnk_whts.href = lcto.lnk_whts: "";

//Tabela Pilares da NFe
const lnk_pilares = document.getElementById("lnk_tabela_pilares")
lnk_pilares ? lnk_pilares.href = lcto.lnk_tabela_pilares: "";

//Link do PDF com Detalhes do Curso
const lnk_pdf = document.getElementById("lnk_detalhes_curso_pdf")
lnk_pdf ? lnk_pdf.href = lcto.lnk_detalhes_curso_pdf : null;

//Link dApostila da Aula 01
const lnk_apostila_aula_01 = document.getElementById("lnk_apostila_aula_01")
lnk_apostila_aula_01 ? lnk_apostila_aula_01.href = lcto.lnk_apostila_aula_01 : null;

//Link dApostila da Aula 02
const lnk_apostila_aula_02 = document.getElementById("lnk_apostila_aula_02")
lnk_apostila_aula_02 ? lnk_apostila_aula_02.href = lcto.lnk_apostila_aula_02 : null;

//Link dApostila da Aula 03
const lnk_apostila_aula_03 = document.getElementById("lnk_apostila_aula_03")
lnk_apostila_aula_03 ? lnk_apostila_aula_03.href = lcto.lnk_apostila_aula_03 : null;

//Link dApostila da Aula 04
const lnk_apostila_aula_04 = document.getElementById("lnk_apostila_aula_04")
lnk_apostila_aula_04 ? lnk_apostila_aula_04.href = lcto.lnk_apostila_aula_04 : null;

//Link do Passo a Passo para Emissão do Certificado de Participação
const lnk_passoapasso_certificado = document.getElementById("lnk_passoapasso_certificado")
lnk_passoapasso_certificado ? lnk_passoapasso_certificado.href = lcto.lnk_passoapasso_certificado : null;

//Roma / Promessa do Evento
const roma = document.getElementById("roma_promessa")
roma ? roma_promessa.innerHTML = lcto.tit_roma: "";

//Tema da Aula 01
const tema_cpl1 = document.getElementById("tema_cpl1")
tema_cpl1 ? tema_cpl1.innerHTML = lcto.tit_cpl1: "";

//Tema da Aula 02
const tema_cpl2 = document.getElementById("tema_cpl2")
tema_cpl2 ? tema_cpl2.innerHTML = lcto.tit_cpl2: "";

//Tema da Aula 03
const tema_cpl3 = document.getElementById("tema_cpl3")
tema_cpl3 ? tema_cpl3.innerHTML = lcto.tit_cpl3: "";

//Tema da Aula 04
const tema_cpl4 = document.getElementById("tema_cpl4")
tema_cpl4 ? tema_cpl4.innerHTML = lcto.tit_cpl4: "";

//Link Redirect
const lnk_redirect =  document.getElementById("lnk-redirect")
lnk_redirect? lnk_redirect.innerHTML= lcto.lnk_redirect : "";

//Link Redirect
const lnk_redirect_aula =  document.getElementById("lnk-redirect-aula")
lnk_redirect_aula? lnk_redirect_aula.innerHTML= lcto.lnk_redirect_aula : "";

/* 
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
  alert("Bem vindo, " + profile.getImageUrl() + "\n" + profile.getName() + "\n" + profile.getEmail() + "!");
}
*/

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

const form = document.getElementById('form-inscricao');
if (form) {
  document.addEventListener('DOMContentLoaded', function() {
    // Disable the submit button after form submission    
    var btn = form.querySelector('button._submit');

    form.addEventListener('submit', function() {
      btn.classList.add('processing');
      btn.disabled = true;
    });
    
  });
}

/* Google-Sheet */
if (form) {
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
        const response = await fetch('https://script.google.com/macros/s/AKfycbzuUyiU8XVzxPBqrjnQCrrOxrV_AH8URcU80L4oziaTm_ywMIb4-BMybosEhd6uvxk8/exec', {
          method: 'POST',
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          switch(formData.tag) {
            case '202511-FRI':
              window.location.href = "https://www.expertfiscaltributario.com.br/descomplicando-cst-cclasstrib-notas-fiscais/obrigado/fri/";
              break;
            case '202511-QNT':
              window.location.href = "https://www.expertfiscaltributario.com.br/descomplicando-cst-cclasstrib-notas-fiscais/obrigado/qnt/";
              break;
            default:
              window.location.href = "https://www.expertfiscaltributario.com.br/descomplicando-cst-cclasstrib-notas-fiscais/obrigado/org/";
          }
        } else {
          responseMessage.textContent = 'Erro ao enviar a mensagem. Por favor, tente novamente.';
        }

      } catch (error) {
        responseMessage.textContent = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.';
      }
    });
  }


const formMc = document.getElementById('mc-embedded-subscribe-form');
if (formMc) {
  document.addEventListener('DOMContentLoaded', function() {
    // Disable the submit button after form submission    
    var btn = formMc.querySelector('button._submit');
    formMc.addEventListener('submit', function() {
      btn.classList.add('processing');
      btn.disabled = true;
    });
    
  });
}