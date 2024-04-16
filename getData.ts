import axios from "axios";
import { error } from "console";

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchData() {
  const response = axios.get<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  response.then((postRes) => {
    console.log(postRes.data);
  });
  response.catch((error) => {
    console.log(error);
  });
}

fetchData();
