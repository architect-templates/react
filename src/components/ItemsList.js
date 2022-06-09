import React from 'react';

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {

        const { items } = this.props;
        return (

            <label>
                <table className={'table'} size='width:100%'>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                    {items.map(function(i, index){
                        return <>
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.rating}</td><
                            /tr></>;
                    })}
                </table>
            </label>

        );
    }
}

export default ItemsList;
