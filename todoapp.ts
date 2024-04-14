// interface Todo {
//   id: number;
//   description: string;
//   IsCompleted: boolean;
// }

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    const isCompleted = Math.random() >= 0.5;

    if (isCompleted) {
      resolve("Todo completed");
    } else {
      reject("Todo not completed");
    }
  });
}

fetchData() 
    .then ((data: string) => {
        console.log(data);
    })
    .catch ((error) => {
        console.error(error);
    });

   