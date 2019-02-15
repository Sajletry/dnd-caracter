import * as React from 'react';
import { ICharacterClass, IProps } from "./types";
import { isArray } from "util";
import Paper from '@material-ui/core/Paper';

export class Container extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }

    public componentWillMount(): void {
        this.props.getAllClasses();
    }

    public renderClassesDescription():any[]{
        const classBlcok:any[] = [];
        const classes = this.props.selectAllClasses;
        if (isArray(classes)){
            classes.forEach( (charClass:ICharacterClass):void=>{
                classBlcok.push(<Paper style={{padding:5}} key={charClass.name}>
                    <span style={{fontWeight:'bold'}}>Class name: {charClass.name}</span><br/>
                    This class can use spells: {charClass.canUseSpells?'yes':'no'}<br/>
                    This class should use charges for spells: {charClass.shouldUseCharges?'yes':'no'}<br/>
                    This class should prepare spells: {charClass.shouldPrepareSpells?'yes':'no'}<br/>
                </Paper>);
            });
        }
        return classBlcok;
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



}
