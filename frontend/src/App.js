import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostLoadingComponent from "./components/PostLoading";

function App() {
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((test) => {
				setAppState({ loading: false, posts: test });
			});
    }, [setAppState]);
  return(
    <div className="App">
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  )
}

export default App;
