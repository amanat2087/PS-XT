import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import ProgramReducer from './reducer';


const loggerMiddleware = createLogger();

export const store = createStore(
    ProgramReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
