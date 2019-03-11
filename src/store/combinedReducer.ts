import { combineReducers } from 'redux'
import { reducer as spellBookReducer } from '../features/spellBook/reducer'
import { reducer as characterClassesReducer } from '../features/characterClasses/reducer'
import { reducer as availableCharacters } from '../features/availableCharacters/reducer'
import { IState as ISpellBookState } from '../features/spellBook/types'
import { IState as ICharacterClassesState } from '../features/characterClasses/types'
import { IState as IAvailableCharacters } from '../features/availableCharacters/types'

export interface IState {
    SpellBookState: ISpellBookState;
    CharacterClassesState: ICharacterClassesState;
    AvailableCharacters: IAvailableCharacters;
};

export const rootReducer = combineReducers( {
    SpellBookState: spellBookReducer,
    CharacterClassesState: characterClassesReducer,
    AvailableCharacters: availableCharacters
} );
