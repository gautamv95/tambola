import React from "react";
import {
	Dialog,
	Button,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const Text = styled(Typography)({
	margin: "0.4rem 0.4rem 0.4rem 0",
	padding: "0.2rem",
	display: "inline-block",
});
const BorderedText = styled(Text)({
	border: "3px solid black",
	borderColor: indigo[900],
});
const QueueDialog = styled(Dialog)({
	padding: "1rem",
});
const QueueDialogActions = styled(DialogActions)({
	padding: "1rem",
});

class ShowQueueDialog extends React.Component {
	render() {
		const { open, arrayz, onRequestClose, currentNumber } = this.props;
		const pastNum = arrayz.map((num) => {
			if (num === currentNumber)
				return <BorderedText key={num}>{num} = > </BorderedText>;
			return <Text key={num}>{num} = > </Text>;
		});
		const action = [
			<Button variant="outlined" color="primary" onClick={onRequestClose}>
				Close
			</Button>,
		];
		return (
			<React.Fragment>
				<QueueDialog
					maxWidth="xl"
					TransitionComponent={Transition}
					open={open}
					onClose={onRequestClose}
					onBackdropClick={onRequestClose}
				>
					<DialogTitle>Previous Numbers</DialogTitle>
					<DialogContent>
						<DialogContentText>
							{arrayz.length ? (
								pastNum
							) : (
								<Text>Boomer Nothing to show here!</Text>
							)}
						</DialogContentText>
					</DialogContent>
					<QueueDialogActions>{action}</QueueDialogActions>
				</QueueDialog>
			</React.Fragment>
		);
	}
}

export default ShowQueueDialog;
