import React, { Component } from 'react';
import axios from 'axios';

class  TodoBtns extends Component {
    state = {  }
    render() { 
      return (  
        <div style={{float: "right", width: "400px"}}>
          <button>Mark Complete</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
     
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
}
 


export default TodoBtns;