// apiUtils.ts
import axios from 'axios';

export const registerUser = async (Gebruikers: any): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:3306/api/gebruiker/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Gebruikers),
      });
  
      if (response.ok) {
        console.log('User registered successfully.');
        return true;
      } else {
        console.error('Error registering user:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error registering user:', error);
      return false;
    }
  };
  // apiUtils.ts
export const loginUser = async (credentials: { email: string; password: string }): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:5000/api/gebruiker/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        console.log('Login successful.');
        return true;
      } else {
        console.error('Error logging in:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error logging in:', error);
      return false;
    }
  };
  export const addErvaringsdeskundige = async (Ervaringsdeskundige: any) => {
    try {
      const response = await fetch('http://localhost:5000/api/ervaringsdeskundige/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Ervaringsdeskundige),
      });
  
      if (response.ok) {
        console.log('Ervaringsdeskundige added successfully.');
        return true;
      } else {
        console.error('Error adding Ervaringsdeskundige:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error adding Ervaringsdeskundige:', error);
      return false;
    }
  };
  const apiUrl = 'http://localhost:5000/api/gebruiker/getUsers';

  class YourFrontendClass {
    async fetchUsers() {
        try {
            const response = await axios.get(apiUrl);
            const users = response.data;
            console.log(users);  // Do something with the retrieved users
        } catch (error) {
            console.error('Error fetching users', error);
        }
    }
}