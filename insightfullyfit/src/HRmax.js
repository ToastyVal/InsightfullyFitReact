import React from "react";

function HRmax() {
  function getHRmaxresults() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    document.getElementById("age").innerHTML = document.getElementById(
      "hrmax"
    ).innerHTML = HRmax;
  }
  function get50perc() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    const fifty = HRmax * 0.5;
    document.getElementById("age").innerHTML = document.getElementById(
      "50perc"
    ).innerHTML = fifty;
  }

  function get60perc() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    const sixty = HRmax * 0.6;
    document.getElementById("age").innerHTML = document.getElementById(
      "60perc"
    ).innerHTML = sixty;
  }

  function get70perc() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    const seventy = HRmax * 0.7;
    document.getElementById("age").innerHTML = document.getElementById(
      "70perc"
    ).innerHTML = seventy;
  }

  function get80perc() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    const eighty = HRmax * 0.8;
    document.getElementById("age").innerHTML = document.getElementById(
      "80perc"
    ).innerHTML = eighty;
  }

  function get90perc() {
    const age = document.getElementById("age").value;
    const HRmax = 220 - age;
    const ninety = HRmax * 0.9;
    document.getElementById("age").innerHTML = document.getElementById(
      "90perc"
    ).innerHTML = ninety;
  }

  return (
    <div>
      <h1>HRmax = 220 - Age</h1>
      <p>
        Enter your age below to get the HRmax for your age: HRmax is your max
        bpm(beats per minute)
      </p>
      <p id="postData"></p>
      <input type="text" id="age" placeholder="Enter Age" />
      <br />
      <button type="button" id="getHRmax" onClick={getHRmaxresults}>
        Get Results
      </button>
      <br />
      <h3>
        HRmax:<h3 id="hrmax"></h3>
      </h3>
      <h3>
        50 Percent:<h3 id="50perc"></h3>
      </h3>
      <button type="btn" id="fifty" onClick={get50perc}>
        Get 50%
      </button>
      <h3>
        60 Percent:<h3 id="60perc"></h3>
      </h3>
      <button type="btn" id="sixty" onClick={get60perc}>
        Get 60%
      </button>
      <h3>
        70 Percent:<h3 id="70perc"></h3>
      </h3>
      <button type="btn" id="seventy" onClick={get70perc}>
        Get 70%
      </button>
      <h3>
        80 Percent:<h3 id="80perc"></h3>
      </h3>
      <button type="btn" id="eighty" onClick={get80perc}>
        Get 80%
      </button>
      <h3>
        90 Percent:<h3 id="90perc"></h3>
      </h3>
      <button type="btn" id="ninety" onClick={get90perc}>
        Get 90%
      </button>
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
