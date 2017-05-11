import React from 'react';
import PropTypes from 'proptypes';
import {Card} from './card';
import {CardList} from './cardList';
import {SearchBar} from './search-bar';

//this is the html for the card container
//contains other components that we have built - search bar and cardlist
export const CardContainer = ({robots, query, onSearch}) => (
	<div className="flex flex-column vh-100 sans-serif">
		<header className="pv4 bb tc">
			<h1 className="f2 b ttu tracked light-red">ROBODEX</h1>
			<SearchBar 
				value={query} 
				onChange={(e) => onSearch(e.target.value)}>
			</SearchBar>
		</header>
		<CardList>
			{renderRobots(robots)}
		</CardList>
	</div>
	);

//variable used to render the robots using the card component we have created
const renderRobots = (robots) => {
	return robots.map(robot => (
			<Card 
				key={robot.id}
				id={robot.id}
				name={robot.name}
				email={robot.email}
				/>
			));
};

//define the property types so that we know what the data is/should be
CardContainer.PropTypes = {
	robots: PropTypes.array,
	query: PropTypes.string,
	onSearch: PropTypes.func,
}