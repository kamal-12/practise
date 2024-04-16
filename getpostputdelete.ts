import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET request
function getPosts(): Promise<Post[]> {
  return axios.get<Post[]>(BASE_URL)
    .then(response => {
      return response.data;
    });
}

// POST request
function createPost(newPost: Omit<Post, 'id'>): Promise<Post> {
  return axios.post<Post>(BASE_URL, newPost)
    .then(response => {
      return response.data;
    });
}

// PUT request
function updatePost(postId: number, updatedPost: Partial<Post>): Promise<Post> {
  const url = `${BASE_URL}/${postId}`;
  return axios.put<Post>(url, updatedPost)
    .then(response => {
      return response.data;
    });
}

// DELETE request
function deletePost(postId: number): Promise<void> {
  const url = `${BASE_URL}/${postId}`;
  return axios.delete(url)
    .then(() => {
      // No need to return data as DELETE requests typically don't return data
      return;
    });
}

// // Example usage:
// getPosts()
//   .then(posts => {
//     console.log('All posts:', posts);
//     // Assuming you want to create, update, and delete a post for demonstration purposes
//     const newPost: Omit<Post, 'id'> = {
//       userId: 1,
//       title: 'New Post Title',
//       body: 'New post body content'
//     };
//     return createPost(newPost);
//   })
//   .then(createdPost => {
//     console.log('Created Post:', createdPost);
//     const updatedPost: Partial<Post> = {
//       title: 'Updated Post Title',
//       body: 'Updated post body content'
//     };
//     return updatePost(createdPost.id, updatedPost);
//   })
//   .then(updatedPost => {
//     console.log('Updated Post:', updatedPost);
//     return deletePost(updatedPost.id);
//   })
//   .then(() => {
//     console.log('Post deleted successfully');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
