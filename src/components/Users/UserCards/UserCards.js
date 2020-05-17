import React, { Component } from "react";
import {
	Typography,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	IconButton,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

class UserCards extends Component {
	state = {};
	render() {
		return (
			<Card>
				<CardHeader title={this.props.user} />
				<CardContent>
					<Typography variant="h6">Tickets:</Typography>
				</CardContent>
				<CardActions>
					<IconButton>
						<CreateIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Card>
		);
	}
}

export default UserCards;
