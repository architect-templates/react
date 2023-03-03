import ArchitectHeader from './components/ArchitectHeader';
import ArchitectForm from "./components/ArchitectForm";

import './index.css';

const App = () => (
  <div className="container">
    <ArchitectHeader/>
    { <ArchitectForm/> }
  </div>
);

export default App;

