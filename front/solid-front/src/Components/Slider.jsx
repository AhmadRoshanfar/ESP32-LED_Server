const colors = {
  red: "focus:ring-red-500 cursor-pointer accent-red-600 ",
  green: "focus:ring-green-500 accent-green-600 ",
  blue: "focus:ring-blue-500  accent-blue-600 ",
};
function Slider({ name, color, colorValue, setColorValue }) {
  const handleSliderChange = (event) => {
    setColorValue(event.target.value);
  };

  let colorClass = colors[color];
  return (
    <div className="flex flex-row space-x-5 items-center">
      <p className="w-10">{name}</p>
      <p className="bg-slate-600 w-20 text-center"> {colorValue}</p>
      <input
        type="range"
        min="0"
        max="255"
        value={colorValue}
        onInput={handleSliderChange}
        className={`w-64 h-2 focus:outline-none focus:ring-1 ${colorClass}`}
      />
    </div>
  );
}

export default Slider;
