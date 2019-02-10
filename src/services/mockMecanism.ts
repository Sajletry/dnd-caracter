import {allSpells} from '../models/allSpells'
import {isNull} from "util";


export function mockMecanism() {
    if (isNull(localStorage.getItem('allSpells'))) {
        localStorage.setItem('allSpells', JSON.stringify(allSpells));
    }
}