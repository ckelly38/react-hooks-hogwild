import React from "react";

function FilterComponent({type = "Greased", name, value, change})
{
    function handleChange(event)
    {
        change(event.target.value);
    }

    let myoptsvals = null;
    if (type === "Greased") myoptsvals = ["All", "Greased", "Not Greased"];
    else if (type === "Sort") myoptsvals = ["Name", "Weight"];
    else throw new Error("invlaid type found and used here for the filter component!");

    let myopts = null;
    if (myoptsvals === null);
    else myopts = myoptsvals.map((opt) => <option key={opt} value={opt}>{opt}</option>);

    return (
        <select id={name} value={value} onChange={handleChange} >
            {myopts}
        </select>
    );
}

export default FilterComponent;
