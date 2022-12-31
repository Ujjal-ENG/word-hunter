import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Container from "@mui/material/Container";

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
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: "#282c34",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <h1>Dictornary</h1>
      </Container>
    </div>
  );
}

export default App;
