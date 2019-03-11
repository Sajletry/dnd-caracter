import * as React from 'react';


interface ISelectFilterProps {
    availableItems: string[];
    emptyText?: string;
    selected?: string;
    changeCallBack: any;
}


export class SelectFilter extends React.Component<ISelectFilterProps> {
    constructor(props: ISelectFilterProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <select onChange={this.onChange}>
                {this.getOptionsList()}
            </select>
        )
    }


    private onChange(event: any): void {
        this.props.changeCallBack(event.target.value);
    }

    private getOptionsList(): React.ReactNodeArray {
        const optionsArray = [];
        if (this.props.emptyText) {
            optionsArray.push(this.getOption(this.props.emptyText, this.props.selected));
        }
        this.props.availableItems.forEach(item=>{
            optionsArray.push(this.getOption(item, this.props.selected));
        });

        return optionsArray;
    }

    private getOption(text: string, selectedText: string | undefined): React.ReactNode {
        return (<option key={text} selected={text === selectedText}>{text}</option>)
    }


}