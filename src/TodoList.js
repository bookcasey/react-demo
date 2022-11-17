import TodoItem from "./TodoItem"

export default function TodoList({ todos, deleteTodo2 }) {
  return (
    <>
      <h2>Todos:</h2>
      <ul>
        {
          todos.map((todo, i) => <TodoItem
            key={i}
            todo={todo}
            deleteTodo3={deleteTodo2}
          />)
        }
      </ul>
    </>
  )
}