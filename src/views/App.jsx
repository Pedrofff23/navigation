import Content from "../components/Content";
import Menu from "../components/Menu";

import "./App.css";

import { BrowserRouter } from "react-router-dom"; // essa importação mudou

const App = (props) => (
  <div className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </div>
);

export default App;
