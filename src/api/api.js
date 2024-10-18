export const fetchPuppies = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      if (!response.ok) {
        throw new Error('Failed to fetch puppies');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching puppy data:', error);
      throw error; 
    }
  };
  

  export const fetchProducts = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching product data:', error);
      throw error; 
    }
  };

  export const fetchCustomers = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error fetching customers data:', error);
      throw error; 
    }
  };
  