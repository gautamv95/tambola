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
	margin: "0.5rem 0.5rem 0.5rem 0",
	display: "inline-block",
});
const DialogWrapper = styled(Dialog)({
	padding: "1rem",
});
const DialogActionsWrapper = styled(DialogActions)({
	padding: "1rem",
});

class ResetDialog extends React.Component {
	render() {
		const { open, onReset, onRequestClose } = this.props;
		const action = [
			<Button
				size="sm"
				variant="outlined"
				color="primary"
				onClick={onRequestClose}
			>
				No
			</Button>,
			<Button
				size="sm"
				variant="contained"
				color="primary"
				onClick={onReset}
			>
				Yes
			</Button>,
		];
		return (
			<React.Fragment>
				<DialogWrapper
					maxWidth="xl"
					TransitionComponent={Transition}
					open={open}
					onClose={onRequestClose}
				>
					<DialogTitle>Alert</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Are you sure want to Reset?
							<Typography variant="subtitle1">
								(This cannot be undone)
							</Typography>
						</DialogContentText>
					</DialogContent>
					<DialogActionsWrapper>{action}</DialogActionsWrapper>
				</DialogWrapper>
			</React.Fragment>
		);
	}
}

export default ResetDialog;
