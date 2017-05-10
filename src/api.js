//sends a request and returns the response (in JSON format)
export function getRobots() {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(normaliseRobots);
}

function normaliseRobots(robots){
	return robots.map(robot => ({
		id: robot.id,
		name: robot.name,
		email: robot.email,
	}));
}