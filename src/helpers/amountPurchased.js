import {inventory} from "../constants/inventory.js";
import {bestSellingTv} from "../constants/inventory.js";

function amountPurchased () {
    let numberPurchaseRegular = 0;
    let numberPurchased = 0;
    for (let i = 0; i < inventory.length; i++) {
        numberPurchaseRegular += inventory[i].originalStock;
    }
    numberPurchased = numberPurchaseRegular + bestSellingTv.originalStock;
    return numberPurchased
}

export default amountPurchased();