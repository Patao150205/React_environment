import React from "react";
import styles from "./styles/style.module.scss";

const App = () => {
  console.log("patao");
  return (
    <div className="container">
      <p className={styles.hello}>Hello World</p>
    </div>
  );
};

export default App;
