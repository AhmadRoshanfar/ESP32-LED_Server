import { createSignal } from "solid-js";
import Slider from "./Slider";

function RgbController() {
  const [red, setRed] = createSignal(36);
  const [green, setGreen] = createSignal(210);
  const [blue, setBlue] = createSignal(183);

  function createColor(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="flex flex-row space-x-8 mt-10  w-full items-center justify-center ">
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
    </div>
  );
}

export default RgbController;
