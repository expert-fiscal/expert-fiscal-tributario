// script.js

// Estado da aplicação (simulado)
const appState = {
    userProgress: {
        unlockedLevel: 2, // O usuário desbloqueou até o nível 2
        completedLevels: [1] // O usuário completou o nível 1
    },
    selectedTopic: null
};

// Gerenciador de visualizações
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('d-none');
    });
    document.getElementById(viewId).classList.remove('d-none');
}

// Carrega a lista de tópicos (simulado)
function loadTopics() {
    const topics = [
        { id: 'es', name: 'C.F.O.P' },
        { id: 'fr', name: 'N.C.M' },
        { id: 'de', name: 'C.S.T' },
        { id: 'it', name: 'IMPOSTOS' }
    ];
    const container = document.getElementById('topics-list');
    container.innerHTML = '';
    topics.forEach(topic => {
        const el = document.createElement('a');
        el.className = 'list-group-item list-group-item-action';
        el.textContent = topic.name;
        el.onclick = () => {
            // Remove a classe 'active' de todos e a adiciona ao clicado
            container.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            el.classList.add('active');
            appState.selectedTopic = topic.id;
        };
        container.appendChild(el);
    });
}

// Gera a trilha de aprendizado
function generateLearningPath() {
    const levels = 5; // Total de níveis na seção
    const container = document.getElementById('learning-path-container');
    container.innerHTML = '';
    for (let i = 1; i <= levels; i++) {
        const node = document.createElement('div');
        node.className = 'path-node';
        
        let nodeClass = '';
        let icon = '⭐';
        if (appState.userProgress.completedLevels.includes(i)) {
            nodeClass = 'completed';
        } else if (i <= appState.userProgress.unlockedLevel) {
            nodeClass = 'unlocked';
        } else {
            nodeClass = 'locked';
            icon = '🔒';
        }
        
        node.classList.add(nodeClass);
        
        const button = document.createElement('button');
        button.innerHTML = icon;
        button.disabled = (nodeClass === 'locked');
        button.onclick = () => showView('lesson-view');

        node.appendChild(button);
        container.appendChild(node);
    }
}


// Evento que inicia a aplicação
document.addEventListener('DOMContentLoaded', () => {
    // A tela inicial (splash) é mostrada por padrão via HTML/CSS
    
    // Prepara as outras telas
    loadTopics();
    generateLearningPath();
});

// Transição inicial da Splash para a Home após um tempo
setTimeout(() => {
    const splashView = document.getElementById('splash-view');
    // Só faz a transição automática se a splash estiver visível
    if (!splashView.classList.contains('d-none')) {
       // Em uma aplicação real, você esperaria o clique no botão "Começar"
       // showView('topics-view'); 
    }
}, 3000); // Mostra a splash por 3 segundos