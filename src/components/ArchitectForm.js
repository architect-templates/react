import axios from 'axios';
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ArchitectItemsList from "./ArchitectItemsList";

import '../index.css';

const apiAddress = `${process.env.REACT_APP_API_ADDR}/items`;

const getItems = async () => {
    try {
      const r = await axios.get(apiAddress);
      return r.data;
    } catch (err) {
      console.error(err);
    }
  }

const ArchitectForm = () => {

    const [state, setState] = useState({name: '', rating: '', items:[]});

    useEffect(() => {
         async function setItems() {
             const items = await getItems();
             setState({items: items});
         }
         setItems();
        }, [])

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const body = {
                name: state.name,
                rating: state.rating,
        };

       await axios.post(`${apiAddress}`, body);

       await setState({name: '', rating: '', items: await getItems()});

     } catch (err) {
       console.error(err);
     }
   };

  return (
  <>
  <h2 className='mt-4'>Favorite Movies</h2>
    <form onSubmit={handleSubmit} className="form">
      <Grid container direction="column">
        <Grid item className="mb-3">
          <TextField
            required
            id="outlined-basic"
            name="name"
            value= {state.name}
            label="Name"
            type="text"
            onChange={e => setState({...state, [e.target.name]: e.target.value})}
          />
        </Grid>
        <Grid item className="mb-3">
          <TextField
            required
            id="outlined-basic"
            label="Rating 1-5"
            name="rating"
            value={state.rating}
            type="number"
            onChange={e => setState({...state, [e.target.name]: e.target.value})}
          />
        </Grid>
         <div className="d-grid">
        <Button className="button" type="submit" onClick={handleSubmit}>
                Submit
        </Button>
        <br></br>
        {state.items.length > 0 ? <ArchitectItemsList items={state.items}/> : <label>No Entries</label> }
        </div>
      </Grid>
    </form>
    </>
  );
};
export default ArchitectForm;