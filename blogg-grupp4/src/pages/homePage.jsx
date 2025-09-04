import { InputField } from "../components/InputField";
import { Hero } from "../components/Hero";

export function HomePage({ changePage, addPost, post }) {
	return (
		<>
			<Hero />
			<InputField addPost={addPost} />
		</>
	);
}

