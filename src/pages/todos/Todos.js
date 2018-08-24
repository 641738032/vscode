import React from "react";
import {connect} from "react-redux";
import {todosActions} from "../../redux/todos.js";
import "./todos.less";
import Header from "../../components/Todos/Header.js";
import Item from "../../components/Todos/Item.js";

class Todos extends React.Component{

    componentDidMount(){
        this.props.dispatch(todosActions.fetchTodoData());
    }

    render(){
        const {data,dispatch} = this.props;
        return (
            <div>
                <Header dispatch={dispatch}/>
                <div>
                    <ul>
                        {data.map((item,idx) => <li key={idx}><Item item={item} dispatch={dispatch}/></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

Todos = connect(
    state => ({
        data: state.todos
    })
)(Todos);

export default Todos;