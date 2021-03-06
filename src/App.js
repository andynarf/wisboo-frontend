import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Upload from "./pages/Upload";
import VideoPage from "./pages/VideoPage";
import Videos from "./pages/Videos";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/video/:id">
            <VideoPage />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/">
            <Videos />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
