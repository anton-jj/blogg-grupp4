import '../blogCard.css'
export function BlogCard({title, author, content, date}) {
        return (
                <article className="blog-card">
                        <h2 className="blog-title">{title}</h2>
                        <p className="blog-meta">Author: <span> {author}</span>
                        <small> written: {date}</small>
                        </p>
                        <p className="blog-content">{content}</p>
                </article>
        )

}
