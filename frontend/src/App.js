import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Auth } from "./Components/Auth/Auth";

const App = () => {

  return (
    <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" exact component={ Home } />
            <Route path="/auth" exact component={ Auth } />
          </Routes>
        </Container>
    </BrowserRouter>

  )
}

export default App;