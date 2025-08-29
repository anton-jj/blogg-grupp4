import React, { useState } from "react";

function PostForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        //setID(UUID); 
        setTitle('');
        setContent('');
        //setDate('');
        //setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Add Post</button>
        </form>
    )
}