import React, { Component } from "react";
import tickets from "../TicketsDB/ticketsDB";
import { Grid } from "@material-ui/core";
import { Header } from "../Users/styles";
import TicketsGrid from "./TicketsGrid/TicketsGrid";

class TicketsViewer extends Component {
	state = {};
	render() {
		return (
			<Grid container>
				<Grid item md={2} />
				<Grid item md={8}>
					<TicketsGrid ticketID={369} />
				</Grid>
				<Grid item md={2} />
			</Grid>
		);
	}
}

export default TicketsViewer;
