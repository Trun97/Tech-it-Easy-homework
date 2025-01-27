import {bestSellingTv} from "../constants/inventory.js";

function nameTv (nameObject) {
    let bestTV = "";
    bestTV = nameObject.brand + " " + nameObject.type + " - " + nameObject.name;
    return bestTV;
}
export default nameTv();

