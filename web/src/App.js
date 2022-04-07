import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import MainPage from "./MainPage";
import { RequireAuth } from "./hoc/RequireAuth";
import ClientPage from "./AdminComponents/Components/ClientsPage/ClientPage";
import MastersPage from "./AdminComponents/Components/MastersPage/MastersPage";
import TownsPage from "./AdminComponents/Components/TownsPage/TownsPage";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="https://intership-alex.herokuapp.com/"
              element={<MainPage />}
            />
            <Route
              path="https://intership-alex.herokuapp.com/clients"
              element={
                <RequireAuth>
                  <ClientPage />
                </RequireAuth>
              }
            />
            <Route
              path="https://intership-alex.herokuapp.com/masters"
              element={
                <RequireAuth>
                  <MastersPage />
                </RequireAuth>
              }
            />
            <Route
              path="https://intership-alex.herokuapp.com/towns"
              element={
                <RequireAuth>
                  <TownsPage />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
