import React, { useState } from 'react';
import { ReactComponent as CheckMark } from '../../assets/checkbox_correct.svg';
import { ReactComponent as CrossMark } from '../../assets/checkbox_cross.svg';
import { ReactComponent as ExclamationMark } from '../../assets/checkbox_error.svg';
import './checkbox.style.scss';

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
    switch (progress) {
      case CHECKBOX_STATES.DEFAULT:
        return '';
      case CHECKBOX_STATES.SUCCESS:
        return <CheckMark />;
      case CHECKBOX_STATES.FAILURE:
        return <CrossMark />;
      case CHECKBOX_STATES.OTHER:
        return <ExclamationMark />;
    }
  }

  return (
    <div className='checkbox' onClick={switchState}>
      {renderCheckbox()}
    </div>
  );
}

export default CheckBox;
