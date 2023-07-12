import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<div>Movies</div>}>
            <Route path="cast" element={<div>Movie Details/Cast</div>} />
            <Route path="reviews" element={<div>Movie Details/Review</div>} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;