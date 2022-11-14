import React from 'react';

// Define the function component
function WelcomeMessage({
  name = 'valued customer',
  tech = 'React',
  lesson = 100,
}) {
  // Props object will have the same keys and values
  // console.log(props.name); // If you don't destructure
  // console.log(name)
  return (
    <p>Welcome to my {tech} site, lesson {lesson}, {name}!</p>
  );
}

export default WelcomeMessage;