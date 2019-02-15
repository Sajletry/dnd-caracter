// import { createSelector } from 'reselect';
// import { IState } from "./types";
import { IState as IAppState } from "../../store/combinedReducer";
import { ISelectors } from "./types";


// const selectAllSpellsSelector = ( state: IAppState ): IState => state.SpellBookState;
//
// export const selectAllSpells = createSelector( selectAllSpellsSelector, state => state.allSpells );

export const mapStateToProps = ( state: IAppState ): ISelectors => ( {} );