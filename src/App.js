import Container from 'react-bootstrap/Container';
import ItemForm from "./components/ItemForm";
import ArchitectNextSteps from "./components/ArchitectNextSteps";
import './index.css';
import ArchitectHeader from './components/ArchitectHeader';

const App = () => (
    <Container className="mt-4 p-3">
        <ArchitectHeader/>

        <h1 className="header" align="center">
            Favorite Movies
        </h1>

        <ArchitectNextSteps/>
        <ItemForm/>
    </Container>
);

export default App;

