import React, { PureComponent } from "react";
import {
	TableContainer,
	Paper,
	Table,
	TableBody,
	TableRow,
} from "@material-ui/core";
import { ElementCell, Text } from "./styles";
import tickets from "../../TicketsDB/ticketsDB";

class TicketsGrid extends PureComponent {
	render() {
		const row1 = tickets[this.props.ticketID].firstRow.map((num) => {
			return (
				<ElementCell align="center" key={num}>
					{num}
				</ElementCell>
			);
		});
		const row2 = tickets[this.props.ticketID].secondRow.map((num) => {
			return (
				<ElementCell align="center" key={num}>
					{num}
				</ElementCell>
			);
		});
		const row3 = tickets[this.props.ticketID].thirdRow.map((num) => {
			return (
				<ElementCell align="center" key={num}>
					{num}
				</ElementCell>
			);
		});
		return (
			<>
				<Text variant="h5" align="center" display="block">
					Ticket: {this.props.ticketID}
				</Text>
				<TableContainer component={Paper}>
					<Table>
						<TableBody padding="none">
							<TableRow hover>{row1}</TableRow>
							<TableRow hover>{row2}</TableRow>
							<TableRow hover>{row3}</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</>
		);
	}
}

export default TicketsGrid;
