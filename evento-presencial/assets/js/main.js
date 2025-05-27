const month_name = ["","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const evento = {
    tema: "Imersão Notas Fiscais na Reforma Tributária",
    data: "12/07",
    local:"ACE SUZANO - SUZANO/SP",
    chamada: "ESTÁ CHEGANDO O PRIMEIRO CONGRESSO NACIONAL DE CONTABILIDADE E TRIBUTAÇÃO DO AGRONEGÓCIO",
    comunicado: "<p>Em <strong>3 dias</strong> você terá acessado o caminho para <strong>estruturar</strong>,<strong>vender</strong>, <strong>entregar</strong> e <strong>escalar com segurança</strong> e <strong>lucratividade</strong> serviços contábeis e tributários do agronegócio.</p>",
    percent_participantes: 89,
    publico_alvo_headline: "Para quem é o 1º Congresso Nacional de Contabilidade e Tributação do Agronegócio?",
    publico_alvo_titulo_1: "Donos de Escritórios Contábeis",
    publico_alvo_descricao_1: "Que desejam aprimorar o atendimento ao produtor rural para escalar o faturamento do escritório.",
    publico_alvo_titulo_2: "Contadores Autônomos",
    publico_alvo_descricao_2: "Que já atendem ou desejam atender com segurança o produtor rural, sendo melhor remunerados do que em áreas tradicionais.",
    publico_alvo_titulo_3: "Contadores CLT e em transição de carreira",
    publico_alvo_descricao_3: "Que enxergaram na contabilidade e tributação do agronegócio uma oportunidade para alavancarem a carreira.",
    noticias_headline: "Nos últimos meses, a Reforma Tributária se tornou a principal preocupação para o Contador:",
    noticias_footer: "E ser o profissional que domina as mudanças que a Reforma Tributária traz para as Notas Fiscais vai te fazer ser valorizado e melhor remunerado.",
    oque_vai_aprender_headline: "O que você vai aprender na Imersão Notas Fiscais na Reforma Tributária?",
    oque_vai_aprender_titulo_1: "Como estruturar a área de Notas Fiscais do seu escritório",
    oque_vai_aprender_descricao_1: "Para atender com segurança e lucratividade o produtor rural, mesmo sem experiência prévia.",
    oque_vai_aprender_titulo_2: "Como vender serviços de Notas Fiscais",
    oque_vai_aprender_descricao_2: "Para aumentar o faturamento do seu escritório e ser melhor remunerado.",
    oque_vai_aprender_titulo_3: "Como entregar serviços de Notas Fiscais",
    oque_vai_aprender_descricao_3: "Para escalar o faturamento do seu escritório e ser valorizado pelo produtor rural.",
    oque_vai_aprender_titulo_4: "Como escalar serviços de Notas Fiscais",
    oque_vai_aprender_descricao_4: "Para ter mais tempo livre e aumentar a lucratividade do seu escritório.",
    oque_vai_aprender_titulo_5: "Como se tornar um especialista em Notas Fiscais",
    oque_vai_aprender_descricao_5: "Para se destacar no mercado e ser reconhecido como referência na área.",
    oque_vai_aprender_titulo_6: "Como se preparar para a Reforma Tributária",
    oque_vai_aprender_descricao_6: "Para ser o profissional que domina as mudanças que a Reforma Tributária traz para as Notas Fiscais e ser valorizado e melhor remunerado.",
    pilares_headline: "Só o conhecimento não fará você se tornar um profissional referência e bem remunerado na contabilidade.",
    pilares_descricao: "Aplicar um método para ser capaz de estruturar, vender, entregar e escalar com segurança e lucratividade serviços contábeis e tributários do agronegócio, sim.",
    pilares_texto: "NO 1º CONGRESSO NACIONAL DE CONTABILIDADE E TRIBUTAÇÃO DO AGRONEGÓCIO VOCÊ APRENDERÁ A DOMINAR ESSES <span  style='color:#06F639'>4 PILARES:</span>",
    pilar1_titulo: "CFOP",
    pilar1_descricao: "CÓDIGOS FISCAIS DE OPERAÇÕES E PRESTAÇÕES para estruturar a área de Notas Fiscais do seu escritório e atender com segurança o produtor rural.",
    pilar2_titulo: "NCM",
    pilar2_descricao: "NOMENMCLATURA COMERCIAL PARA MERCADORIAS para vender serviços de Notas Fiscais e aumentar o faturamento do seu escritório.",
    pilar3_titulo: "CST",
    pilar3_descricao: "CÓDIGO DE SITUAÇÃO TRIBUTÁRIA para entregar serviços de Notas Fiscais e escalar o faturamento do seu escritório.",
    pilar4_titulo: "IMPOSTOS",
    pilar4_descricao: "ICMS, IPI, PIS, COFINS, ISS e IR para se tornar um especialista em Notas Fiscais e se destacar no mercado.",
    pilar_cta_botao: "Clique no <strong>botão abaixo</strong> para <strong>dominar os 4 pilares</strong> e se tornar uma referência em agronegócio na sua região.",
    imagine_headline: "FALTAM CONTADORES PARA ATENDER TODA A DEMANDA DA REFORMA TRIBUTÁRIA",
    imagine_descricao: "Imagine se tornar o profissional que domina as mudanças que a Reforma Tributária traz para as Notas Fiscais e ser valorizado e melhor remunerado, além disso:",
    imagine_item1: "Não precisando brigar por honorários",
    imagine_item2: "Tendo mais tempo livre para você e sua família",
    imagine_item3: "Sendo reconhecido como referência na área",
    imagine_item4: "Aumentando a lucratividade do seu escritório",
    imagine_item5: "Tendo mais segurança e confiança no seu trabalho",
    imagine_item6: "Contribuindo para o desenvolvimento do agronegócio brasileiro",
    imagine_cta: "Essa pode ser a sua realidade dentro de poucos meses ou até mesmo semanas se você tomar a decisão que você sabe que precisa tomar agora!",
    ingresso_headline: "Garanta seu ingresso para o 1º Congresso Nacional de Contabilidade e Tributação do Agronegócio",   
    lnk_cpl1: "https://www.youtube.com/embed/Ts09R4hosnY", 
    lnk_whts: "https://chat.whatsapp.com/KrCp55NB0qR8QZirQK1PBm"  
};


