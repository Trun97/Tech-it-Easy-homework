import './App.css';
import amountSold from "./helpers/amountSold.js";
import amountPurchased from "./helpers/amountPurchased.js";
import amountToBeSold from "./helpers/amountToBeSold.js";
import nameTv from "./helpers/nameTv.js";
import priceEuro from "./helpers/priceEuro.js";
import screenSize from "./helpers/screenSize.js";
import {bestSellingTv} from "./constants/inventory.js";
import samsungImage from "./assets/screenshots/samsung.png";
import checkImage from "./assets/check.png";
import minusImage from "./assets/minus.png";

function App() {
    function clickOne() {
        console.log("Meest verkocht eerst");
    }

    function clickTwo() {
        console.log("Goedkoopste eerst");
    }

    function clickThree() {
        console.log("Meest geschikt voor sport eerst");
    }

    return (
        <div className="body">
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>
            <main>
                <h3>Verkoopoverzicht</h3>
                <div className="outerCol">
                    <article className="innerCol1">
                        <p>Aantal verkochte producten</p>
                        <span>{amountSold}</span>
                    </article>
                    <article className="innerCol2">
                        <p>Aantal ingekochte producten</p>
                        <span>{amountPurchased}</span>
                    </article>
                    <article className="innerCol3">
                        <p>Aantal te verkopen producten</p>
                        <span>{amountToBeSold}</span>
                    </article>
                </div>
            </main>
            <footer>
                <h3>Best verkochte tv</h3>
                <article className="bestSold">
                    <span className={"samsung"}>
                        <img src={samsungImage} alt="afbeelding tv"/>
                    </span>
                    <div className="specs">
                        <div className="specsTv">
                            <div>{nameTv(bestSellingTv)}</div>
                            <div>{priceEuro(bestSellingTv.price)}</div>
                            <div>{screenSize(bestSellingTv)}</div>
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
                    </div>
                </article>
                <div className="buttons">
                    <button type="button" onClick={clickOne}>Meest verkocht eerst</button>
                    <button type="button" onClick={clickTwo}>Goedkoopste eerst</button>
                    <button type="button" onClick={clickThree}>Meest geschikt voor sport eerst</button>
                </div>
            </footer>
        </div>
    )
}

export default App
