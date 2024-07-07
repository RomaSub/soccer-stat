import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getRoutes from "../routes";
import Header from "./Header";
import NotFound from "./NotFoundPage";
import Teams from "./TeamsPage";
import Competitions from "./CompetitionsPage";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