//Tema do Evento
const tema_cronometro = document.getElementById("tema_cronometro")
tema_cronometro ? tema_cronometro.innerHTML = evento.tema : "";

//Chamada do Evento
const chamada = document.getElementById("chamada_evento")
chamada ? chamada.innerHTML = evento.chamada : "";

//Chamada do Evento
const comunicado = document.getElementById("comunicado_evento")
comunicado ? comunicado.innerHTML = evento.comunicado : "";

//Data do Evento
const dt_ev = document.getElementById("data_evento")
dt_ev ? dt_ev.innerHTML = evento.data.split("/")[0] + " de " + month_name[parseInt(evento.data.split("/")[1])] : "";

const dt_ev2 = document.getElementById("data2_evento")
dt_ev2 ? dt_ev2.innerHTML = evento.data.split("/")[0] + " de " + month_name[parseInt(evento.data.split("/")[1])] : "";

//Local do Evento
const local_ev = document.getElementById("local_evento")
local_ev ? local_ev.innerHTML = evento.local : "";

const local_ev2 = document.getElementById("local2_evento")
local_ev2 ? local_ev2.innerHTML = evento.local : "";

//Participantes Confirmados 
// Barra
const percent_participantes_barra = document.getElementById("percent_participantes_barra")
percent_participantes_barra ? percent_participantes_barra.ariaValueNow = evento.percent_participantes : "";
// Texto
const percent_participantes_texto = document.getElementById("percent_participantes_texto")
percent_participantes_texto ? percent_participantes_texto.innerHTML = evento.percent_participantes + "%" : "";


//Publico Alvo
const publico_alvo_headline = document.getElementById("publico_alvo_headline")
publico_alvo_headline ? publico_alvo_headline.innerHTML = evento.publico_alvo_headline : "";

//Publico Alvo 1
const publico_alvo_titulo_1 = document.getElementById("publico_alvo_titulo_1")
publico_alvo_titulo_1 ? publico_alvo_titulo_1.innerHTML = evento.publico_alvo_titulo_1 : "";
const publico_alvo_descricao_1 = document.getElementById("publico_alvo_descricao_1")
publico_alvo_descricao_1 ? publico_alvo_descricao_1.innerHTML = evento.publico_alvo_descricao_1 : "";

//Publico Alvo 2
const publico_alvo_titulo_2 = document.getElementById("publico_alvo_titulo_2")
publico_alvo_titulo_2 ? publico_alvo_titulo_2.innerHTML = evento.publico_alvo_titulo_2 : "";
const publico_alvo_descricao_2 = document.getElementById("publico_alvo_descricao_2")
publico_alvo_descricao_2 ? publico_alvo_descricao_2.innerHTML = evento.publico_alvo_descricao_2 : "";

