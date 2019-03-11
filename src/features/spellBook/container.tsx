import * as React from 'react';
import {IProps} from "./types";
import {SpellCard} from '../spellCard';
import {SelectFilter} from "./filter";
import {isNull} from "util";


interface IState {
    filteredLevel: string | null;
}

export class Container extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.changeLevelFilter = this.changeLevelFilter.bind(this);
        this.state = {filteredLevel: null};
    }

    public componentWillMount(): void {
        this.props.getAllSpells();
    }

    public changeLevelFilter(event: any): void {
        this.setState({filteredLevel: event});
    }


    public render(): React.ReactNode {
        const spellList = this.renderList();
        return (
            <div className='spell-book paper'>
                <h1>SpellBook</h1>
                <div style={{padding: 10}}>
                    <SelectFilter availableItems={['0', '1', '2', '3']} changeCallBack={this.changeLevelFilter}/>
                    {spellList}
                </div>
            </div>
        )
    }

    private renderList(): React.ReactNode[] | any[] {
        let allSpells = [];
        if (isNull(this.state.filteredLevel)) {
            allSpells = this.props.selectAllSpells
        } else {
            allSpells = this.props.selectAllSpells.filter(spell => {
                if(this.state.filteredLevel !== null) {
                  return spell.level === parseInt(this.state.filteredLevel, 10);
                }
                return false;
            });
        }


        return allSpells.map((spell) => {
            if (spell) {
                return (<SpellCard spell={spell} key={spell.name}/>);
            } else {
                return null;
            }
        });
    }
}
