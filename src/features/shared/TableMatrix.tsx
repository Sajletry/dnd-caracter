import * as React from 'react';
import { isArray } from "util";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class TableMatrix extends React.Component<any> {
    constructor( props: any ) {
        super( props );

    }

    public render(): React.ReactNode {
        return (
            <Paper style={{ padding: 10 }}>
                <Table>
                    <TableHead>
                        {this.tableRows( [ this.props.matrix.unshift() ], true )}
                    </TableHead>
                    <TableBody>
                        {this.tableRows( this.props.matrix )}
                    </TableBody>
                </Table>
            </Paper>
        )
    }

    private tableRows( matrix: any[], isThead: boolean = false ): React.ReactNode {
        return matrix.map( ( row: [], rowIndex: number ): React.ReactNode => {
            if ( isArray( row ) ) {
                return ( <TableRow key={rowIndex}>
                    {row.map( ( item: string, cellIndex: number ): React.ReactNode => {
                        return ( <TableCell style={{padding:5}} key={cellIndex}>{item}</TableCell> )
                    } )}
                </TableRow> );
            }
            return null;
        } );
    }

}
