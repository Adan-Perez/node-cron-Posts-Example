import axios from 'axios';

export const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
