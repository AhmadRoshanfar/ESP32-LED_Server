import RgbController from "./Components/RGB_Controller";
import Sidebar from "./Components/Sidebar";
import TemperatureChart from "./Components/TemperatureChart";

function App() {
  return (
    <div className="flex flex-row bg-slate-800">
      <div className="bg-sliderBg text-bodyText p-4 rounded w-1/5 flex-none font-serif">
        <Sidebar />
      </div>
      <div className="bg-bg text-headerText p-4 rounded w-4/5 min-h-dvh">
        <h1 className="text-center font-bold text-3xl"> IoT Dashboard </h1>
        <RgbController />
        <TemperatureChart />
      </div>
    </div>
  );
}
export default App;
