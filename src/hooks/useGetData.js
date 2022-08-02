import React from 'react';
import axios from 'axios';

//Initial state
const initialState = {
  loading: true,
  error: false,
  data: {},
  lat: 64,
  lon: 26,
  address: null,
  date: null,
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
        data: action.payload.response,
        address: action.payload.address,
        date: action.payload.date,
      };
    case actionType.location:
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    default:
      return state;
  }
};

function useGetData() {
  //Use reducer
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //Action creators
  const onLoading = () => dispatch({ type: actionType.loading });
  const onSuccess = (response, address, date) =>
    dispatch({
      type: actionType.data,
      payload: { response, address, date },
    });
  const onError = () => dispatch({ type: actionType.error });
  const onLocation = (position) => {
    dispatch({
      type: actionType.location,
      payload: {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      },
    });
  };

  const onGetLocation = () => {
    navigator.geolocation.getCurrentPosition(onLocation, onError);
  };

  const searchCity = async (city) => {
    const API_URL = `${process.env.REACT_APP_MAPS_API}address=${city}&key=${process.env.REACT_APP_MAPS_API_KEY}`;
    try {
      const { data } = await axios(API_URL);

      const location = {
        coords: {
          latitude: data.results[0].geometry.location.lat,
          longitude: data.results[0].geometry.location.lng,
        },
      };
      onLocation(location);
    } catch (err) {
      onError();
    }
  };

  const getLocalDate = (timeOffset) => {
    let myDate = new Date();
    const utcDate = new Date(myDate.toUTCString().slice(0, -4));
    myDate.setTime(utcDate.getTime() + timeOffset * 1000);
    return myDate;
  };

  //API Requests
  const getAddress = async (lat, lon, response) => {
    const API_URL = `${process.env.REACT_APP_MAPS_API}latlng=${lat},${lon}&language=en&key=${process.env.REACT_APP_MAPS_API_KEY}`;
    const { data } = await axios(API_URL);

    const address =
      data.results[8]?.formatted_address ||
      data.results[1]?.formatted_address;

    const cityDate = getLocalDate(response.timezone_offset);

    onSuccess(response, address, cityDate);
  };

  const getData = async () => {
    try {
      onLoading();
      const { data: response } = await axios(
        `${process.env.REACT_APP_API}lat=${state.lat}&lon=${state.lon}&cnt=2&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );

      getAddress(state.lat, state.lon, response);
    } catch (err) {
      onError();
    }
  };

  React.useEffect(() => {
    getData();
  }, [state.lat, state.lon]);
  return { state, onGetLocation, searchCity };
}

export { useGetData };
