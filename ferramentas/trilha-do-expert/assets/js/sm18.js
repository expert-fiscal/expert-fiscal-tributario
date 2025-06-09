// js/sm18.js - Arquivo com a lógica do algoritmo

/**
 * Calcula o próximo intervalo de revisão baseado no algoritmo SM-18.
 * Esta é uma versão simplificada para fins de demonstração.
 *
 * @param {number} easinessFactor - O fator de facilidade (EF) atual do item.
 * @param {number} repetitions - O número de vezes que o item foi revisado corretamente.
 * @param {number} quality - A qualidade da resposta (e.g., 1-5).
 * @param {number} lastInterval - O último intervalo em dias.
 * @returns {object} - Contém o novo intervalo, o novo EF e o novo número de repetições.
 */
function calculateNextReview(easinessFactor, repetitions, quality, lastInterval) {
    if (quality < 3) {
        // Se a resposta estiver errada, reinicia o processo de repetição.
        return {
            nextInterval: 1, // Revisa amanhã
            newEasinessFactor: easinessFactor, // EF não muda em uma falha
            newRepetitions: 0, // Reinicia a contagem
            isCorrect: false
        };
    }

    // Atualiza o Fator de Facilidade (EF)
    // A fórmula original do SM-18 é mais complexa, esta é uma aproximação.
    let newEasinessFactor = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (newEasinessFactor < 1.3) {
        newEasinessFactor = 1.3; // EF mínimo
    }

    let newRepetitions = repetitions + 1;
    let nextInterval;

    if (newRepetitions === 1) {
        nextInterval = 1;
    } else if (newRepetitions === 2) {
        nextInterval = 6;
    } else {
        nextInterval = Math.ceil(lastInterval * newEasinessFactor);
    }

    return {
        nextInterval,
        newEasinessFactor,
        newRepetitions,
        isCorrect: true
    };
}