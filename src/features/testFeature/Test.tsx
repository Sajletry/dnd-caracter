import * as React from 'react';
import { ITestProps } from "./interface";

export class Test extends React.Component<ITestProps> {
    constructor( props: ITestProps ) {
        super( props );
        this.onClickEvent = this.onClickEvent.bind( this );
    }

    public onClickEvent(): void {
        this.props.testAction( true );
    }

    public render(): React.ReactNode {
        return (
            <div onClick={this.onClickEvent}>
                hello
            </div>
        )
    }
}
