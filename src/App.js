import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFormState = {
    text: '',
    tag: 'home',
    important: false
  }
  const [formData, setFormData] = useState(initialFormState);

  // const [text, setText] = useState('');
  // const [tag, setTag] = useState("home"); // starting value doesn't need to be empty
  // const [important, setImportant] = useState(false);

  // const handleTextChange = event => setText(event.target.value);
  // const handleTagChange = event => setTag(event.target.value);
  // const handleImportantChange = event => setImportant(event.target.checked);

  const handleInputChange = (event) => {

    console.log(event);
    let value = event.target.value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }
    setFormData({
      ...formData,
      [event.target.name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    // setText("");
    // setTag('home');
    // setImportant(false);
    setFormData(initialFormState)
  }

  return (
    <section className="App">
      <h1>Casey's Todo List</h1>

      <p>Draft: {formData.text} @ {formData.tag} {formData.important ? 'is important' : ''}</p>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor='text'>
          Text:
          <input
            id='text'
            name='text'
            onChange={handleInputChange}
            value={formData.text}
          ></input>
        </label>
        <br />
        <label htmlFor='tag'>
          Tag:
          <select
            id='tag'
            name='tag'
            onChange={handleInputChange}
            value={formData.tag}>
            <option value='work'>Work</option>
            <option value='hobbies'>Hobbies</option>
            <option value='home'>Home</option>

          </select>
        </label>
        <br />
        <label htmlFor='important'>
          Important:
          <input
            id='name'
            name='important'
            onChange={handleInputChange}
            checked={formData.important}
            type='checkbox'></input>
        </label>
        <br />
        <button type='submit'>Submit</button>

      </form>
    </section>
  );
}

export default App;
