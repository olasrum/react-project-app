import React from "react";

function Home() {
    return (
        <div>
            <header class="header"></header>
            <header className="intro">
                <h1>All About Brownies</h1>
                <h3>The recipe app for brownie lovers</h3>
                <p>Bake one of our delicious recipes and submit a picture for our gallery</p>
                <p>Happy baking!</p>
            </header>
            <div >
                <img className="brownie-main" src="./images/home_page_brownie.jpg" alt="Brownies"></img>
            </div>
        </div>   
    )
}

export default Home;