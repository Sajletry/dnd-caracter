import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {ISpell} from "../../models/allSpells";

interface IProps {
    spell: ISpell
}

export class SpellCard extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }

    public render(): React.ReactNode {
        const {name, school, level, castDuration, distance, components, spellDuration, classes, description} = this.props.spell;
        return (
            <Paper style={{padding:20,marginBottom:20}}>
                <div className='spell-card paper'>
                    <h3>{name}</h3>
                    <div>
                        <strong>school</strong><span>{school}</span>
                    </div>
                    <div>
                        <strong>level</strong><span>{level}</span>
                    </div>
                    <div>
                        <strong>castDuration</strong><span>{castDuration}</span>
                    </div>
                    <div>
                        <strong>distance</strong><span>{distance}</span>
                    </div>
                    <div>
                        <strong>components</strong><span>{components}</span>
                    </div>
                    <div>
                        <strong>spellDuration</strong><span>{spellDuration}</span>
                    </div>
                    <div>
                        <strong>classes</strong><span>{classes}</span>
                    </div>
                    <div>
                        <strong>description</strong><span>{description}</span>
                    </div>
                </div>
            </Paper>
        )
    }
}
