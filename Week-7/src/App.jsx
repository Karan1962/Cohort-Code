import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// imported components through React.lazy
const Dashboard = React.lazy(() => import("./components/Dashboard.jsx"));
const Landing = React.lazy(() => import("./components/Landing.jsx"));
const PageNotFound = React.lazy(() => import("./components/PageNotFound.jsx"));

// also can import through normal way to test lazy loading in network tab
// import Dashboard from "./components/Dashboard";
// import Landing from "./components/Landing";
// import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* We should use Suspense whenever we want to implement React.lazy */}
          <Route
            path="/"
            element={
              //   <Suspense fallback={"loading...."}>
              <Landing />
              //   </Suspense>
            }
          />
          {/* We should use Suspense whenever we want to implement React.lazy */}
          <Route
            path="/dashboard"
            element={
              //   <Suspense fallback={"loading..."}>
              <Dashboard />
              //   </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div>go to</div>
      <button onClick={() => navigate("/")}>landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </>
  );
}
