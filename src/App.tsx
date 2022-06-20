import TodoItem from "./TodoItem"

import { observer } from 'mobx-react'

import store from "./store"

function App() {

  const TodosList = store.todos.map((todo, index)=>
    <li><TodoItem todo={todo} key={index}/></li>
  )

  return (
    <div className="w-8/12 bg-black">
      <div className="flex justify-center items-center">
        <input type="text" placeholder="New Todo" onChange={event=>(store.newTodo = event.target.value)}/>
        <button onClick={()=>store.addTodo(store.newTodo)}>Add Todo</button>
      </div>
      <ol>
        { TodosList }
      </ol>
    </div>
  )
}

export default observer(App)
