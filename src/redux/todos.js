import {getFetch} from "../utils/fetchData";
//Action Creators
export const todosActions={
    fetchTodoData:() => (dispatch) => {
        getFetch("/wxvodC/list?pageNum=1&pageSize=3&type=1",function(todoData){
            console.log(todoData);
            dispatch({type: "FETCH_TODO_DATA" , todoData});
        });
    },
    addItem: content => ({type:"ADD_ITEM",content}),
    removeItem:id => ({type:"REMOVE_ITEM",id}),
};

const initState = [
    {
        id : 1,
        content : ""
    },
];

//Reducer
export const todos = (state = initState,action) => {
    switch(action.type){
        case "FETCH_TODO_DATA": //初始加载
            return [
                {id: action.todoData.code, content:action.todoData.code + action.todoData.description}
            ];
        case "ADD_ITEM"://增
            return [
                {id:state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1 , content:action.content},
                ...state
            ];
        case "REMOVE_ITEM"://删
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
};
