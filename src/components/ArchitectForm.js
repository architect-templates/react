import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import ArchitectItemsTable from "./ArchitectItemsTable";

const theme = createTheme();

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

    const [state, setState] = useState({ name: '', rating: '', items: [], isLoadingItems: true });

    useEffect(() => {
        async function setItems() {
            const items = await getItems();
            setState({ items: items, isLoadingItems: true });
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

            await setState({ name: '', rating: '', items: await getItems() });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Favorite Movie
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="name"
                                    value={state.name || ''}
                                    label="Name"
                                    type="text"
                                    onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Rating 1-5"
                                    name="rating"
                                    value={state.rating || ''}
                                    type="number"
                                    inputProps={{ min: 1, max: 5 }}
                                    onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        {state.isLoadingItems && <label>Loading items...</label>}
                        {!state.isLoadingItems && state.items.length > 0 ? <ArchitectItemsTable items={state.items} /> : <label>No Entries</label>}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default ArchitectForm;
