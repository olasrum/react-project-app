import React from "react";

function Brownie({brownie}) {
    return (
        <div>
            <img className="brownie" src={brownie.image} alt={brownie.title}></img>
            <header className="title">
                <h2>{brownie.title}</h2>
            </header>
            <ul className="ingredients">
                <li>{brownie.ingredient1}</li>
                <li>{brownie.ingredient2}</li>
                <li>{brownie.ingredient3}</li>
                <li>{brownie.ingredient4}</li>
                <li>{brownie.ingredient5}</li>
                <li>{brownie.ingredient6}</li>
                <li>{brownie.ingredient7}</li>
                <li>{brownie.ingredient8}</li>
            </ul>
            <div className="method">
                <p>{brownie.method}</p>
            </div>
            <div className="source">
                <sup>Source: <a href="https://www.bbcgoodfood.com/recipes/collection/brownie-recipes">{brownie.source}</a></sup>
            </div>
            <hr></hr>
        </div>
    )
}

export default Brownie;