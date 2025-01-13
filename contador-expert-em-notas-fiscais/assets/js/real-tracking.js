 // ID da Planilha Google (pode ser obtido na URL da planilha)
 const SPREADSHEET_ID = atob('MW9odGlld3JiaUxvRE9SeXNUUXpsa2lQTTJ4QVgxWGpRcmtESzdXaHJfbG8=');
 
    // Função chamada após o login ser bem-sucedido
    function handleCredentialResponse(response) {
        // O token de ID obtido após login
        const id_token = response.credential;
    
        // Inicializa o cliente da API Google Sheets com o token obtido
        gapi.auth2.getAuthInstance().signIn({
        prompt: "select_account"
        }).then(function () {
        // Chama a função para enviar o e-mail e a URL à planilha
        appendEmailAndUrlToSheet();
        });
    }

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
   const email = document.getElementById("email").value; // E-mail a ser adicionado
   const url = window.location.href;   // URL da página atual

    // Prepara a lista de ações para o batchUpdate
    const requests = [
        {
        updateCells: {
            range: {
            sheetId: 0,  // Substitua com o ID da aba da sua planilha
            startRowIndex: 1, // A primeira linha onde os dados serão inseridos
            startColumnIndex: 0, // A primeira coluna (A)
            },
            rows: [{
            values: [
                {
                userEnteredValue: { stringValue: email } // Coluna A (Email)
                },
                {
                userEnteredValue: { stringValue: url } // Coluna B (URL)
                }
            ]
            }],
            fields: "userEnteredValue"
        }
        }
    ];

   // Faz a chamada à API para adicionar os dados na planilha
   gapi.client.sheets.spreadsheets.batchUpdate({
     spreadsheetId: SPREADSHEET_ID,
     resource: {
        requests: requests
      }
   }).then((response) => {
     console.log('Email e URL adicionados com sucesso:', response);
   }).catch((error) => {
     console.error('Erro ao adicionar email e URL:', error);
   });
 }

 function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário imediatamente
    handleClientLoad();     // Chama a função que lida com a autenticação e inserção de dados
    
    // Envia o formulário independente do sucesso ou falha da API
    document.getElementById('_form_6531_').submit();
  
    return false; // Impede o envio do formulário novamente
  }