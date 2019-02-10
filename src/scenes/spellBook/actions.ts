import * as constants from './constants';
import { IDispatch } from "../../store/interfaces";
import { IRequestStart, IRequestSuccess } from "./interface";
import {Request} from "../../services/request";
import {FEATURE_NAME} from "./index";

export function getAllSpells():IDispatch<any>{
    return ( dispatch ) => {
        dispatch( startRequest(  ) );
        const request = new Request(FEATURE_NAME);
        dispatch(successRequest(request.getAll()))
    }
}

function startRequest( ): IRequestStart {
    return {
        type: constants.START_ALL_SPELLS_REQUEST
    }
}

function successRequest( payload:any[]): IRequestSuccess {
    return {
        type: constants.SUCCESS_ALL_SPELLS_REQUEST,
        payload
    }
}

export type IAction = IRequestStart | IRequestStart;