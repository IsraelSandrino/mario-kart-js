import { players } from "./src/data/characters.js";
import { playRaceEngine, declareWinner } from "./src/engine/raceEngine.js"

(async function main() {
	console.log(`🏁 Corrida entre ${players[0].name} e ${players[1].name} começando ...\n`);

  await playRaceEngine(players[0], players[1]);
  await declareWinner(players[0], players[1]);
}());