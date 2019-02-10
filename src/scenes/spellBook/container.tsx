import * as React from 'react';
import {IProps} from "./interface";
import {SpellCard} from '../../features/spellCard';

export class SpellBook extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }

    public componentWillMount(): void {
        this.props.getAllSpells();
    }



    public render(): React.ReactNode {
        const spellList = this.renderList();
        return (
                <div className='spell-book paper'>
                    <h1 >SpellBook</h1>
                    <div style={{padding:10}}>
                    {spellList}
                    </div>
                </div>
        )
    }

    private renderList(): React.ReactNode[] | any[] {
        return this.props.selectAllSpells.map((spell) => {
            if (spell) {
                return (<SpellCard spell={spell} key={spell.name}/>);
            }else{
                return null;
            }
        });
    }

}
