import { useState } from "react";
import { savePosts } from "../localStorageUtil";
import "../postform.css";

export function PostForm({ changePage, addPost }) {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
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
			createdAt: new Date(Date.now()).toLocaleString("sv-SE").slice(0, 10),
		};

		addPost(newPost);
		setFormData({
			title: "",
			author: "",
			content: "",
		});
	};
	return (
		<div className="submit-page-field">
			<form onSubmit={handleSubmit}>
				<div className="submit-page-title">
					<label htmlFor="title">Title:</label>
					<input
						name="title"
						type="text"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div className="submit-page-author">
				<select name="author"
					id="author"
					value={formData.author}
					onChange={handleChange} >

					<label htmlFor="auhor">Author</label>
					<option value="" disabled></option>
					<option value="anton">Anton</option>
					<option value="estelle">Estelle</option>
					<option value="simon">Simon</option>
				</select>
				</div>

				<div className="submit-page-content">
					<label htmlFor="content">Content:</label>
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
