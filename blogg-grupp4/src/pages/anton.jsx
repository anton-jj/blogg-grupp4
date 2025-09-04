import '../App.css'
import '../bloog.css'
import { Posts } from '../components/Posts'

export function AntonSida({ changePage, posts }) {

	const antons = posts.filter((p) =>
		p.author && p.author.toLowerCase() == "anton"
	);

	return (
		<>
			<h2>antons’s Posts</h2>
			{antons.length === 0 ? <p>No posts yet.</p> : (
				<ul>
					{antons.map((p) => (
						<li key={p.createdAt}>
							<strong>{p.title}</strong>
							<p>{p.content}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
