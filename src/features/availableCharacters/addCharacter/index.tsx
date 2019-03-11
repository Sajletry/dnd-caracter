import * as React from "react";

interface IProps {
    show:boolean
}

interface IState {
    isOpen:boolean
}

export class AddCharacter extends React.Component<IProps,IState> {

    constructor( props: IProps ) {
        super( props );
        this.state = {
            isOpen: false,
        };
        this.openForm = this.openForm.bind( this );
    }

    public render(): React.ReactNode {
        if ( this.state.isOpen ) {
            return (
                <div>Add new Character</div>
            );
        } else {
            return (<button onClick={this.openForm}>Add new character</button>)
        }
    }
    private openForm(): void {
        this.setState( { isOpen: true } );
    }


}