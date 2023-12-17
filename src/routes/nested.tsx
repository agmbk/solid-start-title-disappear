import {Title} from "solid-start";
import {A} from "@solidjs/router";

export default function Home() {
	return (
		<main>
			<Title>Nested</Title>
			<A href='/'>Navigate to the root</A>
		</main>
	);
}
