import { allSpells } from '../models/allSpells';
import { wizardClass } from '../models/allClasses';
import { isNull } from "util";


export function mockMecanism() {
    if ( isNull( localStorage.getItem( 'allSpells' ) ) ) {
        localStorage.setItem( 'allSpells', JSON.stringify( allSpells ) );
        localStorage.setItem( 'allClasses', JSON.stringify( [ wizardClass ] ) );
    }
}