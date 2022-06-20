import TodoItem from "./TodoItem"

import { observer } from 'mobx-react'

import store from "./store"

import './App.css'

function App() {

  const TodosList = store.todos.map((todo, index)=>
    <li><TodoItem todo={todo} key={index}/></li>
  )

  return (
    <div className="App">
      <div className="main-content">
        <div className="add-todo">
          <input type="text" placeholder="New Todo" onChange={event=>(store.newTodo = event.target.value)}/>
          <button onClick={()=>store.addTodo(store.newTodo)}>Add Todo</button>
        </div>
        <ol className="todo-list">
          { TodosList }
        </ol>
      </div>
    </div>
  )
}

export default observer(App)
