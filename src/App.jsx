import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import NavHeader from "./components/NavHeader/NavHeader";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import CamperDetailedInfo from "./components/CamperDetailedInfo/CamperDetailedInfo";
import Reviews from "./components/Reviews/Reviews";
import Loader from "./components/Loader/Loader";

import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <NavHeader />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<CamperDetailedInfo />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
