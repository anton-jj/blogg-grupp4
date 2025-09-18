import '../App.css'
import '../bloog.css'
import { BlogCard } from '../components/BlogCard';

export function EstelleSida({ changePage, posts, deletePost}) {
    
    const estellePosts = posts.filter((p) =>
		p.author && p.author.toLowerCase() == "estelle"
	);

    return (
        <div className="bloog-main">
            <section className="bloog-main-section">
                <h2 className='bloog-main-author-header'>Estelle's bloog</h2>
            </section>
            
            {estellePosts.map((p) => (
                <BlogCard
                    key={p.id}
                    title={p.title}
                    author={p.author}
                    content={p.content}
                    date={p.createdAt}
                    deletePost={deletePost}
                    id={p.id} />
            ))}
        </div>
    );
}