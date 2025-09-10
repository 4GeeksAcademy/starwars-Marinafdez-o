import React, { createContext, useReducer } from 'react';

const initialState = {
  favorites: [],
  data: {
    people: [],
    films: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.category]: action.payload.items
        }
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
