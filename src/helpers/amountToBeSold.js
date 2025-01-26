import {inventory} from "../constants/inventory.js";
import {bestSellingTv} from "../constants/inventory.js";
import amountSold from "./amountSold.js";
import amountPurchased from "./amountPurchased.js";

function amountToBeSold () {
     return amountPurchased - amountSold;
}

export default amountToBeSold();