import React from 'react'
import { Input, Button, List } from 'antd'
const TodoListUI = (props) => {
    return (
        <div>
            <div style= {{marginTop: '10px', marginLeft: '10px'}}>
            <Input value={props.inputValue} 
                onChange={props.handleChange}
                placeholder='todo info' 
                style = {{width: '300px', marginRight: '10px'}}
            />
            <Button type="primary"
                onClick={props.handleBtnClick}
            >
                提交
            </Button>
            </div>
            <List
            style={{marginTop: '10px', marginLeft: '10px', width: '300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
            <List.Item 
                onClick={() => {props.handleItemDelete(index)}}
            >
                {item}
            </List.Item>)}
            />
      </div>
    )
}

export default TodoListUI