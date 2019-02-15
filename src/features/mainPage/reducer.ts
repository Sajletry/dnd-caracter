import { IState } from "./types";
import { IAction } from "../../store/interfaces";


const initialState: IState = {

};

export function reducer( state: IState = initialState, action: IAction<any>): IState {
    switch ( action.type ) {
        default:
            return state;
    }
}