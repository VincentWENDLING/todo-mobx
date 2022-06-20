import { makeAutoObservable } from "mobx"

type Todo = {
    name: string
    done: boolean
}

class Store {

    todos: Array<Todo> = []
    newTodo: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(name: string) {
        this.todos.push({
            name: name,
            done: false
        })
    }

}

const store = new Store

export default store