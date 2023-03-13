import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App relative h-[950px] w-[500px] border border-4 border-black rounded-2xl bg-neutral-900">
        <span class="absolute -right-2 top-20 border border-4 border-black h-10 rounded-md"></span>
        <span class="absolute -right-2 top-44 border border-4 border-black h-24 rounded-md"></span>
        <div className='flex-row h-full'>
          <Header />
          <TaskList />
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
