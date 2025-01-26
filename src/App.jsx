import './App.css';
import amountSold from "./helpers/amountSold.js";
import amountPurchased from "./helpers/amountPurchased.js";
import amountToBeSold from "./helpers/amountToBeSold.js";

function App() {
    return (
        <>
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
                <article>

                </article>
            </footer>
        </>
    )
}

export default App
