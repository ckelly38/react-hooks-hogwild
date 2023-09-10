import React, {useState} from "react";

function Hog({name, weight, image, specialty, highestAward, greased})
{
    const [displayHog, setDisplayHog] = useState(true);

    console.log("name = " + name);
    console.log("image = " + image);
    console.log("weight = " + weight);
    console.log("specialty = " + specialty);
    console.log("highestAward = " + highestAward);
    console.log("greased = " + greased);

    function toggleDisplay(cidsec, name, csetstate = false)
    {
        console.log("cidsec = " + cidsec);
        console.log("name = " + name);
        const myelem = document.getElementById(cidsec + name);
        if (myelem.style.display === "none")
        {
            myelem.style.display = "block";
            if (csetstate) setDisplayHog(true);
            //else;//do nothing
        }
        else
        {
            myelem.style.display = "none";
            if (csetstate) setDisplayHog(false);
            //else;//do nothing
        }
    }

    function toggleDisplayInfoContainer(event, name = "")
    {
        console.log("event.target = " + event.target);
        console.log("name = " + name);
        console.log("this = " + this);
        if (name === null || name === "undefined" || name === "")
        {
            toggleDisplay("info-", "" + this, false);
        }
        else toggleDisplay("info-", name, false);
    }

    function toggleDisplayHog(event, name = "")
    {
        console.log("event.target = " + event.target);
        console.log("name = " + name);
        console.log("this = " + this);

        if (name === null || name === "undefined" || name === "")
        {
            toggleDisplay("image-info-container-", "" + this, true);
        }
        else toggleDisplay("image-info-container-", name, true);
    }

    return (
        <div id={"container-"+name} onClick={toggleDisplayInfoContainer.bind(name)}>
            <h1>Name: {name}</h1>
            <div id={"image-info-container-"+name}>
                <img src={image} alt={name} />
                <div id={"info-"+name} style={{display: "none"}}>
                    <p id={"weight-"+name}>Weight: {weight} pounds</p>
                    <i id={"specialty-"+name}>Specialty: {specialty}</i><br />
                    <b id={"award-"+name}>Highest Medal Achieved: {highestAward}</b><br />
                    <u id={"greased-"+name}>Greased: {greased ? "true" : "false"}</u><br />
                </div>
            </div>
            <button onClick={toggleDisplayHog.bind(name)}>{displayHog ? "Hide" : "Show"} This Hog</button>
        </div>
    );
}

export default Hog;
