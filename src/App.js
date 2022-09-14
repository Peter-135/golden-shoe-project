import { Routes, Route } from "react-router-dom";
import AndDigital from "./components/AndDigital/AndDigital";
import AgileBenefits from "./components/AgileBenefits/AgileBenefits.js";
import Navbar from "./components/Navbar";
import NextSteps from "./components/NextSteps/NextSteps";
import ChallengesAndSolutions from "./components/ChallengesAndSolutions/ChallengesAndSolutions";
import PrototypeDesign from "./components/PrototypeDesign/PrototypeDesign";
import Finish from "./components/Finish/Finish";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AndDigital />} />
        <Route path="/agile-benefits" element={<AgileBenefits />} />
        <Route path="next-steps" element={<NextSteps />} />
        <Route
          path="challenges-and-solutions"
          element={<ChallengesAndSolutions />}
        />
        <Route path="prototype-design" element={<PrototypeDesign />} />
        <Route path="finish" element={<Finish />} />
      </Routes>
    </>
  );
}

export default App;
