import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return <>
          <div class="container">
          <div class="row">
        <div class="col-sm">
        One of three columns
        </div>
          <div class="col-sm">
          <img src="..." class="card-img-top" alt="..."> </img>
          One of three columns
          </div>
        <div class="col-sm">
        One of three columns
        </div>
          </div>
          </div>
           
  </>

}
    

export default App;
