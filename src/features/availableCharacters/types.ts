import { ISpell } from "../../models/allSpells";
import { CharacterClassesNames } from "../../models/allClasses";

export interface IState {
    characters: ICharacter[]
}

export interface IActions {
    getAllCharacters: any;
}

export interface ISelectors {
    selectAllCharacters: any;
}

export interface IProps extends IActions, ISelectors {
}

export interface ICharacter {
    name: string;
    level: number;
    class: CharacterClassesNames;
    spellsList:ISpell[];
    preparedSpells:ISpell[];
    encaunterSpells:ISpell[];
}

