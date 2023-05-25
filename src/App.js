import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HiranMain from "./Hirangana/HiranMain";
import Prepare from "./Prepare";

function App() {
  return (
    <Box minH="100vh" background={"#1C1C1C "}>
      <Routes>
        <Route path="practice2/" element={<Prepare />} />
        <Route path="practice2/hirangana" element={<HiranMain />} />
      </Routes>
    </Box>
  );
}

export default App;
