export interface IState {
    charactersClasses: ICharacterClass[]
}

export interface IActions {
    getAllClasses: any;
}

export interface ISelectors {
    selectAllClasses: any;
}

export interface IProps extends IActions, ISelectors {
}

export interface ICharacterClass {
    name: string;
    canUseSpells: boolean;
    shouldPrepareSpells: boolean;
    shouldUseCharges: boolean;
    levelsConfigs:ILevelStats
}

export interface ILevelStats {
    [index: number]:{
        masteryScore: number;
        spellsCells:number[];
        level: number;
    }
}