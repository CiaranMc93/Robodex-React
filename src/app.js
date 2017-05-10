import React, { Component } from 'react';
import {CardContainer} from './card-container';

//export const App = () => (
	//<CardContainer robots={robots}/>
	//);

//creating a stateful component
export class App extends Component {
		constructor(props) {
			super(props);

			this.state = {
				robots : [
					{name: 'Robot 1', id: 1, email: 'robot1Factory.com'},
					{name: 'Robot 2', id: 2, email: 'robot2Factory.com'},
					{name: 'Robot 3', id: 3, email: 'robot3Factory.com'},
					{name: 'Robot 4', id: 4, email: 'robot4Factory.com'},
					{name: 'Robot 5', id: 5, email: 'robot5Factory.com'},
				],
			};

			setTimeout(() => {
					this.setState({
						robots : [
							...this.state.robots,
							{name: 'Robot 6', id: 6, email: 'robot6Factory.com'},
						]
					});
				}, 1000);
			}

			render() {
				const {robots} = this.state;

				return (
					<CardContainer robots={robots}/>
				);
			}
}
