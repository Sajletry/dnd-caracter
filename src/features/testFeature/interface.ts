import { IAction  } from "../../store/interfaces";
    export interface ITestReducerState {
        test: boolean;
    }

    export interface ITestAction extends IAction<boolean> {
        payload: boolean;
    }

    export interface ITestActions {
        testAction: any;
    }

    export interface ITestSelectors {
        testValue: boolean;
    }

    export interface ITestProps extends ITestActions, ITestSelectors {

    }

