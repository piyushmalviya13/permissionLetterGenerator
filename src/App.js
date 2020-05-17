import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "./App.css";
import NewEvent from "./components/newEvents.js";
import Appbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box mx="auto" p={5}>
          <Appbar />
          <NewEvent />
        </Box>
      </Container>
    </div>
  );
}

export default App;
