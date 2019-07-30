import React, { Component } from 'react'
import Todoitem from './Todoitem'

export default class Todolist extends Component {
    render() {
        const {items, handleDelete,handleEdit,clearList}= this.props
        return (
         <ul className="list-group my-5 ">
             <h3 className="text-capitalize text-center">todo list</h3>
           {items.map(item => {
                 return(
                     <Todoitem
                     key={item.id} 
                     title={item.id} 
                     handleDelete={()=>handleDelete(item.id) }
                    handleEdit={()=>handleEdit(item.id)}
                   ></Todoitem>
                 )
             })}
                <button className="btn btn-danger btn-block text-center mt-5" onClick={clearList}>CLEAR LIST</button>
         </ul>
        )
    }
}
