import { IAction  } from "../../store/interfaces";
    export interface IState {
        allSpells: any[]
    }

    export interface IRequestStart extends IAction<any> {

    }

    export interface IRequestSuccess extends IAction<any> {
    }

    export interface IActions {
        getAllSpells: any;
    }

    export interface ISelectors {
        selectAllSpells:  any[]
    }

    export interface IProps extends IActions, ISelectors {

    }

