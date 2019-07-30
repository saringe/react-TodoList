import React, { Component } from 'react'
import Item from './Todoitem'

export default class Todolist extends Component {
    render() {
        return (
            <div>
                <h1>from Todolist</h1>
                <Item></Item>
            </div>
        )
    }
}
