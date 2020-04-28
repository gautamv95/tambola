import React from "react";
import "./App.css";
import NumberList from "./components/NumberList/NumberList";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NumberList />
			</div>
		);
	}
}

export default App;
