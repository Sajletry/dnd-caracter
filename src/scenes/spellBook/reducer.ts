import * as constants from './constants';
import { IAction } from "./actions";
import { IState } from "./interface";


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