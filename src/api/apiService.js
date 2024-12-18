export const runApi = async (input) => {
    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      return data.result; // Adjust based on API response
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  };
  