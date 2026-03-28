import { players } from "./src/data/characters.js";
import { playRaceEngine, declareWinner } from "./src/engine/raceEngine.js"
import { getRandomPlayers } from "./src/utils/dice.js";

(async function main() {
  const [player1, player2] = getRandomPlayers(players);

	console.log(`🏁 Corrida entre ${players[0].name} e ${players[1].name} começando ...\n`);

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
}());