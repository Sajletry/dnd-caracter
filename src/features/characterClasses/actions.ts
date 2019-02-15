import * as constants from './constants';
import { IDispatch } from "../../store/interfaces";
import { Request } from "../../services/request";
import { IActions } from "./types";

function getAllClasses(): IDispatch<any> {
    return ( dispatch ) => {
        dispatch( {
            type: constants.SUCCESS_ALL_CLASSES_REQUEST
        } );

        const request = new Request( constants.FEATURE_NAME );

        dispatch( {
            type: constants.SUCCESS_ALL_CLASSES_REQUEST,
            payload: request.getAll()
        } )
    }
}

export const mapDispatchToProps = ( dispatch: any ): IActions => ( {
    getAllClasses: () => dispatch( getAllClasses() )
} );
