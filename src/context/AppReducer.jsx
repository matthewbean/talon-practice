import{
    HANDLE_CLICK_RIGHT,
    HANDLE_CLICK_WRONG
} from './types'
export default (state, action) =>{
    switch(action.type){
        case HANDLE_CLICK_RIGHT:
            return{...state,
                text: action.payload
            }
        case HANDLE_CLICK_WRONG:
            return{...state,
                mistakes: action.payload
            }
        default:
            return state
    }
}