import * as React from 'react';
import {IProps} from "./types";
import { Link } from 'react-router-dom';

export class Container extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }


    public render(): React.ReactNode {
        return (
                <div className='spell-book paper'>
                    <Link to="/allSpells">All spells list</Link><br/>
                    <Link to="/characterClasses">List of characters classes</Link>
                </div>
        )
    }



}
