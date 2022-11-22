import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: POST user to /users
    history.push('/users/10');
  }

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data)
    }
    fetchUsers();
  }, [])
  return (
    <div>
      {users.map(user =>
        <Link to={`/users/${user.id}`}><li key={user.id}>{user.username}</li></Link>
      )}

      <form onSubmit={handleSubmit}>
        <label>Username:
          <input></input>
        </label>
        <button>Add User</button>
      </form>
    </div>
  )
}