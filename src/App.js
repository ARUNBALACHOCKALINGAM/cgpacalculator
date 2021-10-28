import "./App.css";


//COMPONENTS

import Header from "./components/Header";
import CalculateGpa from "./components/CalculateGpa";
import CalculateCgpa from "./components/CalculateCgpa";
import { Route, Switch } from "react-router";
import {
  BrowserRouter
} from 'react-router-dom';
import Retain from "./components/Retain";


function App() {
 return (
   <div className="App">
  <BrowserRouter>
     <Header />
     <Switch>
      <Route path="/" exact>
           <CalculateGpa />
        </Route>
        <Route path="/gpa">
           <CalculateGpa />
        </Route>
        <Route path="/cgpa">
           <CalculateCgpa />
        </Route>
        <Route path="/retain">
           <Retain/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
