import React, { useContext, useEffect } from "react";
import Reducer from "./Reducer";
import { useReducer } from "react";

//API Context creation
const AppContext = React.createContext();

let API = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=300e1f684ee94b23a04e2c9795bc3af8&}`;

const initialState = {
  isLoading: true,
  articles: [],
  page:1,
  
};

//to create provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer,initialState);

  const fetchApiData = async (url) => {
    dispatch({ 
      type: "SET_LOADING"
     }
    
    );
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      dispatch({
        type: "GET_STORIES",
         payload: {
           articles: data.articles,
           totalResults:data.totalResults,
         }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const  getnext=async()=>{
  
      dispatch({
        type:"NEXT_PAGE",
      })
  }

  const getprev=()=>{
    dispatch({
      type:"PREV_PAGE"
    })
  }

  useEffect(() => {
    fetchApiData(API+`&page=${state.page}`);
    console.log((state.page))
  }, [state.page]);

  return (
    <AppContext.Provider value={{ ...state,getnext,getprev }}>{children}</AppContext.Provider>
  );
};

//custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
