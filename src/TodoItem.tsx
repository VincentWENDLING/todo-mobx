import { useState } from "react"

import store from "./store"

const TodoItem = (props: any) => {

    const { id, name, done } = props.todo

    const [checked, setChecked] = useState(false) 

    return (
        <div className="flex">
            <p className={`${checked?'':'line-through'}`}>{ name } </p>
            <input type="checkbox" onChange={()=>{setChecked(!checked)}}/>
            <button onClick={()=>store.deleteTodo(id)}>Del</button>
        </div>
    )

}


export default TodoItem