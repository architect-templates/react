import axios from 'axios';
import React from 'react';

const apiAddress = `${process.env.REACT_APP_API_ADDR}/items`;

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rating: '',
            items: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }


    getItems = async () => {
        try {
            const r = await axios.get(apiAddress)
            return r.data.map((item) => (
                `id: ${item.id},name: ${item.name}, rating: ${item.rating}`
            )).join('\n')

        } catch (error) {
            console.error(error)
        }

    }

    async componentDidMount() {
        this.setState({ items: await this.getItems() });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = {
                name: e.target[0].value,
                rating: e.target[1].value
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            }

            const res = await fetch(apiAddress, requestOptions);
            const r = await res.json();

            this.setState({ name: '', rating: '', items: await this.getItems() })
            console.log(`r.name = ${r.name}, r.rating: ${r.rating} `)

        } catch (err) {
            console.log('Err: ' + err);
        }
    };

    render() {
        const items = [
            { 'id': 1, 'name': 'Mandy', 'rating': 1},
            { 'id': 3, 'name': 'Lizzie', 'rating': 3},
            { 'id': 2, 'name': 'Percy', 'rating': 2}
        ]
        return (

            <label>
                <table className={'table'} size='width:100%'>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                {items.map(function(i, index){

                    return <><tr></tr><td>{i.name}</td><td>{i.rating}</td><tr></tr></>;

                })}

                </table>
            </label>

        );
    }
}

export default ItemsList;
