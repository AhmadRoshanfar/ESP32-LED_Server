import { Link } from "@solidjs/router";
import axios from "axios";
import { createSignal, onMount } from "solid-js";
import styles from "./Home.module.css";

function HomePage() {
  const baseURL = "/api/v1/system/info";
  const BrightnessURL = "/api/v1/light/brightness";
  const [message, setMessage] = createSignal("");
  const [ledState, setLedState] = createSignal("");
  const [led, setLed] = createSignal(0);

  onMount(async () => {
    axios.get(baseURL).then((response) => {
      setMessage(response.data.version);
      console.log(response.data);
    });
  });

  const turnOnLED = () => {
    console.log("ON");
    setLed(1);
    axios.post(BrightnessURL, { ledState: led() }).then(() => {
      setLedState("ON");
    });
  };
  const turnOffLED = () => {
    console.log("OFF");
    setLed(0);
    axios.post(BrightnessURL, { ledState: led() }).then(() => {
      setLedState("OFF");
    });
  };

  return (
    <div class={styles.App}>
      <Link href="/about">About</Link>
      <h1> LED Controller Web Server</h1>
      <h1> {message()}</h1>
      <h2> LED State: {ledState()}</h2>
      <button onClick={turnOnLED} class={`${styles.button} ${styles.ledOn}`}>
        Turn On
      </button>
      <button onClick={turnOffLED} class={`${styles.button} ${styles.ledOff}`}>
        Turn OFF
      </button>
    </div>
  );
}

export default HomePage;
