import * as React from 'react';
import { ICharacterClass, IProps } from "./types";
import { isArray } from "util";
import Paper from '@material-ui/core/Paper';
import { TableMatrix } from "../shared/TableMatrix";

export class Container extends React.Component<IProps> {
    constructor( props: IProps ) {
        super( props );

    }

    public componentWillMount(): void {
        this.props.getAllClasses();
    }

    public renderClassesDescription(): any[] {
        const characterClasses: any[] = [];
        const classes = this.props.selectAllClasses;
        if ( isArray( classes ) ) {
            classes.forEach( ( charClass: ICharacterClass ): void => {
                characterClasses.push( <Paper style={{ padding: 5 }} key={charClass.name}>
                    <span style={{ fontWeight: 'bold' }}>Class name: {charClass.name}</span><br/>
                    {charClass.canUseSpells ?
                        <span>This class can use spells<br/></span> : null}
                    {charClass.shouldUseCharges ?
                        <span>This class should use charges for spells<br/></span> : null}
                    {charClass.shouldPrepareSpells ?
                        <span>This class should prepare spells<br/></span> : null}
                    <br/>
                    {this.getLevelTabel( charClass )}
                </Paper> );
            } );
        }
        return characterClasses;
    }


    public render(): React.ReactNode {
        const classes = this.renderClassesDescription();
        return (
            <div className='spell-book paper'>
                Characters Classes
                <br/>
                {classes}

            </div>
        )
    }

    private getLevelTabel( charClass: ICharacterClass ): any {
        const tableMatrix = [['level','masteryScore','encaunter', '1', '2', '3', '4', '5', '6', '7', '8', '9'  ]];
        if ( isArray( charClass.levelsConfigs ) ) {
            charClass.levelsConfigs.forEach( levelConfig => {
                tableMatrix.push( [
                    levelConfig.level,
                    levelConfig.masteryScore,
                    levelConfig.spellsCells[ 0 ],
                    levelConfig.spellsCells[ 1 ],
                    levelConfig.spellsCells[ 2 ],
                    levelConfig.spellsCells[ 3 ],
                    levelConfig.spellsCells[ 4 ],
                    levelConfig.spellsCells[ 5 ],
                    levelConfig.spellsCells[ 6 ],
                    levelConfig.spellsCells[ 7 ],
                    levelConfig.spellsCells[ 8 ],
                    levelConfig.spellsCells[ 9 ]
                ] );
            } )
        }
        return ( <TableMatrix matrix={tableMatrix}/> );
    }


}
