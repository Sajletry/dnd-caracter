import * as constants from './constants';
import { IDispatch } from "../../store/interfaces";
import { Request } from "../../services/request";
import { IActions } from "./types";

function getAllSpells(): IDispatch<any> {
    return ( dispatch ) => {
        dispatch( {
            type: constants.START_ALL_SPELLS_REQUEST
        } );

        const request = new Request( constants.FEATURE_NAME );

        dispatch( {
            type: constants.SUCCESS_ALL_SPELLS_REQUEST,
            payload: request.getAll()
        } )
    }
}

export const mapDispatchToProps = ( dispatch: any ): IActions => ( {
    getAllSpells: () => dispatch( getAllSpells() )
} );
