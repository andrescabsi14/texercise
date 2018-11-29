import React from 'react'
import { render } from 'react-dom'

import moment from 'moment'

import service from './service'
// {title:'My New Task!',description:'This is my new task',img:'https://picsum.photos/1600/900?v99'}

class TaskApp extends React.Component {
  state = {
    title: '',
    description: '',
    image: '',
    taskList: [],
  }

  endpoint = '../data/taskList.js'

  componentDidMount() {
    this.loadTasks()
  }

  loadTasks = () => {
    const data = service(this.endpoint)
    this.setState({ taskList: data })
    console.log(data)
  }

  handleChange = event => {
    switch (e.target) {
      case 1:
        console.log('sss')
      // this.setState({
      //   title: '',
      // })
      case 2:
        console.log('aaa')
      case 3:
        console.log('ggg')
    }
  }

  addTask = event => {
    const task = {}
    event.preventDefault()
    let taskList = this.state.taskList
    taskList.unshift(task)
    this.setState({ taskList })
  }

  render() {
    return (
      <section className="main-container">
        <h1>Task List</h1>

        <form onSubmit={this.addTask}>
          <label htmlFor="title">
            Title
            <input
              onChange={e => this.handleChange(e)}
              id="title"
              placeholder="Title"
              required="required"
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              onChange={e => this.handleChange(e)}
              id="description"
              placeholder="Insert a description"
              required="required"
            />
          </label>
          <label htmlFor="image">
            Image
            <input
              onChange={e => this.handleChange(e)}
              type="file"
              id="image"
            />
          </label>

          <button>Add Task</button>
        </form>
        <section id="taskContainer">
          {this.state.taskList.map(task => (
            <article key={task.id}>
              {task.img && (
                <div className="image-container">
                  <img src={task.img} />
                </div>
              )}
              <h2>{task.title}</h2>
              <div className="description">{task.description}</div>
              <div className="created">
                {moment(task.createdOn, 'HH:mm:ss').format('hh:mm A')}
              </div>
              <div className="due-date">
                {moment(task.dueDate, 'HH:mm:ss').format('hh:mm A')}
              </div>
              <div className="author">{task.createdby}</div>
              <div className="complete">
                Completed: {task.completed ? 'yes' : 'no'}
              </div>
            </article>
          ))}
        </section>
      </section>
    )
  }
}

render(<TaskApp />, document.getElementById('mainApp'))
