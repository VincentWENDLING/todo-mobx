import { useState } from "react"


const TodoItem = (props: any) => {

    const { name, done } = props.todo

    const [checked, setChecked] = useState(false) 

    return (
        <div className="flex">
            <p className={`${checked?'':'line-through'}`}>{ name } </p>
            <input type="checkbox" onChange={()=>{setChecked(!checked)}}/>
            <button>Del</button>
        </div>
    )

}


export default TodoItem