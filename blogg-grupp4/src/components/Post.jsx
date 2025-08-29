export function Post({ title, content, date }) {
    
    function parseDate(date) {
        const dateStr = new Date(date).toLocaleDateString("sv-SE")
        return dateStr
    }

    return (
        <div className="bloog-section">
            <div className='bloog-post-upper'>
                <h2 className='bloog-post-title'>{title}</h2>
                <h5 className='bloog-post-date'>{parseDate(date)}</h5>
            </div>
            <div className='bloog-post-lower'>
                <h5 className='bloog-post-content'>{content}</h5>
            </div>
        </div>
    )
}

export default Post;