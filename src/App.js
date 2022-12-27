import ArchitectHeader from './components/ArchitectHeader';
import ArchitectNextSteps from "./components/ArchitectNextSteps";
import ItemForm from "./components/ItemForm";
// import ItemsTable from './components/ItemsTable';
import './index.css';

const App = () => (
  <div className="container">
    <ArchitectHeader/>
    <ArchitectNextSteps/>
    <ItemForm/>
    {/* <ItemsTable/> */}
  </div>
);

export default App;

/*
  You'll notice that we've commented out some lines of code.

  If you're ready to learn more about Architect, follow the instructions
  below to learn about additional features we've added to this application.

  - Dependencies:
    * Follow the steps in the README under "Adding a Dependency"
    * Uncomment lines 3, 4, 11, and 12
*/
