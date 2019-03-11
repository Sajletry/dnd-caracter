import * as React from 'react';
import {IProps } from "./types";
import { AddCharacter } from "./addCharacter";

export class Container extends React.Component<IProps> {
    constructor( props: IProps ) {
        super( props );

    }

    public componentWillMount(): void {
        this.props.getAllCharacters();
    }



    public render(): React.ReactNode {

        return (
            <div className='spell-book paper'>
                Availble Characters
                <AddCharacter show={true}/>
            </div>
        )
    }




}
