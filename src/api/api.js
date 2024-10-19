import axios from 'axios';

export const fetchPuppies = async () => {
  try {
    const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets');
    return response.data; 
  } catch (error) {
    console.error('Error fetching puppy data:', error);
    throw error; 
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://monitor-backend-rust.vercel.app/api/products');
    return response.data; 
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error; 
  }
};

export const fetchCustomers = async () => {
  try {
    const response = await axios.get('https://monitor-backend-rust.vercel.app/api/customers');
    return response.data; 
  } catch (error) {
    console.error('Error fetching customers data:', error);
    throw error; 
  }
};
