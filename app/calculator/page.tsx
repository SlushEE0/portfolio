"use client"

import React from "react"
import css from './page.module.css';

export default function Calculator() {
  const [results, SETresults] = React.useState("0")

  return (
    <main className={css.main}>
      <div className={css.results}>{results}</div>
      <section className={css.keypad}>
        <button className={css.calcBtn}>AC</button>
        <button className={css.calcBtn}>÷</button>
        <button className={css.calcBtn}>+</button>
        <button className={css.calcBtn}>-</button>
        <button className={css.calcBtn}>7</button>
        <button className={css.calcBtn}>8</button>
        <button className={css.calcBtn}>9</button>
        <button className={css.calcBtn}>x</button>
        <button className={css.calcBtn}>4</button>
        <button className={css.calcBtn}>5</button>
        <button className={css.calcBtn}>6</button>
        <button className={css.calcBtn}>ENTER</button>
        <button className={css.calcBtn}>1</button>
        <button className={css.calcBtn}>2</button>
        <button className={css.calcBtn}>3</button>
        <button className={css.calcBtn}>0</button>
        <button className={css.calcBtn}>.</button>
      </section>
    </main>
  );
}
