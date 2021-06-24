import React, { FC } from "react";
import styles from "./styles/style.module.scss";
import Hello from "./components/Hello";

const App: FC = () => (
  <div className="container">
    <p className={styles.hello}>こんにちは</p>
    <img className={styles.train} src="./images/C99C6ABD-D350-4267-B138-928415C312C7.jpeg" alt="" />
    <Hello />
  </div>
);

export default App;
