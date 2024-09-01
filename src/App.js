import "./App.css";
import React, { useState, useEffect } from "react";
import { Tours } from "./Tours";
import { Loading } from "./Loading";
const url = "https://www.course-api.com/react-tours-project";
function App() {
  const [loading, setLooading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

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
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </>
  );
}

export default App;
