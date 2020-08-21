export const ACTIONS = {
    ADD_BOOK: 'ADD_BOOK',
    DELETE_BOOK: 'DELETE_BOOK',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR',
    ADD_ERROR: 'ADD_ERROR',
}

export default (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_BOOK: 
            return {
                ...state,
                books: [action.payload, ...state.books]
            }
        case ACTIONS.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(
                    item => item.id !== action.payload   
                )
            }
        
        case ACTIONS.FETCH_SUCCESS: 
            return {
                loading: false,
                books: action.payload,
                error: ""
            }
        case ACTIONS.FETCH_ERROR:
            return {
                loading: false,
                books: [],
                error: "Something went wrong!"
            }

        default:
            return state
    }
}