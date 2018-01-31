import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {fetchTodos} from './actions/action'
import PropTypes from 'prop-types'

export class App extends Component {
  componentWillMount(){
    this.props.fetchTodos();
	}
  render() {
    const todoList = []
    this.props.todos.map(todo => {
      let due_date = ''
      if (todo.due_date)
        due_date =  todo.due_date.slice(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
      todoList.push({
        id: todo.id,
        name: todo.name,
        actual_effort: todo.actual_effort,
        estimated_effort: todo.estimated_effort,
        is_high_priority: todo.is_high_priority,
        date: due_date
      })
      return todoList
    })
    return (
      <div >
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Tags</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {todoList.map(todo => {
            if (todo.is_high_priority){
              return (
                <Table.Row key = {todo.id} active>
                
                <Table.Cell>
                  <Link to={`/todos/${todo.id}`}>{todo.name}</Link>
                </Table.Cell>
                <Table.Cell>
                  Spent time:{todo.actual_effort}<br />
                  Rating: {todo.estimated_effort} <br />
                  Date: {todo.date}
                </Table.Cell>
              </Table.Row>
              )} else {
                return (
                  <Table.Row key = {todo.id}>
                  <Table.Cell>
                    <Link to={`/todos/${todo.id}`}>{todo.name}</Link>
                  </Table.Cell>
                  <Table.Cell>
                    Spent time:{todo.actual_effort}<br />
                    Rating: {todo.estimated_effort} <br />
                    Date: {todo.date}
                  </Table.Cell>
                </Table.Row>
                )
              }
            
          })} 
          </Table.Body>

          </Table>
        
      </div>
      
    );
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    todos: state.todos.filter(todo => todo.obj_status === "active")
  }
}

export default connect(mapStateToProps, {fetchTodos})(App);
