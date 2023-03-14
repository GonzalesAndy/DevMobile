import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import TaskList from './TaskList';
import LocalStorage from './LocalStorage';

class App extends Component {
  constructor(props) {
    super(props);
    const localStorage = new LocalStorage();
    const tasks = localStorage.getTasks();
    const uncheckedTasksCount = tasks.filter(task => !task.isChecked).length;
    this.state = {
      checkedTasksCount: tasks.length > 0 ? Math.round((tasks.length - uncheckedTasksCount) / tasks.length * 100) : 0
    };
    this.updateCheckedTasks = this.updateCheckedTasks.bind(this);
  }

  updateCheckedTasks(checkedTasksCount) {
    this.setState({ checkedTasksCount });
  }

  render() {
    const { checkedTasksCount } = this.state;
    return (
      <div className="App relative h-[950px] w-[500px] border border-4 border-black rounded-2xl bg-neutral-900">
        <span class="absolute -right-2 top-20 border border-4 border-black h-10 rounded-md"></span>
        <span class="absolute -right-2 top-44 border border-4 border-black h-24 rounded-md"></span>
        <div className='flex-row h-full'>
          <Header checkedTasksCount={checkedTasksCount} />
          <TaskList updateCheckedTasks={this.updateCheckedTasks} />
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
