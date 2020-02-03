import React from 'react';
import Habit from '../../components/habit/habit-component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h2>Welcome to Habit Master</h2>
    <Habit name='exercise' />
    <Habit name='meditation' />
    <Habit name='journaling' />
  </div>
);

export default HomePage;
