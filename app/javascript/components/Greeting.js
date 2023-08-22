import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector(state => state.greeting.randomGreeting);

  console.log('Random greeting from Redux store:', randomGreeting);

  useEffect(() => {
    console.log('Dispatching fetchRandom Greeting action...');
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  console.log('Random Greeting:', randomGreeting); 

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;