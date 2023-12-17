import {createSignal, onMount} from "solid-js";
import {rootTitle} from "~/constants/title";


export default function Home() {
	const [title, setTitle] = createSignal<string>('')
	
	onMount(() => {
		setTitle(window.document.title)
	})
	
	return (
		<main>
			<p>Title is: <strong>"{title()}"</strong></p>
			<p>Expecting: <strong>"{rootTitle}"</strong></p>
			<p>Title
				is <strong>{title() === '' ? 'missing !' : 'correct'}</strong>
			</p>
			<p>
				<button onClick={() => {
					location.href = '/nested'
				}}>Click here the click "Navigate to the root" link
				</button>
			
			</p>
		</main>
	);
}
