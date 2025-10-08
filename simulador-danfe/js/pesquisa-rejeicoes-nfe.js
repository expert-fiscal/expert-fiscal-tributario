// Array que armazenará os dados depois de carregados
let dadosErros = [];

// Selecionando os elementos do HTML
const inputCodigo = document.getElementById('codigoMsgInput');
const botaoPesquisar = document.getElementById('pesquisarBtn');
const divResultado = document.getElementById('resultado');
const divCodPesquisado = document.getElementById('cod-pesquisado');

// --- MUDANÇA PRINCIPAL ---
// Usamos fetch para carregar o arquivo JSON.
// O caminho 'dados/erros.json' é relativo à localização do 'index.html'.
fetch('js/rejeicoes-nfe.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na rede ou arquivo não encontrado!');
        }
        return response.json(); // Converte a resposta em JSON
    })
    .then(data => {
        dadosErros = data; // Armazena os dados carregados na nossa variável
        console.log('Dados de erros carregados com sucesso!');
    })
    .catch(error => {
        // Trata erros que possam ocorrer durante o carregamento do arquivo
        console.error('Falha ao carregar o arquivo JSON:', error);
        divResultado.textContent = 'Erro: Não foi possível carregar os dados de erros. Verifique o console para mais detalhes.';
        divResultado.className = 'erro-carregamento';
    });

const realizarPesquisa = () => {
    // Verifica se os dados já foram carregados
    if (dadosErros.length === 0) {
        divResultado.textContent = 'Os dados ainda não foram carregados. Tente novamente em um instante.';
        divResultado.className = 'card-footer text-warning';
        return;
    }

    const codigoParaBuscar = inputCodigo.value.trim();

    if (codigoParaBuscar === "") {
        divResultado.textContent = "Por favor, digite um código para pesquisar.";
        divResultado.className = 'card-footer text-success';
        return;
    }

    const erroEncontrado = dadosErros.find(erro => erro.Msg === codigoParaBuscar);

    if (erroEncontrado) {
        divCodPesquisado.textContent = inputCodigo.value.trim();
        divResultado.textContent = "🚫 " + erroEncontrado['Descrição Erro'];
        divResultado.className = 'alert alert-secondary';
    } else {
        divCodPesquisado.textContent = inputCodigo.value.trim();
        divResultado.textContent = `Nenhuma descrição encontrada para o código "${codigoParaBuscar}".`;
        divResultado.className = 'alert alert-warning';
    }
};

botaoPesquisar.addEventListener('click', realizarPesquisa);

inputCodigo.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});