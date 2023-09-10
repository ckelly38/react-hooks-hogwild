import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hog from "./Hog";
import FilterComponent from "./FilterComponent";

function App() {
	const [myGFilter, setGFilter] = useState("All");
	const [sortfltr, setSortFltr] = useState("Name");

	function sortByName(a, b)
	{
		if (a.name < b.name) return -1;
		else if (a.name > b.name) return 1;
		else return 0;
	}
	function sortByWeight(a, b)
	{
		if (a.weight < b.weight) return -1;
		else if (a.weight > b.weight) return 1;
		else return 0;
	}

	let filteredhogs = hogs;
	if (myGFilter === "All");
	else
	{
		filteredhogs = hogs.filter((hog) =>
			((myGFilter === "Greased" && hog.greased) || (myGFilter === "Not Greased" && !hog.greased)));
	}

	let nwfilteredhogs = filteredhogs.map((hog) => hog);
	if (sortfltr === "Weight") nwfilteredhogs.sort(sortByWeight);
	else nwfilteredhogs.sort(sortByName);

	let disphogs = nwfilteredhogs.map((hog) => 
		<Hog key={hog.name} name={hog.name} weight={hog.weight} specialty={hog.specialty}
		image={hog.image} greased={hog.greased} highestAward={hog["highest medal achieved"]} />
	);

	return (
		<div className="App">
			<Nav />
			<FilterComponent type="Greased" name="GreasedFilter" value={myGFilter} change={setGFilter} />
			<FilterComponent type="Sort" name="SortFilter" value={sortfltr} change={setSortFltr} />
			{disphogs}
		</div>
	);
}

export default App;
