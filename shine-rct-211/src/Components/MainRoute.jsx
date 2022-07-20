import React from 'react';
import { Route, Routes } from "react-router-dom";
import { JobDetailsPage } from '../Pages/JobDetailsPage';

export const MainRoute = () => {
  return (
      <Routes>
          <Route path="/" element={<JobDetailsPage />} />
    </Routes>
  )
}
