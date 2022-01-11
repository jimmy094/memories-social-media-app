import axios from 'axios';

const url = 'http://localhost:5000/posts';

//going to export this function to be used in other files

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost)