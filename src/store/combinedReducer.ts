import { combineReducers } from 'redux'
// import {testReducer, ITestReducerState } from "../features/testFeature/reducer";
import { ITestReducerState,TestFeature } from '../features/testFeature';

export interface IState {
    TestFeature: ITestReducerState
};

export const rootReducer = combineReducers( {
    TestFeature: TestFeature.reducer
} );
