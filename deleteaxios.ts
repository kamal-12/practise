import axios from "axios";

interface MyTodo {
  id: number;
  name: string;
  isCompleted: boolean;
}

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function updateData(todoId: number, todo: MyTodo): Promise<MyTodo> {
  const response = await axios.put(`${API_URL}/${todoId}`, todo, {});
  return response.data;
}

async function deleteData(todoId: number): Promise<void> {
  await axios.delete(`${API_URL}/${todoId}`);
  console.log(`Todo with ID ${todoId} deleted`);
}

const todoToUpdate = {
  id: 5,
  name: "Learn about HTTP methods for delete",
  isCompleted: true,
};

updateData(todoToUpdate.id, todoToUpdate)
  .then((updatedData) => console.log("Data updated:", updatedData))
  .catch((error) => console.error("Error:", error));

const todoIdToDelete = 10;
deleteData(todoIdToDelete);
