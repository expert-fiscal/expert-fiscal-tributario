 // ID da Planilha Google (pode ser obtido na URL da planilha)
 const SPREADSHEET_ID = atob('MW9odGlld3JiaUxvRE9SeXNUUXpsa2lQTTJ4QVgxWGpRcmtESzdXaHJfbG8=');
 const RANGE = 'A2'; // Defina a célula inicial que você deseja adicionar o email (por exemplo, A1)

 // Função para carregar a API do cliente do Google
 function handleClientLoad() {
   gapi.load('client:auth2', initClient);
 }

 // Função para inicializar o cliente da API
 function initClient() {
   gapi.client.init({
     apiKey: atob('QUl6YVN5QnNHUUZRS21Ud1BOSHlUelhsdGt6Q19zWktwenNVLUZr'),
     clientId: atob('NDAzODgyMjgzODkyLTl2Ym5qYXVjZGhwZGdhaHJ0aGNiMGY0Zm9wMzg4a2s0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t'),
     discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
     scope: 'https://www.googleapis.com/auth/spreadsheets',
   }).then(function () {
     // Verifique se o usuário está autenticado
     if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
       appendEmailAndUrlToSheet();
     } else {
       gapi.auth2.getAuthInstance().signIn().then(appendEmailAndUrlToSheet);
     }
   });
 }

 // Função para adicionar o e-mail e a URL à planilha
 function appendEmailAndUrlToSheet() {
   const email = document.getElementById("email"); // E-mail a ser adicionado
   const url = window.location.href;   // URL da página atual

   // Prepara os dados para serem inseridos na planilha
   const values = [
     [email, url]  // Adiciona o e-mail na coluna A e a URL na coluna B
   ];

   const body = {
     values: values
   };

   // Faz a chamada à API para adicionar os dados na planilha
   gapi.client.sheets.spreadsheets.values.append({
     spreadsheetId: SPREADSHEET_ID,
     range: RANGE,
     valueInputOption: "RAW",
     resource: body
   }).then((response) => {
     console.log('Email e URL adicionados com sucesso:', response);
   }).catch((error) => {
     console.error('Erro ao adicionar email e URL:', error);
   });
 }

 function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário imediatamente
    handleClientLoad();     // Chama a função que lida com a autenticação e inserção de dados    
  }