import React from 'react';
import './App.css';
import UserList from './UserList';


function App() {
  const users = [
    {
      id: 1,
      name: 'Teddy',
      tech: 'React',
      color: 'red',
    },
    {
      id: 2,
      name: 'Gwynn',
      tech: 'Postgres',
      color: 'blue',
    },
    {
      id: 3,
      name: 'Casey',
      tech: 'Node',
      color: 'green',
    },
    {
      id: 4,
      name: 'Jason',
      tech: 'CSS',
      color: 'purple',
    }
  ];

  const styles = {
    h1: { backgroundColor: 'lightblue' }
  }

  return (
    <section className="App">
      {/* <h1 style={{ backgroundColor: 'lightblue' }}>Casey's Cool Web App</h1> */}
      <h1 style={styles.h1}>Casey's Cool Web App</h1>

      <UserList users={users} />

      <li>Inside app!</li>
    </section>
  );
}

export default App;
