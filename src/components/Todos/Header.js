import React from 'react';
import {todosActions} from "../../redux/todos.js";
import { Input,Button } from 'antd';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            txt:""
        }
    }
    onChange(event){
        this.setState({txt:event.target.value});
    }
    addItem(){
        if(!this.state.txt) return;
        this.props.dispatch(todosActions.addItem(this.state.txt));
    }
    //按回车添加
    keyUpHandle(event){
        event.keyCode === 13 && this.addItem();
    }
    render() {
        return (
            <div className="todo-header">
                <div><h2>Todos：</h2></div>
                <div><Input type="text" maxLength={13} onChange={this.onChange.bind(this)} onPressEnter={this.keyUpHandle.bind(this)}/></div>
                <div className="btn"><Button onClick={this.addItem.bind(this)}>添加</Button></div>
            </div>
        );
    }

}

export default Header;
