interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
  }
  
  let todoList: Todo[] = [];
  
  // Function to create a new todo item
  function createTodo(title: string): Todo {
    // Create a new todo object
    const newTodo: Todo = {
      id: todoList.length + 1, // Assigning a unique ID
      title: title,
      isCompleted: false // Set to false because we're creating a new todo
    };
  
    // Push the new todo to the todoList array
    todoList.push(newTodo);
  
    // Return the newly created todo
    return newTodo;
  }
  
  // Function to delete a todo item by ID
  function deleteTodo(id: number): void {
    // Find the index of the todo item with the given ID in the todoList array
    const index = todoList.findIndex(todo => todo.id === id);
  
    // If the todo item with the given ID is found, remove it from the todoList array
    if (index !== -1) {
      todoList.splice(index, 1);
    }
  }
  
  // Function to update the completion status of a todo item
  function updateTodoStatus(id: number, isCompleted: boolean): void {
    // Find the todo item with the given ID in the todoList array
    const todo = todoList.find(todo => todo.id === id);
  
    // If the todo item with the given ID is found, update its completion status
    if (todo) {
      todo.isCompleted = isCompleted;
    }
  }
  
  // Function to display the todo list
  function displayTodoList() {
    console.log("Todo List:");
    todoList.forEach(todo => {
      console.log(`ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.isCompleted}`);
    });
  }
  
  // Example usage:
  
  // Create a new todo
  createTodo("Watch movie at 7");
  
  // Display the todo list
  displayTodoList();
  
  // Update the completion status of the todo item with ID 1
  updateTodoStatus(1, true);
  
  // Display the updated todo list
  displayTodoList();
  
  // Delete the todo item with ID 1
  deleteTodo(1);
  
  // Display the updated todo list
  displayTodoList();
  