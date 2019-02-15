import {createSelector} from 'reselect';
import {IState,ISelectors} from "./types";
import {IState as IAppState} from "../../store/combinedReducer";

const selectAllSpellsSelector = (state: IAppState): IState => state.SpellBookState;

const selectAllSpells = createSelector(selectAllSpellsSelector, state => state.allSpells);

export const mapStateToProps = ( state: IAppState ): ISelectors => ( {
    selectAllSpells: selectAllSpells(state)
} );