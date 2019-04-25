import React from 'react';

export class TodoList extends React.Component {
    constructor() {
        super();
    }

    doneTask = (e) => {
        this.props.doneTask(e.target.parentNode.id);
    };

    removeTask = (e) => {
        this.props.removeTask(e.target.parentNode.id);
    };

    render() {
        const items = this.props.myTask.map((elem, i) => {
            let task_id = 'task_' + i;
            return (
                <li key={i} id={task_id} className={elem.status}>
                    <span className="id">{i + 1}</span>
                    <span className="title">{elem.text}</span>
                    <span className="type" onClick={this.doneTask}/>
                    <span className="delete" onClick={this.removeTask}/>
                </li>
            )
        });
        return (
            <div>
                <div className="todo-list type1">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}