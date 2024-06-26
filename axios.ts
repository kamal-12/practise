import axios from 'axios';

interface MyTodo {
  id: number;
  title: string;
  body: string;
}

function fetchData(): Promise<MyTodo> {
  return axios.get<MyTodo>('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      return response.data;
    });
}

fetchData()
  .then((data: MyTodo) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
