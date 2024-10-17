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
  