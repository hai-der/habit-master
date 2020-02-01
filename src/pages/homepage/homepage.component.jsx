import React from 'react';
import Habit from '../../components/habit/habit-component';

const HomePage = () => (
  <div>
    <h1>Welcome to Habit Master.</h1>
    <Habit name='exercise' />
    <Habit name='meditation' />
    <Habit name='journaling' />
  </div>
);

export default HomePage;
