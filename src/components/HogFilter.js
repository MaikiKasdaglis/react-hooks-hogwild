import React from "react";

function HogFilter({greaseFilter, sortCheck}) {
    return(
    <div className="filterWrapper">
<form>
    <label htmlFor='checkbox'> Greased?! </label>
    <input name='checkbox' type={"checkbox"} onChange={e => greaseFilter(e.target.checked)}></input>
    <label htmlFor='sort'>Sort By:   </label>
    <select name='sort' onChange={e => sortCheck(e.target.value)}>
        <option></option>
        <option>name</option>
        <option>weight</option>
    </select>
</form>
    </div>
)}





export default HogFilter