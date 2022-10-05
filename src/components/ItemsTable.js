import React from 'react';
import Table from 'react-bootstrap/Table';

class ItemsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        const { items } = this.props;
        return(
            <Table striped bordered>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {items.map(function(i, index){
                    return <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.rating}</td>
                    </tr>;
                })}
                </tbody>
            </Table>)
    }
}

export default ItemsTable;

