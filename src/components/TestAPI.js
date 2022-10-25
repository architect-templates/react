import axios from 'axios';
import React, { Component } from 'react';

const apiAddress = `${process.env.REACT_APP_SERVICE_API_ADDR}/`;

class TestAPI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        }
    }

    getQuote = async () => {
        try {
            console.log(apiAddress);
            const r = await axios.get(apiAddress);
            return r.data;
        } catch (error) {
            console.error(error)
        }
    }

    async componentDidMount() {
        this.setState({ quote: await this.getQuote() });
    }

    render() {
        return (
            <>
                {this.state.quote !== '' ? <b>{this.state.quote.quote}</b> : <label>Error with API</label>}
            </>
        )
    }
}

export default TestAPI;
