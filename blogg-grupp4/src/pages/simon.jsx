import '../App.css'
import { BlogCard } from '../components/BlogCard';
import '../simon.css'


export function SimonSida({ changePage, posts, deletePost}) {
   
    const simonPosts = posts.filter((p) => p.author && p.author.toLowerCase() == "simon");

    return (
         <>
            <h2 className='simon-heading'>Simons' blog</h2>
            {simonPosts.length === 0 ? <p>No posts yet, write something in the form on the homepage</p> : (
                <div className='simon-content-container'>
                    {simonPosts.map((p) => (
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
            )}
        </>
    );
}


