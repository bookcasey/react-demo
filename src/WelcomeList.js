import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function WelcomeList() {
  const myName = 'Casey';

  return (
    <React.Fragment>
      <WelcomeMessage name='Jarren' tech={'React'} lesson={1} />
      <WelcomeMessage name='Benji' tech={'Node'} lesson={3} />
      <WelcomeMessage name={myName} tech={'Rust'} lesson={4} />
      <WelcomeMessage />
    </React.Fragment>
  );
}

export default WelcomeList;