import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Operations } from './components/Operations'
import CreateOperation from './components/CreateOperation'
import { getAllOperations, calculateOperation } from './services/OperationService'

class App extends Component {

	state = {
		operation: {},
		operations: [],
		numberOfOperations: 0,
		submitted: false
	}

	constructor(props) {
		super(props);
		getAllOperations()
			.then(operations => {
			console.log(operations)
			this.setState({operations: operations, numberOfOperations: operations.length})
	});
		
	}

	

	calculateOperation = (e) => {
		this.setState({ submitted: true })
		if (this.state.operation.firstNumber && this.state.operation.operator && this.state.operation.secondNumber) {
			calculateOperation(this.state.operation)
				.then(response => {
					console.log(response);
					this.setState({numberOfOperations: this.state.numberOfOperations + 1})
			}).then(response => {
					console.log("Fetching Opertions..!");
					getAllOperations()
						.then(operations => {
							console.log(operations)
							this.setState({operations: operations, numberOfOperations: operations.length})
					});
			});
		}
	}

	onChangeForm = (e) => {
		let operation = this.state.operation
		if (e.target.name === 'firstnumber') {
			operation.firstNumber = e.target.value;
		} else if (e.target.name === 'secondnumber') {
			operation.secondNumber = e.target.value;
		} else if (e.target.name === 'operator') {
			operation.operator = e.target.value;
		}
		this.setState({operation})
	}

	render() {
		
		return (
			<div className="App">
				<Header></Header>
				<div className="container mrgnbtm">
					<div className="row">
						<div className="col-md-12">
								<CreateOperation 
									submitted={this.state.submitted}
									operations={this.state.operation}
									onChangeForm={this.onChangeForm}
									calculateOperation={this.calculateOperation}
									>
								</CreateOperation>
						</div>
					</div>
				</div>
				<div className="row mrgnbtm">
					<Operations operations={this.state.operations}></Operations>
				</div>
			</div>
		);
	}
}

export default App;
