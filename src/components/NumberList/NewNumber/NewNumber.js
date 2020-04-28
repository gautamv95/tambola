import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const PaperWrap = styled(Paper)({
	width: "20%",
	margin: "0.5rem auto",
	padding: "1rem",
	textAlign: "center",
});
const Text = styled(Typography)({
	fontFamily: "Nunito Sans, sans-serif",
	fontSize: "1.5rem",
});
const Heading = styled(Typography)({
	fontSize: "1.5rem",
	margin: "2rem auto 0",
	fontFamily: "Montserrat, sans-serif",
});
class NewNumber extends Component {
	render() {
		return (
			<React.Fragment>
				<Heading>{this.props.heading}</Heading>
				<PaperWrap>
					<Text>{this.props.currentNum}</Text>
				</PaperWrap>
			</React.Fragment>
		);
	}
}

export default NewNumber;
