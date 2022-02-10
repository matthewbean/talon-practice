import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './AppReducer';
import{
    HANDLE_CLICK_RIGHT,
    HANDLE_CLICK_WRONG
} from './types'

const AppState = props=>{
    const initialState = {
        currentIndex:0,
        mistakes: 0,
        text: 'why do we use it?It is a long established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    };
    const [state, dispatch] = useReducer(appReducer, initialState);
//handle keypress
    const handleKeypress=(key)=>{
        console.log(key, state.text[0])
        if (key === state.text[0]){
            console.log('correct')
            dispatch({type:HANDLE_CLICK_RIGHT, payload: state.text.slice(1)})
        }  else {
            console.error('wrong')
            dispatch({type:HANDLE_CLICK_WRONG, payload: state.mistakes+1})
        }
    }
//


//set app
    return (
        <AppContext.Provider 
            value = {{
                currentIndex: state.currentIndex,
                text: state.text,
                mistakes: state.mistakes,
                handleKeypress
            }}   
            >
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;