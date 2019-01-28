import * as constants from './constants';
import { IDispatch } from "../../store/interfaces";
import { ITestAction } from "./interface";

export function dispatchTestAction( testValue: boolean ):IDispatch<boolean>{
    return ( dispatch ) => {
        dispatch( testAction( testValue ) );
    }
}

function testAction( testValue: boolean ): ITestAction {
    return {
        type: constants.CHANGE_TEST,
        payload: testValue
    }
}

export type IAction = ITestAction;