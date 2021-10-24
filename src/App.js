import "./App.css";

//COMPONENTS

import Header from "./components/Header";
import CalculateGpa from "./components/CalculateGpa";
import CalculateCgpa from "./components/CalculateCgpa";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="heading">VIT CGPA CALCULATOR</h1>
      <CalculateCgpa />
    </div>
  );
}

export default App;
