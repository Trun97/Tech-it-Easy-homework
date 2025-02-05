import {bestSellingTv} from "../constants/inventory.js";
import {inventory} from "../constants/inventory.js";


function nameTv (nameObject) {
    let bestTV = "";
    bestTV = nameObject.brand + " " + nameObject.type + " - " + nameObject.name;
    return bestTV;
}
export default nameTv;


//waarom moet ik hier exporteren met nameTv ..dus zondder de haakjes, en bij mijn helper amoutToBeSold
//en alle helpers daarvoor niet?

