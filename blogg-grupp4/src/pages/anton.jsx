import '../App.css'
import '../bloog.css'
import '../components/BlogCard'
import { BlogCard } from '../components/BlogCard';
import { Posts } from '../components/Posts'

export function AntonSida({ changePage, posts }) {

	const antons = posts.filter((p) =>
		p.author && p.author.toLowerCase() == "anton"
	);

	return (
		<>
			<h2>antons’s Posts</h2>
			{antons.length === 0 ? <p>No posts yet.</p> : (
				<div>
					{antons.map((p) => (
						<BlogCard title={p.title} author={p.author} content={p.content} date={p.createdAt} />
					))}
				</div>
			)}
		</>
	);
}
