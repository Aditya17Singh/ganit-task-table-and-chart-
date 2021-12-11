import React, { useEffect, useState } from "react";
import Chart from "./Chart";


function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://api.frankfurter.app/2015-01-01..2017-01-31")
      .then((res) => res.json())
      .then((data) => {
        let valuesArr = [];
        if (data) {
          for (let key in data.rates) {
            valuesArr.push({
              rates: {
                EUR: 1,
                USD: data.rates[key].USD,
                JPY: data.rates[key].JPY,
                GBP: data.rates[key].GBP,
                CAD: data.rates[key].CAD,
                NZD: data.rates[key].NZD,
                INR: data.rates[key].INR,
              },
              key,
            });
          }
          return setValue(valuesArr);
        }
      });
  }, []);
  return (
    <>
      <h1>Ganit Task(Table and Chart)</h1>
      <div>
        <table className="container">
          <tr>
            <th>Start Date Of Week</th>
            <th>EUR</th>
            <th>USD</th>
            <th>JPY</th>
            <th>GBP</th>
            <th>CAD</th>
            <th>NZD</th>
            <th>INR</th>
          </tr>
          {value.length ? (
            value.map((data) => {
              return (
                <tr>
                  <td>{data.key}</td>
                  <td>{data.rates.EUR}</td>
                  <td>{data.rates.USD}</td>
                  <td>{data.rates.JPY}</td>
                  <td>{data.rates.GBP}</td>
                  <td>{data.rates.CAD}</td>
                  <td>{data.rates.NZD}</td>
                  <td>{data.rates.INR}</td>
                </tr>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </table>
      </div>
      <Chart chartData={value} />
    </>
  );
}

export default App;
