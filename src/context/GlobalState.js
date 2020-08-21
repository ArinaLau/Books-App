import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer, { ACTIONS } from './AppReducer';
import axios from 'axios';

const initialState = {
    loading: true,
    error: "",
    books: []
}
  
const endpoint = "http://localhost:3001";

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addNewBook = item => {
        axios
        .post(endpoint + '/books/', item)
        .then(() => {
            dispatch({
                type: ACTIONS.ADD_BOOK,
                payload: item
            })
            // console.log(response.data)
        })
        .catch(error => {
           console.log(error)
        })
        
    }

    const deleteBook = id => {
        axios
        .delete(endpoint + `/books/${id}`, id)
        .then(() => {
            dispatch({
                type: ACTIONS.DELETE_BOOK,
                payload: id
            })
            // console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    useEffect(() => {
        axios
        .get(endpoint + "/books")
        .then(response => {
            dispatch({
                type: ACTIONS.FETCH_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: ACTIONS.FETCH_ERROR
            })
        })
    }, [])

    return(
        <GlobalContext.Provider value={{
            loading: state.loading,
            error: state.error,
            books: state.books,
            addNewBook,
            deleteBook
        }}>
            {children}
        </GlobalContext.Provider>
    )
}