//Publico Alvo 3
const publico_alvo_titulo_3 = document.getElementById("publico_alvo_titulo_3")
publico_alvo_titulo_3 ? publico_alvo_titulo_3.innerHTML = evento.publico_alvo_titulo_3 : "";
const publico_alvo_descricao_3 = document.getElementById("publico_alvo_descricao_3")
publico_alvo_descricao_3 ? publico_alvo_descricao_3.innerHTML = evento.publico_alvo_descricao_3 : "";

//Noticias
const noticias = document.getElementById("noticias_headline")
noticias ? noticias.innerHTML = evento.noticias_headline : "";

//Noticias Footer
const noticias_footer = document.getElementById("noticias_footer")
noticias_footer ? noticias_footer.innerHTML = evento.noticias_footer : "";

//O que vai aprender Headline
const oque_vai_aprender_headline = document.getElementById("oque_vai_aprender_headline")
oque_vai_aprender_headline ? oque_vai_aprender_headline.innerHTML = evento.oque_vai_aprender_headline : "";

//O que vai aprender Titulo 1
const oque_vai_aprender_titulo_1 = document.getElementById("oque_vai_aprender_titulo_1")
oque_vai_aprender_titulo_1 ? oque_vai_aprender_titulo_1.innerHTML = evento.oque_vai_aprender_titulo_1 : "";

//O que vai aprender Descrição 1    
const oque_vai_aprender_descricao_1 = document.getElementById("oque_vai_aprender_descricao_1")
oque_vai_aprender_descricao_1 ? oque_vai_aprender_descricao_1.innerHTML = evento.oque_vai_aprender_descricao_1 : "";

//O que vai aprender Titulo 2
const oque_vai_aprender_titulo_2 = document.getElementById("oque_vai_aprender_titulo_2")
oque_vai_aprender_titulo_2 ? oque_vai_aprender_titulo_2.innerHTML = evento.oque_vai_aprender_titulo_2 : "";

//O que vai aprender Descrição 2
const oque_vai_aprender_descricao_2 = document.getElementById("oque_vai_aprender_descricao_2")
oque_vai_aprender_descricao_2 ? oque_vai_aprender_descricao_2.innerHTML = evento.oque_vai_aprender_descricao_2 : "";

//O que vai aprender Titulo 3
const oque_vai_aprender_titulo_3 = document.getElementById("oque_vai_aprender_titulo_3")
oque_vai_aprender_titulo_3 ? oque_vai_aprender_titulo_3.innerHTML = evento.oque_vai_aprender_titulo_3 : "";

//O que vai aprender Descrição 3
const oque_vai_aprender_descricao_3 = document.getElementById("oque_vai_aprender_descricao_3")
oque_vai_aprender_descricao_3 ? oque_vai_aprender_descricao_3.innerHTML = evento.oque_vai_aprender_descricao_3 : "";

//O que vai aprender Titulo 4
const oque_vai_aprender_titulo_4 = document.getElementById("oque_vai_aprender_titulo_4")
oque_vai_aprender_titulo_4 ? oque_vai_aprender_titulo_4.innerHTML = evento.oque_vai_aprender_titulo_4 : "";

//O que vai aprender Descrição 4
const oque_vai_aprender_descricao_4 = document.getElementById("oque_vai_aprender_descricao_4")
oque_vai_aprender_descricao_4 ? oque_vai_aprender_descricao_4.innerHTML = evento.oque_vai_aprender_descricao_4 : "";

//O que vai aprender Titulo 5
const oque_vai_aprender_titulo_5 = document.getElementById("oque_vai_aprender_titulo_5")
oque_vai_aprender_titulo_5 ? oque_vai_aprender_titulo_5.innerHTML = evento.oque_vai_aprender_titulo_5 : "";

//O que vai aprender Descrição 5
const oque_vai_aprender_descricao_5 = document.getElementById("oque_vai_aprender_descricao_5")
oque_vai_aprender_descricao_5 ? oque_vai_aprender_descricao_5.innerHTML = evento.oque_vai_aprender_descricao_5 : "";

//O que vai aprender Titulo 6
const oque_vai_aprender_titulo_6 = document.getElementById("oque_vai_aprender_titulo_6")
oque_vai_aprender_titulo_6 ? oque_vai_aprender_titulo_6.innerHTML = evento.oque_vai_aprender_titulo_6 : "";

//O que vai aprender Descrição 6
const oque_vai_aprender_descricao_6 = document.getElementById("oque_vai_aprender_descricao_6")
oque_vai_aprender_descricao_6 ? oque_vai_aprender_descricao_6.innerHTML = evento.oque_vai_aprender_descricao_6 : "";

