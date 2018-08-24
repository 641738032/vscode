import React from 'react';
import {todosActions} from "../../redux/todos.js";
import { Button } from 'antd';

class Item extends React.Component {

    //删除
    removeItem(){
        this.props.dispatch(todosActions.removeItem(this.props.item.id));
    }

    render() {
        const {item} = this.props;
        return (
            <div className="item">
                <div>{item.content}</div>
                <Button onClick={this.removeItem.bind(this)}>×</Button>
            </div>
        );
    }

}

export default Item;
