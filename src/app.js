import React, { Component } from 'react';
import {CardContainer} from './card-container';
import {getRobots} from './api';
import {connect} from 'react-redux';
import {searchAction, robotsFetchAction} from './index';


const mapStateToProps = (state) => {
	return {
		robots: state.robots,
		query: state.query,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (query) => dispatch(searchAction(query)),
		onLoadData: () => dispatch(robotsFetchAction()),
	}
}

//gets the filtered set of robots based on the query sent in
const getFilteredRobots = (robots, query) => {
	//return the filtered robots object.
	return robots.filter(robot => {
		return robot.name
			.toLowerCase()
			.includes(query.toLowerCase());

	});
}

//creating a stateful component
//App is the top level component
class App extends Component{

	//when the container has mounted, call the load data
	componentDidMount(){
		this.props.onLoadData();
	}

	render() {
		const {robots, query, onSearch} = this.props;

		//return the container that we have defined
		//this contains our data, our components we have built for display (menu, card, item)
		return (
			<CardContainer 
				robots={getFilteredRobots(robots,query)} 
				query={query} 
				onSearch={onSearch}
			/>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);