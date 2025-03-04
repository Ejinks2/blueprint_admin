import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Events from "../components/Events";
import { events } from "../data/seed";
import { members } from "../data/seed";
import TableDashboard from "../components/TableDashboard";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route path="/dashboard" element={<TableDashboard members={members} />} /> 
      </Routes>
    </div>
  );
}

export default App;
