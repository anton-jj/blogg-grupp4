import '../components/BlogCard'
import { BlogCard } from '../components/BlogCard';
import { Posts } from '../components/Posts'
import "../anton.css"

export function AntonSida({ changePage, posts }) {

	const antons = posts.filter((p) =>
		p.author && p.author.toLowerCase() == "anton"
	);
	return (
		<>
			<h2 className='anton-heading'>antons’s Posts</h2>
			{antons.length === 0 ? <p>No posts yet.</p> : (
				<div className='anton-content-container'>
					{antons.map((p) => (
						<BlogCard key={p.id} title={p.title} author={p.author} content={p.content} date={p.createdAt} />
					))}
				</div>
			)}
		</>
	);
}
