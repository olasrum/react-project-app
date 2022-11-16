import React from "react";
import Brownie from "./Brownie";

function BrownieList({brownies}) {
    const displayBrownies = brownies.map((brownie) => {
        return <Brownie 
                    key={brownie.id} 
                    brownie={brownie}  
                /> 
    })

    return (
        <div>
            <header className="header"></header>
            {displayBrownies}
        </div>
    )     
}

export default BrownieList;