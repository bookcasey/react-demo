import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function UsersPosts() {
  const [posts, setPosts] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const data = await res.json();
      setPosts(data)
    }
    fetchPosts();
  }, [userId])

  return (
    <div>
      {posts.map(post =>
        <li key={post.id}>{post.title}</li>
      )}

    </div>
  )
}