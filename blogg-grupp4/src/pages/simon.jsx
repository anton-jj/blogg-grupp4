import '../App.css'
import '../bloog.css'
import { Posts } from '../components/Posts'
import "../simonStyle.css";


export function SimonSida({ changePage, posts}) {
   
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
           
            </div>
        </section>
   
        )}
    </div>
    );
}
    
    //formatera css amigastyle, box i mitten 