
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Images fetched successssssfully');
        }, 2000); 
    });
}

fetchData()
    .then((data: string) => {
        console.log(data);
    })
    .catch((error: any) => {
        console.error(error);
    });