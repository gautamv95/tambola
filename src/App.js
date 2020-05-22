import React from "react";
import "./App.css";
import NumberList from "./components/NumberList/NumberList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import TicketsViewer from "./components/TicketsViewer/TicketsViewer";
import { StylesProvider } from "@material-ui/core";
import UserPage from "./components/UserPage/UserPage";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<StylesProvider injectFirst>
					<Router>
						<Switch>
							<Route
								path="/tickets/:ticketID"
								render={(props) => <TicketsViewer {...props} />}
							/>
							<Route exact path="/users">
								<Users />
							</Route>
							<Route
								path="/users/:userName"
								render={(props) => <UserPage {...props} />}
							/>
							<Route path="/">
								<NumberList />
							</Route>
						</Switch>
					</Router>
				</StylesProvider>
			</div>
		);
	}
}

export default App;
