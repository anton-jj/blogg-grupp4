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
                
                {estellePosts.map((p) =>
                <section className="post">
                    <div className="post-content">
                        <p>{p.id}</p>
                        <h3>{p.title}</h3>
                        <h4>{p.author}</h4>
                        <p>{p.content}</p>
                    </div>
                </section>
                )}
            </section>
        </div>
    );
}