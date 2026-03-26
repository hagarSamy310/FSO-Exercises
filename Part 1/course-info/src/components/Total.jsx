export function Total({ parts }) {
	const numOfExercises = parts.reduce(
		(total, currPart) => total + currPart.exercises,
		0,
	);
	return <h2>Number of exercises {numOfExercises}</h2>;
}
