import React from "react";
import { Typography } from "@material-ui/core";
import { grey, blueGrey, cyan, deepOrange } from "@material-ui/core/colors";

function Numbers(props) {
	const style = {
		display: "inline-block",
		padding: "1rem",
		textAlign: "center",
		margin: "0.6rem",
		backgroundColor: props.num ? cyan[800] : blueGrey[100],
		color: props.num ? grey[50] : grey[900],
		width: "1.5rem",
		borderRadius: "5px",
		fontFamily: "Nunito Sans, sans-serif",
	};

	const currentNum = { ...style, backgroundColor: deepOrange[600] };

	let breakPtr = props.number % 10 ? null : <br />;
	return (
		<React.Fragment>
			{props.number === props.currentNum ? (
				<Typography style={currentNum}>{props.number}</Typography>
			) : (
				<Typography style={style}>{props.number}</Typography>
			)}
			{breakPtr}
		</React.Fragment>
	);
}

export default Numbers;
