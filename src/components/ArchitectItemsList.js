import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import '../index.css';

class ArchitectItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        const { items } = this.props;
        return(
            <Table className="table">
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
            </Table>)
    }
}

export default ArchitectItemsList;
