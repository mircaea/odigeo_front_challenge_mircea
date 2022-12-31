import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./layout/Layout";

const Results = lazy(() => import("../routes/Results"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/results/:search"
          element={
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "75vh" }}
                  >
                    <div
                      className="spinner-border text-primary-custom"
                      role="status"
                    />
                  </div>
                }
              >
                <Results />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default Routing;
