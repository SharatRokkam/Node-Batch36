import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/quotes")
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {/* Cross Origin Resource locator  */}
      <h1>Motivational Quotes</h1>

      <h2>Quotes : {quotes.length}</h2>

      {quotes.map((quote, index) => (
        <div key={quote.id}>
          <h2>{quote.author}</h2>
          <p>{quote.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
