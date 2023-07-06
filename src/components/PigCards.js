import React, {useState} from "react";

function PigCards({name, image, specialty, greased, weight, highestMedal}) {

    // console.log(` greased`, greased)
const [showDetails, setShowDetails] =useState(false)

    function detailDisplay(name) {
        // console.log(`hello`, name )
        // console.log(`showDetails`, showDetails)
        setShowDetails(!showDetails)
}

    return(
    <div className="ui four wide column pigTile">
        <h3>{name}</h3>
        <img alt={name} src={image} style={{width: "100%"}} onClick={e => detailDisplay(name)} /> 
       { showDetails ? <section>
        <p>specialty: {specialty}</p>
        <p>{`greased:  ${greased}`}</p>
        <p>weight: {weight}</p>
        <p className="achievementText">highestMedal: {highestMedal}</p>
        </section> : null}
    </div>
    )
}





export default PigCards