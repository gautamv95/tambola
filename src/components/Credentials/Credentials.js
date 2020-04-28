import React from "react";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

const Text = styled(Typography)({
	backgroundColor: blue[700],
	padding: "1rem",
	fontFamily: "Montserrat, sans-serif",
	margin: "1rem auto",
	color: blueGrey[50],
	borderRadius: "12px",
	fontSize: "12px",
});
const Credentials = (props) => {
	return (
		<React.Fragment>
			<Text variant="subtitle2">&lt; &gt; with ❤ by Gautam Verma</Text>
		</React.Fragment>
	);
};

export default Credentials;
