import React from "react";

function HRmax() {
  function getHRmaxresults() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    const fifty = HRmax * 0.5;
    const sixty = HRmax * 0.6;
    const seventy = HRmax * 0.7;
    const eighty = HRmax * 0.8;
    const ninety = HRmax * 0.9;
    document.getElementById("age").value = [
      HRmax,
      fifty,
      sixty,
      seventy,
      eighty,
      ninety,
    ];
  }

  return (
    <div>
      <h1>HRmax = 220 - Age</h1>
      <p>
        Enter your age below to get the HRmax for your age: HRmax is your max
        bpm(beats per minute)
      </p>
      <input type="text" id="age" placeholder="Enter Age" />
      <br />
      <button type="button" id="getHRmax" onClick={getHRmaxresults}>Get Results</button>
      <br />
      <h3 id='50perc'>50 Percent:</h3>

      <div class="table-percent">
        <tr>
          <td>Zone</td>
          <td>Intensity</td>
          <td>Percent</td>
        </tr>
        <tr>
          <td>Zone 1:</td>
          <td>Very Light</td>
          <td>50% - 60%</td>
        </tr>
        <tr>
          <td>Zone 2</td>
          <td>Light</td>
          <td>60% - 70%</td>
        </tr>
        <tr>
          <td>Zone 3</td>
          <td>Moderate</td>
          <td>70% - 80%</td>
        </tr>
        <tr>
          <td>Zone 4</td>
          <td>Hard</td>
          <td>80% - 90%</td>
        </tr>
        <tr>
          <td>Zone 5</td>
          <td>Extreme</td>
          <td>90% - 100%</td>
        </tr>
      </div>
    </div>
  );
}

export default HRmax;
