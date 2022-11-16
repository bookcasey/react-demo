import React, { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';

import Subscriptions from './Subscriptions';

function App() {
  // count = state variable
  // setCount = state setting function
  // 0 = starting value
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  function handleClick() {
    console.log('clicked!!!');
  }

  function handleCountClick() {
    // If for some convoluted reason, you need to call setCount twice in the same place
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);

    // Only increments by one, be careful!
    // setCount(count + 1);
    // setCount(count + 1);
  }

  // NEVER do this. DO NOT mutate the state.
  // count = 15
  // count++
  // count = count + 1

  return (
    <section className="App">
      <Header loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn} />

      <h1>Casey's Web App</h1>

      <Content loggedIn={loggedIn} />

      <Subscriptions />

      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment count</button>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={handleCountClick}>Increment count by 2</button>

      < hr />

      <button onClick={() => console.log('button was clicked')}>Click me!</button>
      <button onClick={handleClick}>Button 3</button>
      <button onClick={() => handleClick()}>Another button</button>

      {/* Don't do this! It will run before it is clicked on  */}
      {/* <button onClick={handleClick()}>Another button</button> */}

    </section>
  );
}

export default App;
