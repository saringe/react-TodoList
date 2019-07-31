import React, {Component} from 'react';
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/Todolist';


export default class App extends Component {
  state={
    items: [],
    id: uuid(),
    item:"",
    editItem:false,
  }
  handleChange = e => {
  this.setState({
  item:e.target.value
});
  };
  

  handleSubmit = e => 
  {e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItem =[...this.state.items, newItem]
    this.setState({
      items: updatedItem,
      item:"",
      id: uuid(),
      editItem:false

    
    })};

  clearList = () => 
  {this.setState({
    items:[]
  })};

  handleDelete = id => {
   const filteredItems = this.state.items.filter(item => item.id !==id)
  this.setState({
    items: filteredItems
  }) };

  handleEdit = (id) =>{ 
   const filteredItems = this.state.items.filter(item => item.id !==id);
    const selectedItem = this.state.items.find(item=> item.id === id);
    this.setState({
      items: filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true
    }) };

  
  render() {
    console.log(this.state);
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 max-auto cl-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo List</h3>
          <TodoInput 
          item={this.state.item} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          editItem={this.state.editItem}>

          </TodoInput>
          <TodoList 
          items={this.state.items} 
          handleDelete={this.handleDelete} 
          handleEdit={this.handleEdit} 
          clearList={this.clearList}>

          </TodoList>
          </div>
        </div>
      </div>
     
    )
  }
}
