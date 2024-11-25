<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>LED State: {{ state }}</h2>
    <button class="led-button-on button" v-on:click="TurnOnLED">Turn-on LED</button>
    <button class="led-button-off button" v-on:click="TurnOffLED">Turn-off LED</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LED",
  data() {
    return {
      message: null,
      tempValue: 0,
      ledState: 0,
      state: "OFF",
    };
  },
  mounted() {
    axios.get("/api/v1/system/info").then((data) => {
      this.message = data.data.message;
    });
  },
  methods: {
    TurnOnLED() {
      this.ledState = 1;
      this.state = "ON";
      axios
        .post("/api/v1/light/brightness", { ledState: this.ledState })
        .then((data) => {
          console.log(data);
        });
    },
    TurnOffLED() {
      this.ledState = 0;
      this.state = "OFF";
      axios
        .post("/api/v1/light/brightness", { ledState: this.ledState })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<style>

.button{
 border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1em;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.led-button-on {
  background-color: #2f9133; /* Green */
    transition-duration: 0.4s;

}
.led-button-off {
  background-color: #d83c3c; /* Red */
}

.led-button-on:hover {
  background-color: #57ad71; /* Green */
  color: white;
}
.led-button-off:hover {
  background-color: #c95179; /* Red */
  color: white;
}
</style>
