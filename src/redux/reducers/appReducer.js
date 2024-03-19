import {init} from '../utils/init'

export const appReducer = (state = init, action) => {
    switch(action.type){
        case 'LOADER':
            return {
                ...state,
                isShowLoader: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                user:action.payload.user,
                isLoggedIn: true  
            }
        case 'LOGOUT':
            return {
                ...state, 
                user: {},
                isLoggedIn: false
            }
    }
    return state;
}