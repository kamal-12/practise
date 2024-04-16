import axios from 'axios';

interface MyTodo {
  id: number;
  name: string;
  isCompleted: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; 

function updateData(todoId: number, todo: MyTodo): Promise<MyTodo> {
  return axios.put(`${API_URL}/${todoId}`, todo)
    .then(response => response.data);
}


const todoToUpdate = { 
  id: 5, 
  name: "Learn about HTTP methods for put or update", 
  isCompleted: true 
};

updateData(todoToUpdate.id, todoToUpdate)
  .then(updatedData => console.log("Data updated:", updatedData))
  .catch(error => console.error("Error:", error));
