import React from 'react';
import { Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ArchitectItemsTable = (props) => {

    const { items } = props;

    return (
        <TableContainer component={Paper}>
        <Table style={{ width: 1000, margin: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(function(i, index){
              return <>
                <TableRow key={i.id}>
                  <TableCell>{i.name}</TableCell>
                  <TableCell>{i.rating}</TableCell>
                </TableRow></>;
            })}
            </TableBody>
        </Table>
        </TableContainer>)
}
export default ArchitectItemsTable;
