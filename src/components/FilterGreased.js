import React from "react";

function FilterGreased({value, change})
{
    function handleChange(event)
    {
        change(event.target.value);
    }

    return (
        <select id="GreasedFilter" value={value} onChange={handleChange} >
            <option value="All">All</option>
            <option value="Greased">Greased</option>
            <option value="Not Greased">Not Greased</option>
        </select>
    );
}

export default FilterGreased;
