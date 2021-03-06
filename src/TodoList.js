import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI.js'
import store from './store/index.js'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList} from './store/actionCreators.js'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }
  handleChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    console.log(index)
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList