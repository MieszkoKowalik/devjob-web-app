import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppProviders from "providers/AppProviders";
import Loader from "components/molecules/Loader/Loader";
const JobsList = lazy(() => import("./JobsList/JobsList"));
const Job = lazy(() => import("./Job/Job"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

function Root() {
  return (
    <AppProviders>
      <MainTemplate>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<JobsList />} />
            <Route path="/job/:id" element={<Job />} />
          </Routes>
        </Suspense>
      </MainTemplate>
    </AppProviders>
  );
}

export default Root;
