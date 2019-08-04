import React from 'react'
import uuid from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import './App.css'
import Axios from 'axios';


class App extends React.Component {
  state = {
    todos: [
      {
        title: 'Add an item',
        id: uuid.v4(),
        completed: false
      }
    ]
  }


  // Changes the state of completion for each of the Todo items
  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Adds new items to the Todo list
  addTodo = (title) => {
    const newItem = {
      title,
      id: uuid.v4(),
      completed: false
    }
    this.setState({todos: [...this.state.todos, newItem]})
  }
  
  // Deletes the specific Todo item whose id was passed in
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
                  delTodo={this.delTodo}/>  
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
