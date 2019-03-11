import { createSelector } from 'reselect';
import { IState } from "./types";
import { IState as IAppState } from "../../store/combinedReducer";
import { ISelectors } from "./types";


const selectAllCharacterClasses = ( state: IAppState ): IState => state.AvailableCharacters;

export const selectAllCharacters = createSelector( selectAllCharacterClasses, state => state.characters );

export const mapStateToProps = ( state: IAppState ): ISelectors => ( {
    selectAllCharacters: selectAllCharacters( state )
} );