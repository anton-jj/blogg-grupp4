import { useState } from "react";
import { savePosts } from "../localStorageUtil";

export function InputField({ changePage, addPost }) {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			id: Math.floor(Math.random() * 100000),
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title.trim() || !formData.content.trim()) {
			alert("cant leave fields empty");
			return;
		}

		const newPost = {
			...formData,
			id: Math.floor(Math.random() * 100000),
			createdAt: Date.now(),
		};

		addPost(newPost);
		setFormData({
			title: "",
			author: "",
			content: "",
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">title</label>
					<input
						name="title"
						type="text"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="author">author</label>
					<input
						name="author"
						type="text"
						value={formData.author}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="content">content</label>
					<textarea
						name="content"
						id="content"
						value={formData.content}
						rows="6"
						onChange={handleChange}
					>
					</textarea>
				</div>
				<button type="submit">submit</button>
			</form>
		</div>
	);
}
