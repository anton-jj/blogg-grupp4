export function loadPosts() {
	const rawData = localStorage.getItem("posts")
	return rawData ? JSON.parse(rawData) : []
}

export function savePosts(posts) {
	localStorage.setItem("posts", JSON.stringify(posts))
}

export function removePost(id) {
	const posts = loadPosts().filter((i) => i.id != id)
	savePosts(posts)
}
