interface MyTodo {
  id: number;
  name: string;
  isCompleted: boolean;
}

function fetchData(): Promise<MyTodo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isCompleted = Math.random() >= 0.5;

      if (isCompleted) {
        resolve({
          id: 1,
          name: "watch netflix",
          isCompleted: true,
        });
      } else {
        reject("Todo not completed");
      }
    }, 5000); 
  });
}

fetchData()
  .then((data: MyTodo) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
