export interface IAppInterface {
    spellBook: IBaseSpell[];
    charges: ICharges;
    preparedList: IBaseSpell[];
    userChanceIncrement: number;
}

export interface ICharges {
    total: ICharge[],
    available: ICharge[]
}

export interface ICharge {
    id: string; // uid/guid,
    level: number;
    isAvailable: boolean;
}

export interface IBaseSpell {
    id: string; // uid/guid,
    damageType: DamageType;
    level: number;
    description: string;
    ingredients: Ingridient[];
    CastingTime: CastingTime;
    Range: CastingRange;
    Components: CastingComponents;
    Duration: SpellDuration;
}

export enum DamageType {
    fire = 'fire',
}

export interface IChanceRolledSpell {
    rolls: [ {
        chanceIncrement: number;
        chanceDice: number;
        dicesAmount: number;
        isSuccessed: boolean;
    } ]
}

export interface IDamageRolledSpell {
    rolls: [ {
        damageDice: number;
        damageIncrement: number;
    } ],
    damageIncrement: number;
}

export interface Ingridient {
    id: string; // uid/guid,
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

