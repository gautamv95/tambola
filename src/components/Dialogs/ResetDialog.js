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
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
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
				size="small"
				variant="outlined"
				color="primary"
				onClick={onRequestClose}
			>
				No
			</Button>,
			<Button
				size="small"
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
