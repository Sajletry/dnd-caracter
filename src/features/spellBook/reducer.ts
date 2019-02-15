import * as constants from './constants';
import { IState,IAction } from "./types";
const initialState: IState = {
    allSpells: [],
};

export function reducer( state: IState = initialState, action: IAction): IState {
    switch ( action.type ) {
        case constants.SUCCESS_ALL_SPELLS_REQUEST:
            return { ...state, allSpells: action.payload };
        default:
            return state;
    }
}