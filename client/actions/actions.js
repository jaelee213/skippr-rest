// import actionType constants
import * as types from '../constants/actionTypes';

export const logEmail = text => ({
  type: types.LOG_EMAIL,
  payload: text,
});

export const logPass = text => ({
  type: types.LOG_PASSWORD,
  payload: text,
});

export const logIn = (state) => {
  return (dispatch) => {
    fetch('https://infinite-waters-83473.herokuapp.com/restaurant/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email: state.emailField,
        password: state.passwordField,
      }),
    })
      .then(res => res.json())
      .then((user) => {
        console.log('ZXCV', user);
        dispatch({
          type: types.LOG_IN,
          payload: user,
        });
      });
  };
};

export const getRestaurants = () => {
  return (dispatch) => {
    fetch('https://infinite-waters-83473.herokuapp.com/user/restaurants')
      .then(res => res.json())
      .then((restaurants) => {
        dispatch({
          type: types.GET_RESTAURANTS,
          payload: restaurants,
        });
      });
  };
};

export const getOrders = (id) => {
  console.log('ASDF', id);
  return (dispatch) => {
    fetch(`https://infinite-waters-83473.herokuapp.com/restaurant/orders/${id}`)
    // fetch('http://localhost:3000/restaurant/orders/1')
      .then(res => res.json())
      .then((orders) => {
        dispatch({
          type: types.GET_ORDERS,
          payload: orders,
        });
      });
  };
};

export const completeOrder = orderNum => (dispatch) => {
  const urlString = `https://infinite-waters-83473.herokuapp.com/restaurant/orders/${orderNum}`;
  console.log('QWERTY ACTION CALLED', orderNum, urlString);
  fetch(urlString, {
    method: 'PUT',
  }).then(res => res.json())
    .then((orderNum) => {
      dispatch({
        type: types.COMPLETE_ORDER,
        payload: orderNum,
      });
    });
};

export const getMenu = () => {
  return (dispatch) => {
    fetch(`https://infinite-waters-83473.herokuapp.com/user/restaurants/${id}`)
      .then(res => res.json())
      .then((menu) => {
        dispatch({
          type: types.GET_MENU,
          payload: menu,
        });
      });
  };
};
