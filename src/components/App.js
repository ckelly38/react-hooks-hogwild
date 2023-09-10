import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hog from "./Hog";
import FilterGreased from "./FilterGreased";

function App() {
	const [myGFilter, setGFilter] = useState("All");

	let filteredhogs = hogs;
	if (myGFilter === "All");
	else
	{
		filteredhogs = hogs.filter((hog) =>
			((myGFilter === "Greased" && hog.greased) || (myGFilter === "Not Greased" && !hog.greased)));
	}

	let disphogs = filteredhogs.map((hog) => 
		<Hog key={hog.name} name={hog.name} weight={hog.weight} specialty={hog.specialty}
		image={hog.image} greased={hog.greased} highestAward={hog["highest medal achieved"]} />
	);

	return (
		<div className="App">
			<Nav />
			<FilterGreased value={myGFilter} change={setGFilter} />
			{disphogs}
		</div>
	);
}

export default App;
