import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense> */}
    </div>
  );
}

export default App;
