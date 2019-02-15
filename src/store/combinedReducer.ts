import {combineReducers} from 'redux'
import {reducer as spellBookReducer} from '../features/spellBook/reducer'
import {reducer as characterClassesReducer} from '../features/characterClasses/reducer'
import {IState as ISpellBookState} from '../features/spellBook/types'
import {IState as ICharacterClassesState} from '../features/characterClasses/types'

export interface IState {
    SpellBookState: ISpellBookState;
    CharacterClassesState:ICharacterClassesState;
};

export const rootReducer = combineReducers({
    SpellBookState: spellBookReducer,
    CharacterClassesState: characterClassesReducer
});
