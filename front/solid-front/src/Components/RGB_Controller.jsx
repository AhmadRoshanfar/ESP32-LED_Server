import axios from "axios";
import { createSignal } from "solid-js";
import Slider from "./Slider";

function RgbController() {
  const [red, setRed] = createSignal(120);
  const [green, setGreen] = createSignal(120);
  const [blue, setBlue] = createSignal(120);

  function createColor(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  const handlePostRequest = async () => {
    try {
      console.log(red());
      const response = await axios.post("/api/v1/light/brightness", {
        red: Number(red()),
        green: Number(green()),
        blue: Number(blue()),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row space-x-8 mt-5  w-full items-center justify-center ">
      <div className="space-y-4 mr-10">
        <Slider
          name="Red"
          color="red"
          colorValue={red}
          setColorValue={setRed}
        />
        <Slider
          name="Green"
          color="green"
          colorValue={green}
          setColorValue={setGreen}
        />
        <Slider
          name="Blue"
          color="blue"
          colorValue={blue}
          setColorValue={setBlue}
        />
      </div>
      <div className="w-1/6 h-28 mt-5 flex flex-col items-center justify-center">
        <div
          className="w-1/2 h-full"
          style={{
            "background-color": createColor(red(), green(), blue()),
          }}
        ></div>
        <p> {createColor(red(), green(), blue())}</p>
      </div>
      <button
        className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
        onClick={handlePostRequest}
      >
        Send
      </button>
    </div>
  );
}

export default RgbController;
