import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Routes, Route } from "react-router-dom";
import JobsList from "./JobsList/JobsList";
import AppProviders from "providers/AppProviders";

function Root() {
  return (
    <AppProviders>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<JobsList />} />
        </Routes>
      </MainTemplate>
    </AppProviders>
  );
}

export default Root;
