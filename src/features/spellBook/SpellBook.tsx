import * as React from 'react';
import { ITestProps } from "./interface";
import Paper from '@material-ui/core/Paper';

export class SpellBook extends React.Component<ITestProps> {
    constructor( props: ITestProps ) {
        super( props );
        this.onClickEvent = this.onClickEvent.bind( this );
    }

    public onClickEvent(): void {
        this.props.testAction( true );
    }

    public render(): React.ReactNode {
        return (
            <Paper>
                <div className='spell-book paper'>
                    <h1 style={{ padding: 10 }}>SpellBook</h1>
                </div>
            </Paper>
        )
    }
}
