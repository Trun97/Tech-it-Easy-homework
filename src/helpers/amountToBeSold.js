import {inventory} from "../constants/inventory.js";
import {bestSellingTv} from "../constants/inventory.js";
import amountSold from "./amountSold.js";
import amountPurchased from "./amountPurchased.js";

function amountToBeSold () {
     return amountPurchased - amountSold;
}

export default amountToBeSold();

//waarom kan ik hier exporteren met amountToBeSold() ..dus met de haakjes, en bij mijn helper nameTv
//en alles wat erna komt niet?