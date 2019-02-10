import {combineReducers} from 'redux'
import {reducer as spellBookReducer} from '../scenes/spellBook/reducer'
import {IState as ISpellBookState} from '../scenes/spellBook/interface'

export interface IState {
    SpellBookState: ISpellBookState
};

export const rootReducer = combineReducers({
    SpellBookState: spellBookReducer
});
