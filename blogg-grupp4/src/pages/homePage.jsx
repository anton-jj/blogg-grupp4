import { PostForm } from "../components/PostForm";
import { Hero } from "../components/Hero";

export function HomePage({ changePage, addPost, post }) {
	return (
		<>
			<Hero />
			<PostForm addPost={addPost} />
		</>
	);
}

