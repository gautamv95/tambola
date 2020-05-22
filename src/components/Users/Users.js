import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Header } from "./styles";
import UserCards from "./UserCards/UserCards";

class Users extends Component {
	state = {
		users: [
			{ name: "Gautam", tickets: [1, 2, 3] },
			{ name: "Gautam", tickets: [1, 2, 3] },
			{ name: "Gautam", tickets: [1, 2, 3] },
			{ name: "Gautam", tickets: [1, 2, 3] },
			{ name: "Gautam", tickets: [1, 2, 3] },
			{ name: "Gautam", tickets: [1, 2, 3] },
		],
	};

	render() {
		const cards = this.state.users.map((user, index) => {
			return (
				<Grid item md={3} xs={6}>
					<UserCards user={user} index={index} />
				</Grid>
			);
		});
		return (
			<div style={{ width: "100%" }}>
				<Grid justify="space-around" container>
					<Grid item md={2} />
					<Grid item md={8} xs={12}>
						<Header align="center" variant="h4">
							Players
						</Header>
						<Grid container spacing={3}>
							{cards}
						</Grid>
					</Grid>
					<Grid item md={2} />
				</Grid>
			</div>
		);
	}
}

export default Users;
