import axios from "axios";
import { createEffect, createSignal } from "solid-js";

const [cores, setCores] = createSignal("");
const [model, setModel] = createSignal("");
const [version, setVersion] = createSignal("");

const deviceMap = new Map([
  [1, "ESP32"],
  [2, "ESP32-S2"],
  [9, "ESP32-S3"],
  [15, "ESP32-C3"],
  [12, "ESP32-C2"],
  [13, "ESP32-C6"],
]);

function Sidebar() {
  createEffect(() => {
    // Send the GET request using Axios after the page loads
    axios
      .get("/api/v1/system/info")
      .then((response) => {
        console.log("Data received:", response.data);
        setCores(response.data.cores);
        setModel(deviceMap.get(response.data.model));
        setVersion(response.data.version);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  return (
    <div class="flex flex-col font-sans">
      <h2 class="text-center mt-3 font-bold text-2xl"> Device </h2>
      <p class="mt-3 text-chartBg"> Chip: {model()} </p>
      <p class="mt-3 text-chartBg"> Number of Cores: {cores()} </p>
      <p class="mt-3 text-chartBg"> IDF Version:{version()} </p>

      <h2 class="text-center mt-10 font-bold text-2xl">Description</h2>
      <p class="mt-3 text-chartBg">
        This sample app enables real-time interaction between an ESP32 and a web
        app, allowing seamless data exchange for control and monitoring."
      </p>
      <h2 class="text-center mt-10 font-bold text-2xl">Technologies</h2>
      <p class="mt-3 text-chartBg ">Hardware: ESP32 WROOM</p>
      <p class="text-chartBg">Frontend: Solid.js</p>

      <h2 class=" mt-10 font-bold text-center text-2xl">Soruce Code</h2>
      <p class="text-chartBg">GITHUB LOGO: AhmadRoshanfar/</p>
      <h2 class="mt-10 font-bold text-center text-2xl">Contact</h2>
      <p class="mt-3 text-chartBg">AhmadRoshanfar@gmail.com/</p>
      <p class="mt-5 text-center">version: 1.0 - 2024</p>
    </div>
  );
}

export default Sidebar;
