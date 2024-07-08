import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getRoutes from "../routes";
import Header from "./Header";
import NotFound from "./NotFoundPage";
import Teams from "./TeamsPage";
import Competitions from "./CompetitionsPage";
import CompetitionCalendarPage from "./CompetitionCalendarPage";
import TeamCalendarPage from "./TeamCalendarPage";

const App = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <Router>
          <Header />
          <Routes>
            <Route path={getRoutes.teamsPagePath()} element={<Teams />} />
            <Route
              path={getRoutes.competitionsPagePath()}
              element={<Competitions />}
            />
            <Route
              path="/competition/:id"
              element={<CompetitionCalendarPage />}
            />
            <Route path="/team/:id" element={<TeamCalendarPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
