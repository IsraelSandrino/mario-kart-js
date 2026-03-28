import { logRollResult } from "./logger.js";

export async function processBlock(character1, character2, roll1, roll2, attributeName, attributeKey, blockName, tieWord) {
    const attr1 = character1.attributeLabels[attributeKey];
    const attr2 = character2.attributeLabels[attributeKey];
    
    const total1 = roll1 + attr1;
    const total2 = roll2 + attr2;
    
    logRollResult(character1.name, attributeName, roll1, attr1);
    logRollResult(character2.name, attributeName, roll2, attr2);
    
    if (total1 > total2) {
        console.log(`\n${character1.name} venceu ${blockName}! 🏆`);
        character1.points++;
    } else if (total2 > total1) {
        console.log(`\n${character2.name} venceu ${blockName}! 🏆`);
        character2.points++;
    } else {
        console.log(`\n${blockName} terminou ${tieWord}! 🤝`);
    }
}