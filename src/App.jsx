import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StockOverviewPage } from "./pages/StockOverviewPage";
import { StockDetailPage } from "./pages/StockDetailPage";

// ch7pu4pr01qt83gcegsgch7pu4pr01qt83gcegt0 Api key

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage />} />
          <Route path="/detail/:symbol" element={<StockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
