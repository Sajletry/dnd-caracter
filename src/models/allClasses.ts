import { ICharacterClass } from "../features/characterClasses/types";

const wizardLevelsConfig = [
    { level: 1, masteryScore: 2, spellsCells: [ 3, 2, 0, 0, 0, 0, 0, 0, 0, 0 ] },
    { level: 2, masteryScore: 2, spellsCells: [ 3, 3, 0, 0, 0, 0, 0, 0, 0, 0 ] },
    { level: 3, masteryScore: 2, spellsCells: [ 3, 4, 2, 0, 0, 0, 0, 0, 0, 0 ] },
    { level: 4, masteryScore: 2, spellsCells: [ 4, 4, 3, 0, 0, 0, 0, 0, 0, 0 ] },
    { level: 5, masteryScore: 3, spellsCells: [ 4, 4, 3, 2, 0, 0, 0, 0, 0, 0 ] },
    { level: 6, masteryScore: 3, spellsCells: [ 4, 4, 3, 3, 0, 0, 0, 0, 0, 0 ] },
    { level: 7, masteryScore: 3, spellsCells: [ 4, 4, 3, 3, 1, 0, 0, 0, 0, 0 ] },
    { level: 8, masteryScore: 3, spellsCells: [ 4, 4, 3, 3, 2, 0, 0, 0, 0, 0 ] },
    { level: 9, masteryScore: 4, spellsCells: [ 4, 4, 3, 3, 3, 1, 0, 0, 0, 0 ] },
    { level: 10, masteryScore: 4, spellsCells: [ 5, 4, 3, 3, 3, 2, 0, 0, 0, 0 ] },
    { level: 11, masteryScore: 4, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 0, 0, 0 ] },
    { level: 12, masteryScore: 4, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 0, 0, 0 ] },
    { level: 13, masteryScore: 5, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 1, 0, 0 ] },
    { level: 14, masteryScore: 5, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 1, 0, 0 ] },
    { level: 15, masteryScore: 5, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 1, 1, 0 ] },
    { level: 16, masteryScore: 5, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 1, 1, 0 ] },
    { level: 17, masteryScore: 6, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 1, 1, 0 ] },
    { level: 18, masteryScore: 6, spellsCells: [ 5, 4, 3, 3, 3, 2, 1, 1, 1, 1 ] },
    { level: 19, masteryScore: 6, spellsCells: [ 5, 4, 3, 3, 3, 3, 1, 1, 1, 1 ] },
    { level: 20, masteryScore: 6, spellsCells: [ 5, 4, 3, 3, 3, 3, 2, 2, 1, 1 ] }

];
export enum CharacterClassesNames {
    Bard='Bard',
    Cleric='Cleric',
    Fighter='Fighter',
    Rogue='Rogue',
    Sorcerer='Sorcerer',
    Warlock='Warlock',
    Wizard='Wizard',
    Paladin='Paladin',
    Druid='Druid',
    Monk='Monk',
    Ranger='Ranger',
    Barbarian='Barbarian'
}

export const wizardClass: ICharacterClass = {
    name: CharacterClassesNames.Wizard,
    shouldPrepareSpells: true,
    shouldUseCharges: true,
    canUseSpells: true,
    levelsConfigs: wizardLevelsConfig
};