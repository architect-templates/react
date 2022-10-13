import ArchitectNextSteps from "./components/ArchitectNextSteps";
import ArchitectHeader from './components/ArchitectHeader';
import './index.css';
// import ItemForm from "./components/ItemForm";

const App = () => (
    <div className="container">
        <ArchitectHeader/>
        {/* <h1>Uncomment me to see hot reloading in action!</h1> */}
        <ArchitectNextSteps/>
        {/* <ItemForm/> */}
    </div>
);

export default App;


/*
    You'll notice that we've commented out some lines of code.

    If you're ready to learn more about architect, follow the below links for
    different concepts.

    - Dependencies:
        * Follow the steps in the README under "Adding a Dependency"
        * Uncomment lines 4 and 11
*/