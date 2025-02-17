import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Events from "../components/Events";
import { events } from "../data/seed";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events events={events} />} />
      </Routes>
    </div>
  );
}

export default App;
