import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/slices/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, loading } = useSelector(store => store.greeting);

  useEffect(() => {
    dispatch(fetchGreeting())
  }, [dispatch])

  if (loading) {
    return <div>Loading greeting...</div>
  }

 
  return (
    <div>
     {message}
    </div>
  )
}

export default Greeting