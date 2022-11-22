import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Users() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await res.json();
      setUser(data)
    }
    fetchUser();
  }, [])
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}