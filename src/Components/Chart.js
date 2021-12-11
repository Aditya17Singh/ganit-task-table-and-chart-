import React from "react";
import { Line } from "react-chartjs-2";
function Chart(props) {
  function data() {
    let arr1 = props.chartData.map((data) => Object.values(data.rates));
    let arr11 = [];
    let arr22 = [];
    let arr33 = [];
    let arr44 = [];
    let arr55 = [];
    let arr66 = [];
    let arr77 = [];
    arr1.forEach((child) => {
      arr11.push(child[0]);
      arr22.push(child[1]);
      arr33.push(child[2]);
      arr44.push(child[3]);
      arr55.push(child[4]);
      arr66.push(child[5]);
      arr77.push(child[6]);
    });

    return {  arr11, arr22, arr33, arr44, arr55, arr66, arr77 };
  }
  data();
  return (
    <>
      <div className="container bottom">
        {" "}
        <Line
          height={400}
          width={600}
          data={{
            labels: ["2014-12-29", "2017-01-30	"],
            datasets: [
              {
                label: "EUR",
                data: data().arr11,
                backgroundColor: "red",
              },
              {
                label: "USD",
                data: data().arr22,
                backgroundColor: "pink",
              },
              {
                label: "JPY",
                data: data().arr33,
                backgroundColor: "orange",
              },
              {
                label: "JBP",
                data: data().arr44,
                backgroundColor: "brown",
              },
              {
                label: "CAD",
                data: data().arr55,
                backgroundColor: "black",
              },
              {
                label: "NZD",
                data: data().arr66,
                backgroundColor: "yellow",
              },
              {
                label: "INR",
                data: data().arr77,
                backgroundColor: "green",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </>
  );
}
export default Chart;
