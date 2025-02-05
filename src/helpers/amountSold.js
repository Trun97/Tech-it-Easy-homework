import {inventory} from "../constants/inventory.js";
import {bestSellingTv} from "../constants/inventory.js";

// functie declareren
// EXPORTEREN

// helperfunctie-checklist
// 1. functie + functienaam
// 2. functie moet JS teruggeven, er moet dus iets in return staan
// 3. exportstatement

function amountSold () {
    let numberRegularSold = 0;
    let numberSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        numberRegularSold += inventory[i].sold;
    }
    numberSold = numberRegularSold + bestSellingTv.sold;
    return numberSold;
}
export default  amountSold();