import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';
import axios from 'axios';
import {
  useEffect,
  useState
} from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2ca85e'
    },
  },
});

const initial_form_state = {
  name: '',
  rating: '',
  items: [],
};

export default function App() {
  const [itemFormState, setItemFormState] = useState();

  const apiAddress = `${process.env.REACT_APP_API_ADDR}/items`;

  const handleChange = (event) => {
    setItemFormState({
      ...itemFormState,
      [event.target.name]: event.target.value,
    });
  };

  const getItems = () => {
    axios
      .get(apiAddress)
      .then((result) => {
        setItemFormState({
          ...initial_form_state,
          items: result?.data
        });
      })
      .catch(() => setItemFormState(initial_form_state))
  };

  const handleSubmit = () => {
    axios
      .request({
        url: apiAddress,
        method: 'post',
        data: {
          name: itemFormState.name,
          rating: itemFormState.rating
        },
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((result) => {
        setItemFormState({
          ...initial_form_state,
          items: result?.data
        });
      })
      .catch(() => setItemFormState(initial_form_state))
  };

  const stringToColor = (string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  useEffect(() => {
    if (!itemFormState) {
      getItems();
    }
  }, []);

  return itemFormState && (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        component="form"
        sx={{
          mt: 3,
          mb: 1,
          rowGap: 2,
          '& .MuiTextField-root': {
            width: '35rem'
          },
          preventDefault: true
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box
          component="img"
          sx={{
            width: 350,
            maxHeight: {
              xs: 325,
              md: 250
            },
            maxWidth: {
              xs: 350,
              md: 250
            },
          }}
          alt="architect"
          src="platform-icon.png"
        />
        <TextField
          label="Name"
          name="name"
          value={itemFormState.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Rating"
          name="rating"
          value={itemFormState.rating}
          onChange={handleChange}
          required
        />
        <Button
          sx={{
            padding: theme.spacing(1),
            textAlign: 'center',
            width: '35rem',
          }}
          type="submit"
          variant="contained"
        >
          <Typography variant="body1">
            Submit
          </Typography>
        </Button>
        {itemFormState.items.length > 0 && (
          <Card variant="outlined">
            <List
              sx={{
                width: '35rem',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper'
              }}
            >
              {
                itemFormState.items.map((formItem) => (
                  <ListItem key={`name-grid-${formItem.id}`} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={String(formItem.id)}
                        sx={{
                          bgcolor: stringToColor(formItem.name)
                        }}
                      >
                        {formItem.name ? formItem.name.substring(0, 1).toUpperCase() : ''}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={(
                        <Typography variant="body1" color="text.primary">
                          {formItem.name}
                        </Typography>
                      )}
                      secondary={(
                        <Typography component="span" variant="body2" color="text.primary">
                          {formItem.rating}
                        </Typography>
                      )}
                    />
                  </ListItem>
                ))
              }
            </List>
          </Card>
        )}
      </Grid>
    </ThemeProvider>
  );
}
