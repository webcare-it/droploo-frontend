import { Routes, Route } from "react-router";
import { NotFoundPage } from "./utils-pages/notfound";
import { ServerError } from "./utils-pages/server";
import { MaintenancePage } from "./utils-pages/maintenance";
import { HomePage } from "./public/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<MaintenancePage />} />
      <Route path="/signin" element={<MaintenancePage />} />
      <Route path="/forgot-password" element={<MaintenancePage />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
