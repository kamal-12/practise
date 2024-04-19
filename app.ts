import * as http from "http";
import express from "express";
const app = express();
const server = http.createServer(app);

// Sample todo data stored in array
type Todo = {
  id: number;
  title: string;
  IsCompleted: boolean;
};

let todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", IsCompleted: false },
  { id: 2, title: "Build a project", IsCompleted: true },
  { id: 3, title: "Creating a setup for express", IsCompleted: true },
  { id: 4, title: "Creating setup for TS", IsCompleted: true },
  { id: 5, title: " adfadfadsfasdfasdfas", IsCompleted: false },
  { id: 6, title: "adfadfasdfasdfasdfasdfad", IsCompleted: true },
  { id: 7, title: "asdfasdfasdfasdfasdfasdfasd", IsCompleted: false },
  { id: 8, title: "asdfadfasdfasdfasdfas", IsCompleted: true },
  { id: 9, title: "sucessfully created get in axios", IsCompleted: false },
  { id: 10, title: "just created post in axios", IsCompleted: true },
];

let nextTodoId = 3; // For generating new todo IDs

// Middleware for parsing request bodies
app.use(express.json());

// GET /todos - Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// GET /todos/:id - Get todo by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

// POST /todos - Create a new todo
app.post("/todos", (req, res) => {
  const newTodo: Todo = {
    id: nextTodoId++,
    title: req.body.title,
    IsCompleted: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo); // 201 Created
});

// PUT /todos/:id - Update a todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id,
      title: req.body.title,
      IsCompleted: req.body.completed,
    };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).send("Todo not found");
  }
});

// DELETE /todos/:id - Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.status(204).send(); // 204 No Content
  } else {
    res.status(404).send("Todo not found");
  }
});

server.listen(3001, () => {
  console.log("server running...");
});
