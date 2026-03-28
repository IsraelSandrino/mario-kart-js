export function logRollResult(characterName, attributeName, rollDiceResult, attributeNumber) {
  console.log(`${characterName} rolou o dado e obteve: ${rollDiceResult} 🎲`);
  console.log(`${characterName} tem o atributo ${attributeName} igual a: ${attributeNumber}`);
  console.log(`Total de pontos para ${characterName} nessa rodada: ${rollDiceResult + attributeNumber}\n`);
}

export function logConfrontTypesCasco(characterName1, characterName2) {
  console.log(`${characterName1} venceu o confronto e ganhou 1 ponto! ${characterName2} foi atingido por um casco, perdendo 1 ponto! 🏆`)
}

export function logConfrontTypesBomba(characterName1, characterName2) {
  console.log(`${characterName1} venceu o confronto e ganhou 1 ponto! ${characterName2} foi atingido por uma bomba, perdendo 2 pontos! 🏆`)
}