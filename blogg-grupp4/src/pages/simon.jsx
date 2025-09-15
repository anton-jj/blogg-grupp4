import '../App.css'
import '../bloog.css'
import { Posts } from '../components/Posts'



export function SimonSida({ changePage, posts, deletePost}) {
   
    const simonPosts = posts.filter((p) => p.author && p.author.toLowerCase() == "simon");

    return (
    <div>
        
        {simonPosts.map((p) =>

        <section className="post">
            <div className="post-content">
            <p>{p.id}</p>
            <h3>{p.title}</h3>
            <h4>{p.author}</h4>
            <p>{p.content}</p>
           <button onClick={() => deletePost(p.id)}>Delete meee</button>
            </div>
        </section>
   
        )}
    </div>
    );
}