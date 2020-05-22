import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Header } from "./styles";

class UserPage extends Component {
	render() {
		return (
			<>
				<Grid container justify="center">
					<Grid item>
						<Header align="center" variant="h4">
							{this.props.match.params.userName}
						</Header>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default UserPage;
