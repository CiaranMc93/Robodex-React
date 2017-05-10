import React, { Component } from 'react';
import {CardContainer} from './card-container';
import {getRobots} from './api';

//export const App = () => (
	//<CardContainer robots={robots}/>
	//);

	

//creating a stateful component
export class App extends Component {
		//stateful component
		constructor(props) {
			super(props);

			//intial state
			this.state = {
				robots : [],
				query: '',
			};
		}

		//lifecycle method for when the application state loads
		componentDidMount(){
			//make the request to get the robots
			getRobots()
				.then((robots) => {
					this.setState({robots: robots});
				});
		};

		onSearch = (query) => {
			this.setState({query: query})
		}

		//gets the filtered set of robots based on the query sent in
		getFilteredRobots(robots, query) {

			return robots.filter(robot => {
				return robot.name.includes(query.toLowerCase());

			});
		}

		render() {
			const {robots, query} = this.state;

			return (
				<CardContainer 
					robots={this.getFilteredRobots(robots,query)} 
					query={query} 
					onSearch={this.onSearch}/>
			);
		}
}
