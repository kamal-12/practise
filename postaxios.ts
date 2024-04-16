import axios from "axios";

interface MyTodo {
  id: number;
  name: string;
  isCompleted: boolean;
}

const API_URL = "https://jsonplaceholder.typicode.com/posts";
function postData(todo: MyTodo): Promise<MyTodo> {
  return axios
    .post<MyTodo>(API_URL, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

const newTodo = {
  id: 101,
  name: "Learn about post",
  isCompleted: false,
};

postData(newTodo)
  .then((postedData) => console.log("Data posted:", postedData))
  .catch((error) => console.error("Error:", error));
