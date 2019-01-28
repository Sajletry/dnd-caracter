import * as constants from './constants';
import { IAction } from "./actions";
import { ITestReducerState } from "./interface";


const initialState: ITestReducerState = {
    test: false,
};

export function reducer( state: ITestReducerState = initialState, action: IAction): ITestReducerState {
    switch ( action.type ) {
        case constants.CHANGE_TEST:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}