import express from "express";
import type { Response, Request, NextFunction } from "express";

const app = express();

interface User {
  id: number;
  username: string;
  password: string;
}

interface SingupBody {
  username: string;
  fullname: string;
  email: string;
  password: string;
}


  interface LoginBody {
    username: string;
    password: string;
  }


// Middleware to parse JSON bodies
app.use(express.json());

// Mock user database
let users: Array<User> = [];

// Signup route
app.post(
  "/api/v1/user/signup",
  (req: Request<{}, {}, SingupBody >, res: Response, next: NextFunction) => {
    const { username, email, fullname, password } = req.body;
    if (!username || !email || !fullname || !password) {
      res.status(400).json({
        message: "All input fields are required",
      });
      return;
    }

    // Check if username or email is already taken
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      res.status(409).json({ message: "Username or email is already taken" });
      return;
    }

    // Create new user
    const newUser: User = { id: users.length + 1, username, password };
    users.push(newUser);

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  }
);

// Signin route

app.post(
  "/api/v1/user/signin",
  (req: Request<{}, {}, LoginBody>, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    // Check if username or password is missing
    if (!username || !password) {
      res.status(400).json({
        message: "Username and password are required",
      });
      return;
    }

    // Find user in the database by username
    const user = users.find((user) => user.username === username);

    // Check if user exists
    if (!user) {
      res.status(401).json({
        message: "User does not exist",
      });
      return;
    }

    // Check if the password matches
    if (user.password !== password) {
      res.status(401).json({
        message: "Incorrect password",
      });
      return;
    }

    // Respond with success message
    res.status(200).json({
      message: "Signin successful",
      user: {
        username: user.username,
        password: user.password,
      },
    });
  }
);
// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
