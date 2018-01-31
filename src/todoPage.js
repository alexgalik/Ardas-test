import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchTodos} from './actions/action';

export class Todo extends Component { 

     componentWillMount(){
        this.props.fetchTodos();
    }
    
    constructor(props){
        super(props);
        this.state = {
            id: this.props.todo ? this.props.todo.id : '',
            newName: this.props.todo ? this.props.todo.name: '',
            editing: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.editName = this.editName.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            id: nextProps.todo.id,
            newName: nextProps.todo.name,
          });
      }

    editName = () =>{
        this.setState({editing: true});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({editing: false});
        const newTodo = {
            id: this.state.id,
            newName: this.state.newName
        }
        fetch('http://localhost:8080',{
            method: 'put',
            body: JSON.stringify(newTodo),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())        
    }

    onChange=(e)=>{
        this.setState({newName: e.target.value})
    }

    
    render() {
        const TodoName = (
            <p className = "name">Name: {this.state.newName}</p>
        )
    
        const editingForm = (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="editName">Name: </label>
                    <input
                        type="text"
                        name="editName"
                        onChange={this.onChange}
                        value={this.state.newName}
                        id="editName"
                    />
            </form>
        )
        return(
            <div>
                <div onClick = {this.editName} className="click">{this.state.editing ? editingForm : TodoName}</div>
                <p>
                Description: {this.props.todo ? this.props.todo.description: "There is no description"}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        todo: state.todos.find(todo => todo.id === Number(props.match.params.id))
    };
}

export default connect(mapStateToProps, {fetchTodos})(Todo);