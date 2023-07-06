import React, {useState} from "react";
import PigCards from "./PigCards";
import HogFilter from "./HogFilter";

function PigContainer({hogs}) {

    const [greased, setGreased] = useState(false)
    const [sort, setSort] = useState('')

    function greaseFilter(checked) {
      setGreased(!greased)
    }

    function sortCheck(checked) {
        setSort(checked)
    }
console.log(sort)
    let displayHogs;

    greased ? displayHogs = hogs
    .filter((hog) => hog.greased === greased) : displayHogs = [...hogs]

    displayHogs.sort((a, b) => {
        if (sort === 'weight'){
            return a[sort] - b[sort] 
        } else if (sort === 'name') {return a[sort].localeCompare(b[sort])}
    
    })

        
    
    return (
    <div>
        <HogFilter greaseFilter={greaseFilter} sortCheck={sortCheck}/>
        <div className="ui grid container">
            {displayHogs.map((hog) => <PigCards key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog["highest medal achieved"]}/> )}
        </div>  
    </div>
    )

}

export default PigContainer;


