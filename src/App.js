import React from "react";
import "./App.css";
import NumberList from "./components/NumberList/NumberList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path="/users">
							<Users />
						</Route>
						<Route path="/">
							<NumberList />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
