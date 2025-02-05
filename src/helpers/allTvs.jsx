import samsungImage from "../assets/screenshots/samsung.png";
import nameTv from "./nameTv.js";
import {bestSellingTv} from "../constants/inventory.js";
import priceEuro from "./priceEuro.js";
import screenSize from "./screenSize.js";
import checkImage from "../assets/check.png";
import minusImage from "../assets/minus.png";
import {inventory} from "../constants/inventory.js";



function allTvs() {
    return <article className="bestSold">
                    <span className={"samsung"}>
                        <img src={samsungImage} alt="afbeelding tv"/>
                    </span>
        <div className="specs">
            <div>{nameTv(inventory)}</div>
            <div>{priceEuro(inventory.price)}</div>
            <div>{screenSize(inventory)}</div>
        </div>
        <div className="specsTv2">
                        <span>
                            <img src={checkImage} alt="check" className="images"/>
                        </span>
            <p>wifi</p>
            <span>
                            <img src={minusImage} alt="minus" className="images"/>
                        </span>
            <p>speech</p>
            <span>
                            <img src={checkImage} alt="check" className="images"/>
                        </span>
            <p>hdr</p>
            <span>
                            <img src={checkImage} alt="check" className="images"/>
                        </span>
            <p>bleutooth</p>
            <span>
                            <img src={minusImage} alt="minus" className="images"/>
                        </span>
            <p>ambilight</p>
        </div>
</article>
}

export default allTvs;