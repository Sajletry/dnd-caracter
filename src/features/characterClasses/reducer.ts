import { IState } from "./types";
import { IAction } from "../../store/interfaces";
import * as constants from './constants';

const initialState: IState = {
    charactersClasses:[]
};

export function reducer( state: IState = initialState, action: IAction<any>): IState {
    switch ( action.type ) {
        case constants.SUCCESS_ALL_CLASSES_REQUEST:
            return { ...state, charactersClasses: action.payload };
        default:
            return state;
    }
}