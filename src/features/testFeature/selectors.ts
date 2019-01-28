import { createSelector } from 'reselect';
import { ITestReducerState } from "./interface";
import { IState } from "../../store/combinedReducer";


const getTest = ( state: IState ): ITestReducerState => state.TestFeature;

export const getTestValue = createSelector( getTest, TestFeature => TestFeature.test );