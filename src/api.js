import axios from 'axios';

// Mock API call function
export const fetchProducts = async (query) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
