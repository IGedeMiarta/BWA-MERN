import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'assets/scss/style.scss';
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
