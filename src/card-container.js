import React from 'react';
import PropTypes from 'proptypes';
import {Card} from './card';
import {CardList} from './cardList';
import {SearchBar} from './search-bar';

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

CardContainer.PropTypes = {
	robots: PropTypes.array,
	query: PropTypes.string,
	onSearch: PropTypes.func,
}