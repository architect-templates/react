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
  You'll notice that we've commented out some lines of code. Follow along with the
  "Registering Dependencies" section in the README to learn more about enabling
  some of the additional features we've included in this application.
*/
