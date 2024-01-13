// apiUtils.ts
export const registerUser = async (user: any): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
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
      const response = await fetch('http://localhost:5000/api/auth/login', {
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
  
  