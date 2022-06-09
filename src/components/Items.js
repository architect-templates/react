import axios from 'axios';
import React from 'react';
import ItemsList from "./ItemsList";

const apiAddress = `${process.env.REACT_APP_API_ADDR}/items`;

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rating: '',
            items: []
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
            const r = await axios.get(apiAddress);
            return r.data;
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

        } catch (err) {
            console.log('Err: ' + err);
        }
    };

    render() {
        console.log(this.state.items)
        console.log(this.state.items.length)
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>
                <div>Rating: <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange} /></div>
                <p></p>
                <input type="submit" value="Submit" />
                <p></p>
                {this.state.items.length > 0 ? <ItemsList items={this.state.items}/> : <label>No Entries</label> }
            </form>
        );
    }
}

export default Items;
