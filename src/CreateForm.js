import { useState } from 'react';

export default function CreateForm({ addTodo }) {
  const initialFormState = {
    text: '',
    tag: 'home',
    important: false
  }
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (event) => {
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
    // console.log(formData);
    addTodo(formData)
    setFormData(initialFormState)
  }

  return (
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
  );
}