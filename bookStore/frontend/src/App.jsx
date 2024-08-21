import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => console.log(response));
  }, []);

  return (
    <>
      <h1>Lets make cross origin connection</h1>
    </>
  );
};

export default App;
