import axios from 'axios';
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const apiAddress = `${process.env.REACT_APP_API_ADDR}/items`;

const defaultValues = {
  name: "",
  rating: 0,
  items: []
};

const getItems = async () => {
    try {
      const r = await axios.get(apiAddress);
      return r.data;
    } catch (err) {
      console.error(err);
    }
}

const Form = () => {

    const [name, setName] = useState(defaultValues.name);
    const [rating, setRating] = useState(defaultValues.rating);
    const [items, setItems] = useState(defaultValues.items);

    console.log(`name: ${name}, rating: ${rating}, items: ${items}`);

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(`Inside handleSubmit - name: ${name}, rating: ${rating}, items: ${items}`)

        try {
            const body = {
                name: name,
                rating: rating,
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        };

       await fetch(apiAddress, requestOptions);

       setName('');
       setRating('');
       setItems(getItems());
       console.log(`Inside handleSubmit2 - name: ${name}, rating: ${rating}, items: ${items}`)
     } catch (err) {
       console.error(err);
     }
   };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="left" justify="left" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="rating-input"
            name="rating"
            label="Rating 1-5"
            type="number"
            onChange={e => setRating(e.target.value)}
          />
        </Grid>
         <div className="d-grid">
        <Button variant="primary" style={{'backgroundColor': '#225560', 'border':'none'}}
            size="lg" type="submit" onClick={handleSubmit}>
                Submit
        </Button>
        </div>
      </Grid>
    </form>
  );
};
export default Form;