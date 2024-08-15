import Layout from "@components/templates/Layout";
import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
