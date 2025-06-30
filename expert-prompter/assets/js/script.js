// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- SELETORES DE ELEMENTOS DOM ---
    const views = {
        list: document.getElementById('scripts-list-view'),
        editor: document.getElementById('script-editor-view'),
        settings: document.getElementById('settings-view'),
        prompter: document.getElementById('teleprompter-view'),
    };
    const scriptsList = document.getElementById('scripts-list');
    const scriptForm = document.getElementById('script-form');
    const editorTitle = document.getElementById('editor-title');
    const scriptIdInput = document.getElementById('script-id');
    
    const cameraFeed = document.getElementById('camera-feed');
    const scrollingText = document.getElementById('scrolling-text');
    const recordBtn = document.getElementById('record-btn');
    const startScrollBtn = document.getElementById('start-scroll-btn');
    
    const scrollSpeedInput = document.getElementById('scroll-speed');
    const scrollSpeedValue = document.getElementById('scroll-speed-value');

    // --- ESTADO DA APLICAÇÃO ---
    let appState = {
        scripts: [],
        settings: {
            scrollSpeed: 120 // Duração padrão em segundos
        },
        currentScriptId: null,
        mediaRecorder: null,
        recordedChunks: [],
        isRecording: false,
        isScrolling: false,
    };

    // --- GERENCIAMENTO DE TELAS ---
    const showView = (viewName) => {
        Object.values(views).forEach(view => view.classList.add('d-none'));
        views[viewName].classList.remove('d-none');
    };

    // --- GERENCIAMENTO DE DADOS (LocalStorage) ---
    const storage = {
        getScripts: () => JSON.parse(localStorage.getItem('teleprompter_scripts')) || [],
        saveScripts: (scripts) => localStorage.setItem('teleprompter_scripts', JSON.stringify(scripts)),
        getSettings: () => JSON.parse(localStorage.getItem('teleprompter_settings')) || appState.settings,
        saveSettings: (settings) => localStorage.setItem('teleprompter_settings', JSON.stringify(settings)),
    };

    // --- LÓGICA DA UI ---
    const ui = {
        renderScriptsList: () => {
            scriptsList.innerHTML = '';
            if (appState.scripts.length === 0) {
                scriptsList.innerHTML = '<li class="list-group-item">Nenhum roteiro encontrado. Clique em "Novo" para criar um.</li>';
                return;
            }
            appState.scripts.forEach(script => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    <span class="script-title flex-grow-1" style="cursor: pointer;" data-id="${script.id}">
                        ${script.isRecorded ? '🟢' : '🔴'} ${script.tema}
                    </span>
                    <div>
                        <button class="btn btn-sm btn-outline-primary edit-btn" data-id="${script.id}"><i class="bi bi-pencil-fill"></i></button>
                        <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${script.id}"><i class="bi bi-trash-fill"></i></button>
                    </div>
                `;
                scriptsList.appendChild(li);
            });
        },
        populateEditor: (script) => {
            editorTitle.textContent = script ? 'Editar Roteiro' : 'Novo Roteiro';
            scriptIdInput.value = script ? script.id : '';
            scriptForm.tema.value = script ? script.tema : '';
            scriptForm.problema.value = script ? script.problema : '';
            scriptForm.solucao.value = script ? script.solucao : '';
            scriptForm.promessa.value = script ? script.promessa : '';
            scriptForm.prova_cta.value = script ? script.prova_cta : '';
        },
        updateSettingsUI: () => {
            scrollSpeedInput.value = appState.settings.scrollSpeed;
            scrollSpeedValue.textContent = appState.settings.scrollSpeed;
        }
    };
    
    // --- LÓGICA DO TELEPROMPTER ---
    const prompter = {
        startCamera: async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: true });
                cameraFeed.srcObject = stream;
                appState.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

                appState.mediaRecorder.ondataavailable = event => {
                    if (event.data.size > 0) appState.recordedChunks.push(event.data);
                };

                appState.mediaRecorder.onstop = () => {
                    const blob = new Blob(appState.recordedChunks, { type: 'video/webm' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = `roteiro_${appState.currentScriptId}_${new Date().toISOString()}.webm`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    appState.recordedChunks = [];
                };
            } catch (err) {
                alert('Não foi possível acessar a câmera. Verifique as permissões.');
                console.error("Erro ao acessar câmera: ", err);
            }
        },
        stopCamera: () => {
            if (cameraFeed.srcObject) {
                cameraFeed.srcObject.getTracks().forEach(track => track.stop());
                cameraFeed.srcObject = null;
            }
        },
        loadScript: (scriptId) => {
            const script = appState.scripts.find(s => s.id == scriptId);
            if (!script) return;
            appState.currentScriptId = scriptId;
            const fullText = [script.problema, script.solucao, script.promessa, script.prova_cta].join('\n\n');
            scrollingText.innerHTML = fullText.replace(/\n/g, '<br>');
            showView('prompter');
            prompter.startCamera();
        },
        toggleScroll: () => {
            appState.isScrolling = !appState.isScrolling;
            if (appState.isScrolling) {
                scrollingText.style.animationDuration = `${appState.settings.scrollSpeed}s`;
                scrollingText.classList.add('is-scrolling');
                startScrollBtn.innerHTML = '<i class="bi bi-pause-fill"></i> Pausar';
            } else {
                scrollingText.style.animationPlayState = 'paused';
                startScrollBtn.innerHTML = '<i class="bi bi-play-fill"></i> Retomar';
            }
        },
        resetScroll: () => {
            scrollingText.classList.remove('is-scrolling');
            scrollingText.style.animationPlayState = 'running';
            scrollingText.style.animationDuration = '0s';
            appState.isScrolling = false;
            startScrollBtn.innerHTML = '<i class="bi bi-play-fill"></i> Iniciar';
        },
        toggleRecording: () => {
            appState.isRecording = !appState.isRecording;
            if (appState.isRecording) {
                if (!appState.mediaRecorder || appState.mediaRecorder.state === 'inactive') {
                    appState.recordedChunks = [];
                    appState.mediaRecorder.start();
                    recordBtn.innerHTML = '<i class="bi bi-stop-circle-fill"></i> Parar';
                    recordBtn.classList.add('glowing');
                }
            } else {
                if (appState.mediaRecorder && appState.mediaRecorder.state === 'recording') {
                    appState.mediaRecorder.stop();
                    // Marca o roteiro como gravado
                    const script = appState.scripts.find(s => s.id == appState.currentScriptId);
                    if (script) script.isRecorded = true;
                    storage.saveScripts(appState.scripts);
                    
                    recordBtn.innerHTML = '<i class="bi bi-record-circle"></i> Gravar';
                    recordBtn.classList.remove('glowing');
                    alert('Gravação salva! O download começará em breve.');
                }
            }
        }
    };

    // --- EVENT LISTENERS ---
    document.getElementById('add-script-btn').addEventListener('click', () => {
        ui.populateEditor(null);
        showView('editor');
    });

    document.getElementById('settings-btn').addEventListener('click', () => {
        ui.updateSettingsUI();
        showView('settings');
    });

    scrollSpeedInput.addEventListener('input', (e) => {
        scrollSpeedValue.textContent = e.target.value;
    });

    document.getElementById('save-settings-btn').addEventListener('click', () => {
        appState.settings.scrollSpeed = parseInt(scrollSpeedInput.value);
        storage.saveSettings(appState.settings);
        showView('list');
    });

    scriptsList.addEventListener('click', (e) => {
        const target = e.target;
        const scriptId = target.closest('[data-id]')?.dataset.id;
        if (!scriptId) return;

        if (target.closest('.script-title')) {
            prompter.loadScript(scriptId);
        } else if (target.closest('.edit-btn')) {
            const script = appState.scripts.find(s => s.id == scriptId);
            ui.populateEditor(script);
            showView('editor');
        } else if (target.closest('.delete-btn')) {
            if (confirm('Tem certeza que deseja excluir este roteiro?')) {
                appState.scripts = appState.scripts.filter(s => s.id != scriptId);
                storage.saveScripts(appState.scripts);
                ui.renderScriptsList();
            }
        }
    });

    scriptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = scriptIdInput.value;
        const scriptData = {
            tema: scriptForm.tema.value,
            problema: scriptForm.problema.value,
            solucao: scriptForm.solucao.value,
            promessa: scriptForm.promessa.value,
            prova_cta: scriptForm.prova_cta.value,
            isRecorded: false
        };

        if (id) { // Editando
            const index = appState.scripts.findIndex(s => s.id == id);
            appState.scripts[index] = { ...appState.scripts[index], ...scriptData };
        } else { // Criando
            scriptData.id = Date.now();
            appState.scripts.push(scriptData);
        }
        storage.saveScripts(appState.scripts);
        ui.renderScriptsList();
        showView('list');
    });
    
    document.getElementById('cancel-edit-btn').addEventListener('click', () => showView('list'));

    // Controles do Teleprompter
    startScrollBtn.addEventListener('click', prompter.toggleScroll);
    recordBtn.addEventListener('click', prompter.toggleRecording);
    document.getElementById('back-to-list-btn').addEventListener('click', () => {
        prompter.stopCamera();
        prompter.resetScroll();
        ui.renderScriptsList(); // Atualiza os status 🔴/🟢
        showView('list');
    });

    // --- INICIALIZAÇÃO ---
    const init = async () => {
        appState.scripts = storage.getScripts();
        appState.settings = storage.getSettings();

        // Se o localStorage estiver vazio, carrega do JSON de exemplo
        if (appState.scripts.length === 0) {
            try {
                const response = await fetch('assets/js/roteiros.json');
                const exampleScripts = await response.json();
                appState.scripts = exampleScripts;
                storage.saveScripts(appState.scripts);
            } catch(err) {
                console.error("Não foi possível carregar os roteiros de exemplo.", err);
            }
        }
        
        ui.renderScriptsList();
        showView('list');
    };

    init();
});