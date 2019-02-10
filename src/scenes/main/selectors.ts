import {createSelector} from 'reselect';
import {IState} from "./interface";
import {IState as IAppState} from "../../store/combinedReducer";


const selectAllSpellsSelector = (state: IAppState): IState => state.SpellBookState;

export const selectAllSpells = createSelector(selectAllSpellsSelector, state => state.allSpells);