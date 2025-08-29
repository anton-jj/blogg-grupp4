import Post from "./Post"

const posts = [
    { id: 1, title: 'blogposttitle1', content: 'content1', date: Date.now(), author: 'author1' },
    { id: 2, title: 'blogposttitle2', content: 'content2', date: Date.now(), author: 'author2' },
    { id: 3, title: 'blogposttitle3', content: 'content3', date: Date.now(), author: 'author3' },
    { id: 4, title: 'blogposttitle4', content: 'content4', date: Date.now(), author: 'author4' },
    { id: 5, title: 'blogposttitle5', content: 'content5', date: Date.now(), author: 'author5' },
]; { /* PLACEHOLDER POSTS UNTIL WE CAN ADD ACTUAL ONES */}

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