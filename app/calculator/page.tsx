'use client';

import React, { MouseEventHandler, SetStateAction } from 'react';
import css from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Calculator() {
  const [results, SETresults] = React.useState('0');
  const [operand, SEToperand] = React.useState('');

  const router = useRouter();

  const handleCalcBtnClick = function (e: React.MouseEvent) {
    const innerHtml = (e.target as any).firstChild.data;

    switch (innerHtml) {
      case 'AC': {
        SETresults('0');
        SEToperand('');
        break;
      }

      case 'ENTER': {
        let evalStr = `${operand}${results}`
          .replace('÷', '/')
          .replace('x', '*');

        let result: number = eval(evalStr).toPrecision(9);

        SETresults(result.toString());
        SEToperand('');

        break;
      }

      case '+':
      case 'x':
      case '-':
      case '÷': {
        if (['÷', '+', '-', 'x'].includes(results)) {
          SETresults(innerHtml);
        } else {
          SEToperand(operand + results);
          SETresults(innerHtml);
        }

        console.log(`${operand}${results}`);

        break;
      }

      default: {
        if (results[0] === '0') {
          SETresults(innerHtml);
        } else {
          SETresults(results + innerHtml);
        }

        break;
      }
    }
  };

  return (
    <main className={css.main}>
      <button className={css.homeBtn} onClick={() => router.push('/')}>
        To Home
      </button>
      <section className={css.calculator}>
        <div className={css.results}>{results}</div>

        <button
          onClick={handleCalcBtnClick}
          className={`${css.calcBtn} ${css.doubleWidthBtn}`}>
          AC
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          ÷
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          +
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          7
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          8
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          9
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          -
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          4
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          5
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          6
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          x
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          1
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          2
        </button>
        <button onClick={handleCalcBtnClick} className={css.calcBtn}>
          3
        </button>
        <button
          onClick={handleCalcBtnClick}
          className={`${css.calcBtn} ${css.doubleWidthBtn} ${css.lastRow}`}>
          0
        </button>
        <button
          onClick={handleCalcBtnClick}
          className={`${css.calcBtn} ${css.lastRow}`}>
          .
        </button>
        <button
          onClick={handleCalcBtnClick}
          className={`${css.calcBtn} ${css.doubleHeightBtn} ${css.lastRow}`}>
          ENTER
        </button>
      </section>
    </main>
  );
}
