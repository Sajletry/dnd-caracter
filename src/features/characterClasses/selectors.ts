import { createSelector } from 'reselect';
import { IState } from "./types";
import { IState as IAppState } from "../../store/combinedReducer";
import { ISelectors } from "./types";


const selectAllCharacterClasses = ( state: IAppState ): IState => state.CharacterClassesState;

export const selectAllClasses = createSelector( selectAllCharacterClasses, state => state.charactersClasses );

export const mapStateToProps = ( state: IAppState ): ISelectors => ( {
    selectAllClasses: selectAllClasses( state )
} );