import Post from "./Post"

const posts = []; { /* PLACEHOLDER POSTS UNTIL WE CAN ADD ACTUAL ONES */}

export function Posts() {
    return (
        <div>
            {posts.map(p => (
                <Post title={p.title} content={p.content} date={p.date} key={p.id} />
            ))}
        </div>
    )
}

export default Posts;