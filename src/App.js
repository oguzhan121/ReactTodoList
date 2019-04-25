import React from 'react';
import {TodoList} from './components/TodoList';
import {TodoForm} from "./components/TodoForm";


const myTask =
    [
        {text: "Yapılacak ilk iş", status: "passive"},
        {text: "Kitap oku", status: "passive"},
        {text: "Popüler film izle", status: "passive"},
        {text: "Uyku düzenini ayarla", status: "passive"},
    ];


class App extends React.Component {
    constructor() {
        super();
        this.state = {myTask};
        this.addTask = this.addTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(val) {
        let updatedList = this.state.myTask;
        updatedList.push({text: val, status: "passive"});
        this.setState({myTask: updatedList})
    }

    doneTask(task_id) {
        task_id = task_id.replace('task_', '');
        let updatedList = this.state.myTask;
        let newStatus = 'active';
        let currentStatus = updatedList[task_id].status;
        if (currentStatus === 'active') {
            newStatus = 'passive';
        }
        updatedList[task_id].status = newStatus;
        this.setState({myTask: updatedList});
    }

    removeTask(task_id) {
        task_id = task_id.replace('task_', '');
        let updatedList = this.state.myTask;
        updatedList.splice(task_id, 1);
        this.setState({myTask: updatedList})
    }

    render() {
        return (
            <div className="content">
                <TodoForm addTask={this.addTask}/>
                <TodoList
                    myTask={this.state.myTask}
                    doneTask={this.doneTask}
                    removeTask={this.removeTask}/>
            </div>
        );
    }
}

export default App;
