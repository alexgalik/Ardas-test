import React, {Component} from 'react';
import { connect } from 'react-redux';

class Todo extends Component { 
    constructor(props){
        super(props);
        this.state = {
            id: this.props.todo.id,
            newName: this.props.todo.name,
            editing: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.editName = this.editName.bind(this);
    }   

    editName = () =>{
        this.setState({editing: true});
        console.log(this.state);
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
            <p>Name: {this.state.newName}</p>
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
                <div onClick = {this.editName}>{this.state.editing ? editingForm : TodoName}</div>
                <p>
                Description: {this.props.todo.description ? this.props.todo.description: "There is no description"}
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log(Number(props.match.params.id));
    return {
        todo: state.todos.find(todo => todo.id === Number(props.match.params.id))
    };
}

export default connect(mapStateToProps, null)(Todo);