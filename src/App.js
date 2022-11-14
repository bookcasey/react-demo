import React from 'react';
import './App.css';
import WelcomeList from './WelcomeList';
import Greeting from './Greeting';
import Notifications from './Notifications';

function App() {
  const currentLang = 'es'

  return (
    <section className="App">
      <Notifications notifications={[4, 2, 3]} />
      <h1>Casey's Cool Web App</h1>

      <WelcomeList />

      <hr />

      <Greeting lang={currentLang} />

    </section>
  );
}

export default App;
