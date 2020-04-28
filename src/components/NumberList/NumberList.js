import React, { Component } from "react";
import Numbers from "./Numbers/Numbers";
import "./NumberList.css";
import { Button, Typography } from "@material-ui/core";
import NewNumber from "./NewNumber/NewNumber";
import { styled } from "@material-ui/core/styles";
import ShowQueueDialog from "../Dialogs/ShowQueueDialog";
import { Client } from "whatsapp-web.js";

const Heading = styled(Typography)({
	fontFamily: "Montserrat, sans-serif",
	fontSize: "2.5rem",
});

class NumberList extends Component {
	state = {
		newNumber: 0,
		pastNumber: 0,
		numbers: [],
		numbersQueue: [],
		showQueueDialog: false,
	};

	generateNewNumber = () => {
		let newNumber = Math.floor(Math.random() * 90) + 1;
		while (this.state.numbers[newNumber - 1] !== 0) {
			newNumber = Math.floor(Math.random() * 89) + 1;
		}
		const pastNumber = this.state.newNumber;
		let numbers = [...this.state.numbers];
		let numbersQueue = [...this.state.numbersQueue];
		numbersQueue.push(newNumber);
		numbers[newNumber - 1] = 1;
		this.setState({ numbers, newNumber, numbersQueue, pastNumber });
	};

	componentDidMount() {
		this.populateArray();
		const client = new Client();

		client.on("qr", (qr) => {
			// Generate and scan this code with your phone
			console.log("QR RECEIVED", qr);
		});

		client.on("ready", () => {
			console.log("Client is ready!");
		});

		client.on("message", (msg) => {
			if (msg.body == "!ping") {
				msg.reply("pong");
			}
		});

		client.initialize();
	}

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
		this.setState({ showQueueDialog: value });
	};

	render() {
		const list = this.state.numbers.map((num, index) => {
			return <Numbers key={index + 1} number={index + 1} num={num} />;
		});

		return (
			<div id="numberList">
				<div className="numberList-left">
					<div>
						<Heading>Tambola</Heading>
					</div>
					<div>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							onClick={this.generateNewNumber}
						>
							Generate Next Number
						</Button>
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
						<Button
							variant="contained"
							color="secondary"
							size="large"
							onClick={() => {
								this._showQueueDialog(true);
							}}
						>
							Show Previous Numbers
							{!!this.state.showQueueDialog && (
								<ShowQueueDialog
									open={this.state.showQueueDialog}
									onClose={() => {
										this._showQueueDialog(false);
									}}
									arrayz={this.state.numbersQueue}
									currentNumber={this.state.newNumber}
								/>
							)}
						</Button>
					</div>
				</div>
				<div>{list}</div>
			</div>
		);
	}
}

export default NumberList;
