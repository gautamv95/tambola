import React, { Component } from "react";
import Numbers from "./Numbers/Numbers";
import "./NumberList.css";
import { Button, Typography } from "@material-ui/core";
import ComponentHeader from "./ComponentHeader/ComponentHeader";
import { styled } from "@material-ui/core/styles";
import ShowQueueDialog from "../Dialogs/ShowQueueDialog";
import ResetDialog from "../Dialogs/ResetDialog";
import Credentials from "../Credentials/Credentials";
import Sidebar from "../Layout/Sidebar/Sidebar";

const Heading = styled(Typography)({
	fontFamily: "Montserrat, sans-serif",
	fontSize: "2.5rem",
});

const MarginButton = styled(Button)({
	margin: "1rem 0 0",
});

class NumberList extends Component {
	state = {
		newNumber: 0,
		pastNumber: 0,
		numbers: [],
		numbersQueue: [],
		showQueueDialog: false,
		showResetDialog: false,
		isReset: true,
		waitingTimeForNextNumber: 0,
		hasClipboardAccess: true,
	};

	generateNewNumber = () => {
		let newNumber = Math.floor(Math.random() * 90) + 1;
		while (this.state.numbers[newNumber - 1] !== 0) {
			newNumber = Math.floor(Math.random() * 90) + 1;
		}
		const pastNumber = this.state.newNumber;
		let numbers = [...this.state.numbers];
		let numbersQueue = [...this.state.numbersQueue];
		numbersQueue.push(newNumber);
		numbers[newNumber - 1] = 1;
		this.setState({
			isReset: true,
			numbers,
			newNumber,
			numbersQueue,
			pastNumber,
		});
		if (this.state.hasClipboardAccess) this.copyToClipboard(newNumber);
		if (numbersQueue.length <= 89) this.startTimer(10);
	};

	copyToClipboard = (number) => {
		try {
			navigator.clipboard.writeText(number);
		} catch (err) {
			this.setState({ hasClipboardAccess: false });
		}
	};

	componentDidMount = () => {
		const isReset = JSON.parse(localStorage.getItem("isReset"));
		this.populateArray();
		if (isReset) {
			this.getFromLocalStorage();
			const waitingTimeForNextNumber = JSON.parse(
				localStorage.getItem("waitingTimeForNextNumber")
			);
			if (waitingTimeForNextNumber > 0)
				this.startTimer(waitingTimeForNextNumber);
		}
	};

	componentDidUpdate = () => {
		this.saveToLocalStorage();
	};

	getFromLocalStorage = () => {
		const numbersQueue = JSON.parse(localStorage.getItem("numbersQueue"));
		const numbers = JSON.parse(localStorage.getItem("numbers"));
		const newNumber = JSON.parse(localStorage.getItem("newNumber"));
		const pastNumber = JSON.parse(localStorage.getItem("pastNumber"));
		this.setState({ numbersQueue, numbers, newNumber, pastNumber });
	};

	saveToLocalStorage = () => {
		const {
			isReset,
			numbersQueue,
			numbers,
			newNumber,
			pastNumber,
			waitingTimeForNextNumber,
		} = this.state;
		localStorage.setItem("numbersQueue", JSON.stringify(numbersQueue));
		localStorage.setItem("numbers", JSON.stringify(numbers));
		localStorage.setItem("newNumber", JSON.stringify(newNumber));
		localStorage.setItem("pastNumber", JSON.stringify(pastNumber));
		localStorage.setItem("isReset", JSON.stringify(isReset));
		localStorage.setItem(
			"waitingTimeForNextNumber",
			JSON.stringify(waitingTimeForNextNumber)
		);
	};

	resetLocalStorage = () => {
		this.populateArray();
		this.setState({
			isReset: false,
			newNumber: 0,
			pastNumber: 0,
			numbersQueue: [],
			showResetDialog: false,
		});
	};

	populateArray = () => {
		let numbers = [];
		let i = 1;
		while (i < 91) {
			numbers.push(0);
			i++;
		}
		this.setState({ numbers });
	};

	startTimer = (max) => {
		this.setState({ waitingTimeForNextNumber: max });
		let i = 0;
		let z = setInterval(() => {
			if (i === max - 1) clearInterval(z);
			i++;
			this.setState({ waitingTimeForNextNumber: max - i });
		}, 1000);
	};

	_showQueueDialog = (value) => {
		this.setState({ showQueueDialog: value });
	};

	_showResetDialog = (value) => {
		this.setState({ showResetDialog: value });
	};

	render() {
		const list = this.state.numbers.map((num, index) => {
			return (
				<Numbers
					key={index + 1}
					currentNum={this.state.newNumber}
					number={index + 1}
					num={num}
				/>
			);
		});

		return (
			<React.Fragment>
				<Sidebar />
				<div id="numberList">
					<div className="numberList-left">
						<div>
							<Heading>Tambola</Heading>
						</div>
						<div>
							<MarginButton
								variant="contained"
								color="secondary"
								size="large"
								disabled={
									this.state.numbersQueue.length === 90 ||
									this.state.waitingTimeForNextNumber
										? true
										: false
								}
								onClick={this.generateNewNumber}
							>
								Generate Next Number
							</MarginButton>
						</div>
						<div id="numberList-left-divs">
							<ComponentHeader
								heading="Current Number"
								currentNum={this.state.newNumber}
							/>
							<ComponentHeader
								heading="Past Number"
								currentNum={this.state.pastNumber}
							/>
							<ComponentHeader
								heading="Time to Wait"
								currentNum={this.state.waitingTimeForNextNumber}
							/>
						</div>
						<div>
							<MarginButton
								variant="contained"
								color="secondary"
								size="small"
								disabled={this.state.showQueueDialog}
								onClick={() => {
									this._showQueueDialog(true);
								}}
							>
								Show Previous Numbers
								{!!this.state.showQueueDialog && (
									<ShowQueueDialog
										open={this.state.showQueueDialog}
										onRequestClose={() => {
											this._showQueueDialog(false);
										}}
										arrayz={this.state.numbersQueue}
										currentNumber={this.state.newNumber}
									/>
								)}
							</MarginButton>
						</div>
						<div>
							<MarginButton
								variant="contained"
								color="primary"
								size="small"
								disabled={this.state.showResetDialog}
								onClick={() => {
									this._showResetDialog(true);
								}}
							>
								Reset
								{!!this.state.showResetDialog && (
									<ResetDialog
										open={this.state.showResetDialog}
										onReset={this.resetLocalStorage}
										onRequestClose={() => {
											this._showResetDialog(false);
										}}
									/>
								)}
							</MarginButton>
						</div>
					</div>
					<div>{list}</div>
				</div>
				<div id="credentials-div">
					<Credentials />
				</div>
			</React.Fragment>
		);
	}
}

export default NumberList;
