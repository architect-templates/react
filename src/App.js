import Container from 'react-bootstrap/Container';
import ItemForm from "./components/ItemForm";

const App = () => (
    <Container className="p-3" >
        <p align="center">
            <a href="//architect.io" target="blank"><img src="https://docs.architect.io/img/logo.svg" width="320" alt="Architect Logo" /></a>
        </p>
        <h1 className="header" align="center">Favorite Horror Movies</h1>
     <ItemForm/>
    </Container>
);

export default App;
