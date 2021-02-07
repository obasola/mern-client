import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    state = { 
        title: '',
        completed: false,        
     }
    render() { 
        return this.props.todos.map( (todo) => (
            <TodoItem item={todo}/>
        ))
    }
}
 
export default Todos;