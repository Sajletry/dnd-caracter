export interface AppInterface {
    spellBook: Spell[];
    charges: Charges;
    preparedList: Spell[];
    userChanceIncriment: number;
}

export interface Spell {

}

export interface Charges {
    total: Charge[],
    available: Charge[]
}

export interface Charge {
    id: string; //uid/guid,
    level: number;
    isAvailable: boolean;
}

export interface BaseSpell {
    id: string; //uid/guid,
    level: number;
    description: string;
    ingredients: Ingridient[];
    CastingTime: CastingTime;
    Range: CastingRange;
    Components: CastingComponents;
    Duration: SpellDuration;
}

export interface ChanceRolledSpell {
    rolls: [ {
        chanceIncrement: number;
        chanceDice: number;
        dicesAmount: number;
        isSuccessed: boolean;
    } ]
}

export interface DamageRolledSpell {
    rolls: [ {
        damageDice: number;
        damageIncrement: number;
    } ],
    damageIncrement: number;
}

export interface Ingridient {
    id: string; //uid/guid,
    name: string;
    amount: number;
}

export enum SpellDuration {
    action1 = '1action',
}

export enum CastingTime {
    action1 = '1action',
}

export enum CastingRange {
    f60 = '60f',
}

export enum CastingComponents {
    verbal = 'varbal',
}

