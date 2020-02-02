import React, { useState } from 'react';
import checkmark from './checkmark_logo.jpg';
import cross from './cross_logo.jpg';
import other from './error_logo.jpg';
import './checkbox.style.css';

const CHECKBOX_STATES = {
  DEFAULT: '',
  SUCCESS: 'success',
  FAILURE: 'failure',
  OTHER: 'other'
};

function CheckBox() {
  const [progress, setProgress] = useState(CHECKBOX_STATES.DEFAULT);

  function switchState(prevState) {
    prevState = progress;
    switch (prevState) {
      case CHECKBOX_STATES.DEFAULT:
        return setProgress(CHECKBOX_STATES.SUCCESS);
      case CHECKBOX_STATES.SUCCESS:
        return setProgress(CHECKBOX_STATES.FAILURE);
      case CHECKBOX_STATES.FAILURE:
        return setProgress(CHECKBOX_STATES.OTHER);
      case CHECKBOX_STATES.OTHER:
        return setProgress(CHECKBOX_STATES.DEFAULT);
    }
  }

  function renderCheckbox() {
    let logo, alt;
    switch (progress) {
      case CHECKBOX_STATES.DEFAULT:
        return '';
      case CHECKBOX_STATES.SUCCESS:
        [logo, alt] = [checkmark, 'success'];
        break;
      case CHECKBOX_STATES.FAILURE:
        [logo, alt] = [cross, 'failure'];
        break;
      case CHECKBOX_STATES.OTHER:
        [logo, alt] = [other, 'other'];
        break;
    }
    return <img src={logo} alt={alt} />;
  }

  return (
    <div className='checkbox' onClick={switchState}>
      {renderCheckbox()}
    </div>
  );
}

export default CheckBox;
