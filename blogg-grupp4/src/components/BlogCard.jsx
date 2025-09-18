import '../styles/blogCard.css'


export function BlogCard({title, author, content, date, deletePost, id}) {
        return (
                <article className="blog-card">
                        <h2 className="blog-title">{title}</h2>
                        <p className="blog-meta">Author: <span> {author} </span>
                        <br />
                        <small>{date}</small>
                        </p>
                        <p className="blog-content">{content}</p>
                        <button className='blog-card-deleteBtn' onClick={()=> deletePost(id)}>Delete post</button>
                </article>
        )
}
