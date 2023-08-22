import axios from 'axios';

export const fetchRandomGreeting = () => async dispatch => {
  try {
    console.log('Fetching random greeting...');
    const response = await axios.get('/api/greetings/:greeting_id/greetings');
    console.log('Response:', response.data);
    const randomGreeting = response.data.greeting;
    dispatch({ type: 'SET_RANDOM_GREETING', payload: randomGreeting });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
