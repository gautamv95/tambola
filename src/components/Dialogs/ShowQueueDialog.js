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
import { cyan } from "@material-ui/core/colors";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const Text = styled(Typography)({
	margin: "0.5rem",
	display: "inline-block",
});
const UnderlineText = styled(Text)({
	textDecoration: "underline overline",
	textDecorationStyle: "dashed",
	textDecorationColor: cyan[900],
});
const QueueDialog = styled(Dialog)({
	padding: "1rem",
});
const QueueDialogActions = styled(DialogActions)({
	padding: "1rem",
});

class ShowQueueDialog extends React.Component {
	render() {
		const { open, arrayz, onClose, currentNumber } = this.props;
		const action = [
			<Button variant="outlined" color="primary" onClick={onClose}>
				Close
			</Button>,
		];
		return (
			<React.Fragment>
				<QueueDialog
					maxWidth="xl"
					TransitionComponent={Transition}
					open={open}
					onClose={onClose}
					onBackdropClick={onClose}
				>
					<DialogTitle>Previous Numbers</DialogTitle>
					<DialogContent>
						<DialogContentText>
							{arrayz.map((num) => {
								if (num === currentNumber)
									return (
										<UnderlineText key={num}>
											{num} = >{" "}
										</UnderlineText>
									);
								return <Text key={num}>{num} = > </Text>;
							})}
						</DialogContentText>
					</DialogContent>
					<QueueDialogActions>{action}</QueueDialogActions>
				</QueueDialog>
			</React.Fragment>
		);
	}
}

export default ShowQueueDialog;
