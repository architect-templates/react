import ArchitectHeader from './components/ArchitectHeader';
import ArchitectItems from "./components/ArchitectItems";

import './index.css';

const App = () => (
  <div className="container">
    <ArchitectHeader/>
    { <ArchitectItems/> }
  </div>
);

export default App;

