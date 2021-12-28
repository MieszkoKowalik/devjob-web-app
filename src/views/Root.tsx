import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Routes, Route } from "react-router-dom";
import JobsList from "./JobsList/JobsList";
import Job from "./Job/Job";
import NotFound from "./NotFound/NotFound";
import AppProviders from "providers/AppProviders";

function Root() {
  return (
    <AppProviders>
      <MainTemplate>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<JobsList />} />
          <Route path="/job/:id" element={<Job />} />
        </Routes>
      </MainTemplate>
    </AppProviders>
  );
}

export default Root;
