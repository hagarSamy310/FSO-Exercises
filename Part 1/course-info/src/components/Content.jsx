import { Part } from "./Part";
export function Content({ parts }) {
	return (
		<section>
			{parts.map((part, index) => (
				<Part key={index} part={part} />
			))}
		</section>
	);
}
