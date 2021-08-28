import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class TodoList extends Component {
    createNew(e){
        if(e.which == 13) {
            this.props.store.createTodo(e.target.value);
            e.target.value="";
        }
    }

    filter(e) {
        this.props.store.filter = e.target.value
    }
    render() {
        const {clearComplete, filter, filteredTodos, todos} = this.props.store
        const todoList = filteredTodos.map(todo => (
            <li key={todo.id}>
                <input type="checkbox" value={todo.complete} checked={todo.complete} onClick={() => todo.complete = !todo.complete} />
                {todo.value}
            </li>
        ))
        return <div>
            <h1>To-dos</h1>
            <div>
                <input className="create" onKeyPress={this.createNew.bind(this)} />
                <input className="filter" value={filter} onChange={this.filter.bind(this)} />
            </div>
            <ul>{todoList}</ul>
            <a href="#" onClick={clearComplete}>Clear Complete</a>
        </div>
    }
}
