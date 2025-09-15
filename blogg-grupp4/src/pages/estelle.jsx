import '../App.css'
import '../bloog.css'
import { Posts } from '../components/Posts'

export function EstelleSida({ changePage, posts}) {
    
    const estellePosts = posts.filter((p) =>
		p.author && p.author.toLowerCase() == "estelle"
	);

    return (
        <div className="bloog-main">
            <section className="bloog-main-section">
                <h2 className='bloog-main-author-header'>Estelle's bloog</h2>
            </section>
            
            {estellePosts.map((p) =>
                <section className="bloog-section" key={p.createdAt}>
                    <div className='bloog-post-upper'>
                        <h3 className='bloog-post-title'>{p.title}</h3>
                        <h3 className='bloog-post-date'>{p.createdAt}</h3>
                    </div>
                    <div className='bloog-post-lower'>
                        <p className='bloog-post-content'>{p.content}</p>
                    </div>
                </section>
                )}
        </div>
    );
}

