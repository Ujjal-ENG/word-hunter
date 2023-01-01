import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");

  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryAPI();
  }, []);

  return (
    <div className="App">
      <Container
        maxWidth="md"
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
