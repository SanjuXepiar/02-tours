import "./App.css";
import React, { useState, useEffect } from "react";
import { Tours } from "./Tours";
import { Loading } from "./Loading";
const url = "https://www.course-api.com/react-tours-project";
function App() {
  const [loading, setLooading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLooading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
    } catch (error) {
      setLooading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    <Loading />;
  }
  console.log(tours);
  return (
    <div className="mainContainer">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
