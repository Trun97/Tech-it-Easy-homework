import {bestSellingTv} from "../constants/inventory.js";


function screenSize (ObjectName) {
    let sizes = "";
    for (let i = 0; i < ObjectName.availableSizes.length; i++) {
        let convertToCm = Math.round(ObjectName.availableSizes[i]* 2.54);
        sizes += ObjectName.availableSizes[i] + " inch (" + convertToCm + " cm) | ";
    }
    sizes = sizes.slice(0,-2);
    return sizes;
}

export default screenSize();