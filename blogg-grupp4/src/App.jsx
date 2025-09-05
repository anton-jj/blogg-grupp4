import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Nav";

import { InputField } from "./components/InputField";
import { useState } from "react";
import { useEffect } from "react";
import { HomePage } from "./pages/homePage";
import { EstelleSida } from "./pages/estelle";
import { AntonSida } from "./pages/anton";
import { SimonSida } from "./pages/simon";
import React from "react";
import { savePosts, loadPosts } from "./localStorageUtil";

export const ESTELLE_PAGE = "estelle";
export const SIMON_PAGE = "simon";
export const ANTON_PAGE = "anton";
export const HOME_PAGE = "homepage";

function App() {
	const [page, setPage] = useState(HOME_PAGE);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(loadPosts());
	}, []);

	const addPost = (newPost) => {
		const updated = [...posts, newPost]
		setPosts(updated)
		savePosts(updated)
	}



	const changePage = (page) => {
		setPage(page);
	};

	let content = <div>404 Not Found</div>;

	if (page === HOME_PAGE) {
		content = <HomePage changePage={changePage} addPost={addPost} />;
	} else if (page === ESTELLE_PAGE) {
		content = <EstelleSida changePage={changePage} posts={posts} />;
	} else if (page === ANTON_PAGE) {
		content = <AntonSida changePage={changePage} posts={posts} />;
	} else if (page === SIMON_PAGE) {
		content = <SimonSida changePage={changePage} posts={posts} />;
	}

	return (
		<>
			<div id="app">
				<Navbar changePage={changePage} />
				<main>{content}</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
