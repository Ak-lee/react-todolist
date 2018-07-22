import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction= (value)=> {
    return {
        type: CHANGE_INPUT_VALUE,
        value,
    }
}
export const getAddItemAction = () => {
    return {
        type: ADD_TODO_ITEM,
    }
}
export const getDeleteItemAction = (index) => {
    return {
        type: DELETE_TODO_ITEM,
        index
    }
}
export const initListAction = (data)=>{
    return {
        type: INIT_LIST_ACTION,
        data
    }
}
export const getTodoList = () => {
    return (dispatch) => {  //有了 redux-thunk,我们返回的action可以是一个函数了。
        axios.get('list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
          },(err) => {
            console.log(err)
          })
    }
}