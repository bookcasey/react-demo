export default function TodoItem({ todo, deleteTodo3 }) {
  let emoji = '🏠';

  if (todo.tag === 'work') {
    emoji = '🏢';
  } else if (todo.tag === 'hobbies') {
    emoji = '🎳🕺🎸'
  }

  return (
    <li style={{
      color: todo.important ? 'red' : 'black'
    }}>
      <span>{emoji}</span>
      {todo.important ? <strong>{todo.text}</strong> : todo.text}
      <button onClick={() => deleteTodo3(todo.text)}>Delete</button>
    </li>
  )
}