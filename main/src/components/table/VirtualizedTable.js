import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';



const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props}/>,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};


export default function VirtualizedTable({
    rows,
    columns
}) {
    

    const fixedHeaderContent = React.useCallback(() => {
        return (
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        variant="thead"
                        sx={{fontSize:"13px"}}
                        align={column.numeric || false ? 'right' : 'left'}
                        style={{ width: column.width }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        )
    }, [columns]);
    const rowContent = React.useCallback((_index, row) => {
        return (
            <React.Fragment>
                {columns.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        align={column.numeric || false ? 'right' : 'left'}
                    >
                        {row[column.dataKey]}
                    </TableCell>
                ))}
            </React.Fragment>
        );
    }, [columns]);
    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
}