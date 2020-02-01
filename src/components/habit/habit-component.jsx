import React from 'react';
import CheckBox from '../checkbox/checkbox.component';
import './habit-style.css';

const Habit = props => (
  <div className='habit'>
    <div className='title'>{props.name}</div>
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
    <CheckBox />
  </div>
);

export default Habit;
