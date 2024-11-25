import { Route, Routes } from "@solidjs/router";
import styles from "./App.module.css";
import About from "./pages/About";
import HomePage from "./pages/Home";

function App() {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/about" component={About} />
      </Routes>
    </div>
  );
}

export default App;
