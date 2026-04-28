import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    fetch("http://localhost:5001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleSubmit = () => {
    fetch("http://localhost:5001/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input }),
    }).then(() => {
      setInput("");
      loadPosts();
    });
  };

  return (
    <div>
      <h1>投稿アプリ</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>投稿</button>

      <ul>
        {posts.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;