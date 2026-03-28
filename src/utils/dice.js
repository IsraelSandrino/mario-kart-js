import { BLOCKS, CONFRONT_TYPES, RACE_CONFIG } from "../constants.js";

// Função para simular o lançamento de um dado de 6 faces
export function rollDice() {
  return Math.floor(Math.random() * RACE_CONFIG.TOTAL_LAPS) + 1;
}

// Função para sortear um atributo aleatório (RETA, CURVA ou CONFRONTO)
export function getRandomAttribute() {
	let random = Math.random();
	let result = "";

	switch (true) {
		case random < 0.33:
			result = BLOCKS.RETA;
			break;
		case random < 0.66:
			result = BLOCKS.CURVA;
			break;
		default:
			result = BLOCKS.CONFRONTO;
	}

	return result;
};

// Função para sortear o tipo de confronto (casco ou bomba)
export function sortConfrontType() {
  let random = Math.random();
	let result = "";

  if (random < 0.5) {
    result = CONFRONT_TYPES.CASCO;
  } else {
    result = CONFRONT_TYPES.BOMBA;
  }

  return result;
}