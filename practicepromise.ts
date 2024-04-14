function fetchData(x: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (x % 2 === 0) {
      resolve("Even");
    } else {
      reject("Odd");
    }
  });
}

fetchData(11)
  .then((data: string) => {
    console.log(data);
  })
  .catch((error: any) => {
    console.error(error);
  });
