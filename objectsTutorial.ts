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

// Function to display the todo list
function displayTodoList() {
  console.log("Todo List:");
  todoList.forEach(todo => {
    console.log(`ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.isCompleted}`);
  });
}

// Create a new todo
createTodo("Watch movie at 7");

// Display the todo list
displayTodoList();
