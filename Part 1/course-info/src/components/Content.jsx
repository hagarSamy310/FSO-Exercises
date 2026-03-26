import { Part } from "./Part";
export function Content({ parts }) {
	return (
		<section>
			{parts.map((part) => (
				<Part key={part.name} part={part} />
			))}
		</section>
	);
}
