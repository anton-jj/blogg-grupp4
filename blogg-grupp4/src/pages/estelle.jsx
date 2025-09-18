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

/*            {simonPosts.length === 0 ? <p>No posts yet, write something in the form on the homepage</p> : (
                <div className='simon-content-container'>
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
                
                <section className="bloog-section" key={p.createdAt}>
                    <div className='bloog-post-upper'>
                        <h3 className='bloog-post-title'>{p.title}</h3>
                        <h3 className='bloog-post-date'>{p.createdAt}</h3>
                    </div>
                    <div className='bloog-post-lower'>
                        <p className='bloog-post-content'>{p.content}</p>
                        <button>{deletePost}</button>
                    </div>
                </section>
                */