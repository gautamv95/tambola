import React, { PureComponent } from "react";
import {
	Typography,
	CardHeader,
	CardContent,
	CardActions,
	IconButton,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

class UserCards extends PureComponent {
	generateUrl = () => {
		let path = "/users/";
		path += this.props.user.name;
		return path;
	};

	render() {
		const tickets = this.props.user.tickets.map((num, index) => {
			return (
				<span>
					{num}{" "}
					{this.props.user.tickets.length - 1 === index ? null : (
						<span>,</span>
					)}{" "}
				</span>
			);
		});
		return (
			<Wrapper>
				<CardHeader title={this.props.user.name} />
				<CardContent>
					<Typography variant="h6">Tickets: {tickets}</Typography>
				</CardContent>
				<CardActions>
					<IconButton component={Link} to={this.generateUrl}>
						<VisibilityIcon />
					</IconButton>
					<IconButton>
						<CreateIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Wrapper>
		);
	}
}

export default UserCards;
