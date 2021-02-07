import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  };

   
    render() { 
        return (
          <div>
            <table>
              <tr>
                <td><input type="checkbox" name="itemChecked" id="itemChecked"/></td>
                <td><h3>{this.props.item.title}</h3></td>
              </tr>
            </table>
          </div>
        );
    }
}
 
export default TodoItem;