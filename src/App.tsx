import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./home";

const AppLayout = () => {
  return (
    <>
      {/* Adding top padding if using a fixed navbar */}
      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router >
      <Routes>
        {/* New Routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} /> {/* Default Home Page */}
          </Route>
        </Route> {/* This closing tag closes the outer AppLayout route */}
      </Routes>
    </Router>
  );
}
