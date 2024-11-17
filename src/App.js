import "./App.css";

// import SignOfTheCross from "./components/Prayers/SignOfTheCross";
import OurFather from "./components/Prayers/OurFather";
import HailMary from "./components/Prayers/HailMary";
import ActOfContrition from "./components/Prayers/ActOfContrition";
import ApostlesCreed from "./components/Prayers/ApostlesCreed";
import GloryBe from "./components/Prayers/GloryBe";
import SaintMichael from "./components/Prayers/SaintMichael";
import OMyJesus from "./components/Prayers/OMyJesus";

function App() {
  return (
    <div className="App">
      <ActOfContrition />
      {/* <SignOfTheCross /> */}
      <ApostlesCreed />
      <OurFather />
      <HailMary />
      <GloryBe />
      <SaintMichael />
      <OMyJesus />
    </div>
  );
}

export default App;