//Pilares Headline
const pilares_headline = document.getElementById("pilares_headline")
pilares_headline ? pilares_headline.innerHTML = evento.pilares_headline : "";
//Pilares Descrição
const pilares_descricao = document.getElementById("pilares_descricao")
pilares_descricao ? pilares_descricao.innerHTML = evento.pilares_descricao : "";

//Pilares Texto
const pilares_texto = document.getElementById("pilares_texto")
pilares_texto ? pilares_texto.innerHTML = evento.pilares_texto : "";
//Pilar 1 Titulo
const pilar1_titulo = document.getElementById("pilar1_titulo")
pilar1_titulo ? pilar1_titulo.innerHTML = evento.pilar1_titulo : "";
//Pilar 1 Descrição
const pilar1_descricao = document.getElementById("pilar1_descricao")
pilar1_descricao ? pilar1_descricao.innerHTML = evento.pilar1_descricao : "";
//Pilar 2 Titulo
const pilar2_titulo = document.getElementById("pilar2_titulo")
pilar2_titulo ? pilar2_titulo.innerHTML = evento.pilar2_titulo : "";
//Pilar 2 Descrição
const pilar2_descricao = document.getElementById("pilar2_descricao")
pilar2_descricao ? pilar2_descricao.innerHTML = evento.pilar2_descricao : "";
//Pilar 3 Titulo
const pilar3_titulo = document.getElementById("pilar3_titulo")
pilar3_titulo ? pilar3_titulo.innerHTML = evento.pilar3_titulo : "";
//Pilar 3 Descrição
const pilar3_descricao = document.getElementById("pilar3_descricao")
pilar3_descricao ? pilar3_descricao.innerHTML = evento.pilar3_descricao : "";
//Pilar 4 Titulo
const pilar4_titulo = document.getElementById("pilar4_titulo")
pilar4_titulo ? pilar4_titulo.innerHTML = evento.pilar4_titulo : "";
//Pilar 4 Descrição
const pilar4_descricao = document.getElementById("pilar4_descricao")
pilar4_descricao ? pilar4_descricao.innerHTML = evento.pilar4_descricao : "";

//Pilar CTA Botão
const pilar_cta_botao = document.getElementById("pilar_cta_botao") 
pilar_cta_botao ? pilar_cta_botao.innerHTML = evento.pilar_cta_botao : "";

//Imagine Headline
const imagine_headline = document.getElementById("imagine_headline")
imagine_headline ? imagine_headline.innerHTML = evento.imagine_headline : "";

//Imagine Descrição
const imagine_descricao = document.getElementById("imagine_descricao")
imagine_descricao ? imagine_descricao.innerHTML = evento.imagine_descricao : "";

//Imagine Item 1
const imagine_item1 = document.getElementById("imagine_item1")
imagine_item1 ? imagine_item1.innerHTML = evento.imagine_item1 : "";

//Imagine Item 2
const imagine_item2 = document.getElementById("imagine_item2")
imagine_item2 ? imagine_item2.innerHTML = evento.imagine_item2 : "";

//Imagine Item 3
const imagine_item3 = document.getElementById("imagine_item3")
imagine_item3 ? imagine_item3.innerHTML = evento.imagine_item3 : "";

//Imagine Item 4
const imagine_item4 = document.getElementById("imagine_item4")
imagine_item4 ? imagine_item4.innerHTML = evento.imagine_item4 : "";

//Imagine Item 5
const imagine_item5 = document.getElementById("imagine_item5")
imagine_item5 ? imagine_item5.innerHTML = evento.imagine_item5 : "";

//Imagine Item 6
const imagine_item6 = document.getElementById("imagine_item6")
imagine_item6 ? imagine_item6.innerHTML = evento.imagine_item6 : "";


//Imagine CTA
const imagine_cta = document.getElementById("imagine_cta")
imagine_cta ? imagine_cta.innerHTML = evento.imagine_cta : "";

//Ingresso Headline
const ingresso_headline = document.getElementById("ingresso_headline")
ingresso_headline ? ingresso_headline.innerHTML = evento.ingresso_headline : "";








//Inclusão do link da aula 1
const lnkcpl1 = document.getElementById("link_cpl1")
lnkcpl1 ? lnkcpl1.src = lcto.lnk_cpl1 :"";

//Data Aula 4 no menu 
const dt_aula4 = document.getElementById("dta_aula4")
dt_aula4 ? dt_aula4.innerHTML = lcto.dt_cpl4:"";

//Link do Grupo de WhatsApp
//https://linktr.ee/minicurso_notafiscal
const lnk_whts = document.getElementById("lnk_grupo_whatsapp")
lnk_whts ? lnk_whts.href = lcto.lnk_whts:"";

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

/* Google-Sheet */
/*
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
    */