import React from 'react';
import axios from 'axios';
import { useGetLocation } from './useGetLocation';
//Initial state
const initialState = {
  loading: true,
  error: false,
  data: {},
  lat: 19.42847,
  lon: -99.12766,
};

//Action type
const actionType = {
  loading: 'LOADING',
  error: 'ERROR',
  data: 'DATA',
  location: 'GET_LOCATION',
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case actionType.loading:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionType.error:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionType.data:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case actionType.location:
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
  }
};

function useGetData() {
  const location = useGetLocation();

  //Use reducer
  const [state, dispatch] = React.useReducer(reducer, initialState);
  //Action creators
  const onLoading = () => dispatch({ type: actionType.loading });
  const onSuccess = (response) =>
    dispatch({ type: actionType.data, payload: response });
  const onError = () => dispatch({ type: actionType.error });
  const handleLocation = () => {
    dispatch({
      type: actionType.location,
      payload: { lat: location.lat, lon: location.lon },
    });
  };

  const getData = async () => {
    try {
      onLoading();
      const { data: response } = await axios(
        `${process.env.REACT_APP_API}lat=${state.lat}&lon=${state.lon}&cnt=2&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      console.log(state.lat, state.lon);
      onSuccess(response);
    } catch (err) {
      onError();
    }
  };

  React.useEffect(() => {
    getData();
  }, [state.lat, state.lon]);
  return [state, handleLocation];
}

export { useGetData };
