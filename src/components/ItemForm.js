import axios from 'axios';
import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ItemsTable from "./ItemsTable";

const apiAddress = `${process.env.REACT_APP_API_ADDR}/items`;

class ItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getItems = async () => {
    try {
      const r = await axios.get(apiAddress);
      return r.data;
    } catch (err) {
      console.error(err);
    }
  }

  async componentDidMount() {
    this.setState({ items: await this.getItems() });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name: this.state.name,
        rating: this.state.rating,
      };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };

      await fetch(apiAddress, requestOptions);
      this.setState({ name: '', rating: '', items: await this.getItems(), })
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <h2 className='mt-4'>Favorite Movies</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label column="lg" lg={2}>Movie Title</Form.Label>
              <Form.Control type="text"
                placeholder="Movie Title"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="forRating">
            <Form.Label column="lg" lg={2}>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Rating 1-5"
                value={this.state.rating}
                onChange={e => this.setState({ rating: e.target.value })} />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" style={{'backgroundColor': '#225560', 'border':'none'}}
              size="lg" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
        {this.state.items.length > 0 ? <ItemsTable items={this.state.items}/> : <label>No Entries</label> }
      </>
    );
  }
}

export default ItemForm;

