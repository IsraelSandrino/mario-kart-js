import { BLOCKS, CONFRONT_TYPES, RACE_CONFIG } from "../constants.js";
import { rollDice, getRandomAttribute, sortConfrontType } from "../utils/dice.js"
import { logRollResult, logConfrontTypesCasco, logConfrontTypesBomba } from "../utils/logger.js"
import { processBlock } from "../utils/processBlock.js";

// Função para simular a corrida
export async function playRaceEngine (character1, character2) {
  // Simula a volta/rodada da corrida
  for (let i = 0; i < RACE_CONFIG.TOTAL_LAPS; i++) {
    console.log(`\n🏎️  Volta ${i + 1} ...\n`);
  
    // Sortear um atributo para a rodada
    let block = getRandomAttribute();
    console.log(`🎯 Bloco sorteado para a rodada: ${block}\n`);

    // Simula o lançamento do dado para cada jogador
    let rollDicePlayer1 = rollDice();
    let rollDicePlayer2 = rollDice();

    if (block === BLOCKS.RETA) {
      await processBlock(character1, character2, rollDicePlayer1, rollDicePlayer2, "velocidade", "velocity", "a reta", "empatada");
    }

    if (block === BLOCKS.CURVA) {
      await processBlock(character1, character2, rollDicePlayer1, rollDicePlayer2, "manobrabilidade", "maneuverability", "a curva", "empatada");
    }

    if (block === BLOCKS.CONFRONTO) {
      
      let powerPlayer1 = rollDicePlayer1 + character1.attributeLabels.power;
      let powerPlayer2 = rollDicePlayer2 + character2.attributeLabels.power;
      let confrontType = sortConfrontType();

      console.log(`${character1.name} confrontou com ${character2.name}! 🥊\n`);

      await logRollResult(character1.name, "poder", rollDicePlayer1, character1.attributeLabels.power);
      await logRollResult(character2.name, "poder", rollDicePlayer2, character2.attributeLabels.power);

      if (powerPlayer1 > powerPlayer2) {
          character1.points++;
          if (confrontType === CONFRONT_TYPES.CASCO) {
              if (character2.points > 0) character2.points--;
              await logConfrontTypesCasco(character1.name, character2.name);
          } else {
              character2.points = Math.max(0, character2.points - 2);
              await logConfrontTypesBomba(character1.name, character2.name);
          }
      } else if (powerPlayer2 > powerPlayer1) {
          character2.points++;
          if (confrontType === CONFRONT_TYPES.CASCO) {
              if (character1.points > 0) character1.points--;
              await logConfrontTypesCasco(character2.name, character1.name);
          } else {
              character1.points = Math.max(0, character1.points - 2);
              await logConfrontTypesBomba(character2.name, character1.name);
          }
      } else {
          console.log(`O confronto terminou empatado! 🤝`);
      }
    }

    console.log("-----------------------------");
  }  
}

export async function declareWinner (character1, character2) {
  console.log(`\n🏁 Corrida finalizada! 🏁`);
  console.log(`${character1.name} tem ${character1.points} pontos.`);
  console.log(`${character2.name} tem ${character2.points} pontos.`);

  if (character1.points > character2.points) {
    console.log(`\n🎉 ${character1.name} é o vencedor! 🎉`);
  } else if (character2.points > character1.points) {
    console.log(`\n🎉 ${character2.name} é o vencedor! 🎉`);
  } else {
    console.log(`\n🤝 A corrida terminou empatada! 🤝`);
  }
}