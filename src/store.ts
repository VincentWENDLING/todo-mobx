import { makeAutoObservable } from "mobx"

type Todo = {
    id: number
    name: string
    done: boolean
}

class Store {

    todos: Array<Todo> = []
    newTodo: string = ""
    lastId: number = 0;

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(name: string) {
        this.todos.push({
            id: this.lastId,
            name: name,
            done: false
        })

        this.lastId++;

    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter((todo)=>{
            return todo.id != id
        })
    }

}

const store = new Store

export default store