import axios, { AxiosResponse } from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const baseURL = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
  try {
    // GET request to fetch all posts
    const response: AxiosResponse<Post[]> = await axios.get(baseURL);
    console.log("All Posts:");
    console.log(response.data);

    // POST request to create a new post
    const newPostData: Post = {
      id: 101,
      title: "New Post",
      body: "New Post Body",
    };
    await axios.post<Post>(baseURL, newPostData);
    console.log("New Post created.");

    // PUT request to update the first post
    const updatedPostData: Partial<Post> = { title: "Updated Post" };
    await axios.put<Post>(`${baseURL}/1`, updatedPostData);
    console.log("First Post updated.");

    // DELETE request to delete the last post
    await axios.delete(`${baseURL}/100`);
    console.log("Last Post deleted.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
