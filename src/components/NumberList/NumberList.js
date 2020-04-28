import React, { Component } from "react";
import Numbers from "./Numbers/Numbers";
import "./NumberList.css";
import { Button, Typography } from "@material-ui/core";
import NewNumber from "./NewNumber/NewNumber";
import { styled } from "@material-ui/core/styles";
import ShowQueueDialog from "../Dialogs/ShowQueueDialog";
import ResetDialog from "../Dialogs/ResetDialog";
import Credentials from "../Credentials/Credentials";

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
	};

	componentDidMount = () => {
		const isReset = JSON.parse(localStorage.getItem("isReset"));
		this.populateArray();
		if (isReset) this.getFromLocalStorage();
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
		} = this.state;
		localStorage.setItem("numbersQueue", JSON.stringify(numbersQueue));
		localStorage.setItem("numbers", JSON.stringify(numbers));
		localStorage.setItem("newNumber", JSON.stringify(newNumber));
		localStorage.setItem("pastNumber", JSON.stringify(pastNumber));
		localStorage.setItem("isReset", JSON.stringify(isReset));
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

	_showQueueDialog = (value) => {
		console.log(value);
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
									this.state.numbersQueue.length === 90
										? true
										: false
								}
								onClick={this.generateNewNumber}
							>
								Generate Next Number
							</MarginButton>
						</div>
						<div id="numberList-left-divs">
							<NewNumber
								heading="Current Number"
								currentNum={this.state.newNumber}
							/>
							<NewNumber
								heading="Past Number"
								currentNum={this.state.pastNumber}
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
