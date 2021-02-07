import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';

class TodoInputField extends Component {
    state = { 
        todoModel: [
        {
            id: 1,
            description:"",
            responsible: "",
            priority: "",
            completed: false
        },
     }
    render() { 
        return (
            <div>
                <table>
                    <tr>
                        <td> 
                            <InputText value={this.state.todoModel.description} onChange={(e) => setValue1(e.target.value)} />
                        </td>
                        <td><Button label="Add" icon="pi pi-new" /></td>
                    </tr>
                </table>
            </div>
          );
    }
}
 
export default TodoInputField;