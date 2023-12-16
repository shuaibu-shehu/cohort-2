/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.id = 0;
    this.list = [];
  }
  add = (todo) => {
    this.list.push(todo);
  };
  remove = (index) => {
    this.list = this.list.filter((item,i) => i !== index);
  };
  update = (index, newUpdate) => {
    if (index<this.list.length) {
      this.list[index]=newUpdate
    }
  };
  getAll=()=>{
    return this.list
  }
  get=(index)=>{
  if (this.list[index]) {
    return this.list[index]
  } else{
    return null
  }
  }
  clear=()=>{
    this.list=[];
  }
}

const t= new Todo();
t.add('task 1');
t.add('task 2');
t.remove(5);
t.update(3,'update')


console.log(t.getAll());
console.log(t.get(4));
module.exports = Todo;
