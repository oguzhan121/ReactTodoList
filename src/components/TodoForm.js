import React from 'react'

export class TodoForm extends React.Component {
    constructor() {
        super();
        this.addTask = this.addTask.bind(this)
    }

    addTask(e) {
        /*Submit olduğunda sayfa yenilenmemesi için preventDefaul methodu kullanılır*/
        e.preventDefault();
        const id = document.getElementById('todoInput');
        let val = id.value;
        console.log(val);
        id.value = '';
        this.props.addTask(val)
    }

    render() {
        return (
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" type="text" className="add-todo" placeholder="add a new task to your"/>
                    </form>
                </div>
                <button type="" className="add-btn" onClick={this.addTask}/>
            </div>
        )
    }
}