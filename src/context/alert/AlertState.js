import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

function AlertState(props) {
  const initialState = null;
  const [state, dispath] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispath({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => {
      dispath({
        type: REMOVE_ALERT
      });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
