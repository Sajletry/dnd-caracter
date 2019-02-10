import * as React from 'react';
import {IProps} from "./interface";

export class Container extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }


    public render(): React.ReactNode {
        return (
                <div className='spell-book paper'>
                    Spell book main page
                </div>
        )
    }



}
