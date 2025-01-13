const SPREADSHEET_ID = atob('MW9odGlld3JiaUxvRE9SeXNUUXpsa2lQTTJ4QVgxWGpRcmtESzdXaHJfbG8=');
const api_Key =  atob('QUl6YVN5QnNHUUZRS21Ud1BOSHlUelhsdGt6Q19zWktwenNVLUZr');
const client_Id =  atob('NDAzODgyMjgzODkyLTl2Ym5qYXVjZGhwZGdhaHJ0aGNiMGY0Zm9wMzg4a2s0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t');

// Função para carregar a API do cliente do Google
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Função para inicializar o cliente da API
function initClient() {
  gapi.client.init({
    apiKey: api_Key,  // Substitua pela sua chave de API
    clientId: client_Id,  // Substitua pelo seu Client ID
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  }).then(function () {
    // Verifica se o usuário já está autenticado
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      appendEmailAndUrlToSheet();  // Se estiver autenticado, chama a função para enviar os dados
    }
  });
}

// Função para fazer login e depois enviar os dados à planilha
function handleFormSubmit(event) {
  event.preventDefault();  // Impede o envio do formulário imediatamente
  handleClientLoad();  // Chama a função para carregar a API e autenticar
  document.getElementById('myForm').submit();  // Envia o formulário depois
} 
  
  function appendEmailAndUrlToSheet() {
 
    const email = document.getElementById('email').value;  // Obtém o e-mail do formulário
    const url = window.location.href;  // Obtém a URL da página

  const values = [
    [email, url]  // Dados a serem inseridos (email na coluna A, URL na coluna B)
  ];

  const body = {
    values: values  // Corpo da requisição com os valores
  };

  // Faz a requisição para adicionar os dados à planilha
  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Sheet1!A:B',  // Define o intervalo onde os dados serão adicionados
    valueInputOption: 'USER_ENTERED',  // Indica que os valores são inseridos como se fossem digitados pelo usuário
    resource: body
  }).then((response) => {
    console.log('Email e URL adicionados com sucesso:', response);
  }).catch((error) => {
    console.error('Erro ao adicionar email e URL:', error);
  });
}