import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { Home, About, Market, Tutorials } from "./pages";

function Layout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="market" element={<Market />} />
          <Route path="tutorial" element={<Tutorials />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;
