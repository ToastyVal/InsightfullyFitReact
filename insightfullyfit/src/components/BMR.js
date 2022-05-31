import React from "react";

function BMR() {
  function femaleMifflin() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    document.getElementById("mResultsF").innerHTML = bmr;
  }

  function femaleHarris() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    document.getElementById("hResultsF").innerHTML = bmr;
  }

  function maleMifflin() {
    const age = document.getElementById("maleage").value;
    const weight = document.getElementById("maleweight").value / 2.205;
    const height = document.getElementById("maleheight").value * 2.54;
    const bmr = (10 * weight) + (6.25 * height) - (5.677 * age) - 161;
    document.getElementById("mResultsM").innerHTML = bmr;
  }

  function maleHarris() {
    const age = document.getElementById("maleage").value;
    const weight = document.getElementById("maleweight").value / 2.205;
    const height = document.getElementById("maleheight").value * 2.54;
    const bmr = (9.247 * weight) + (3.098 * height) - (4.33 * age) + 447.593;
    document.getElementById("hResultsM").innerHTML = bmr;
  }

  return (
    <div>
      <h1>BMR Caclulators</h1>
      <div class="female">
        <h1 id="FemaleFormula">Female</h1>
        <input type="text" id="age" placeholder="Enter Age" />
        <br />
        <input type="text" id="weight" placeholder="Enter Weight in lbs." />
        <br />
        <input type="text" id="height" placeholder="Enter height in inches" />
        <br />

        <h1>
          Mifflin Results are: <h2 id="mResultsF"></h2>
        </h1>
        <button type="btn" id="getResults" onClick={femaleMifflin}>
          Mifflin Results
        </button>
        <h1>
          Harris Results are: <h2 id="hResultsF"></h2>
        </h1>
        <button type="btn" id="getResults" onClick={femaleHarris}>
          Harris Results
        </button>
        <div class="male">
          <h1 id="MaleFormula">Male</h1>
          <input type="text" id="maleage" placeholder="Enter Age" />
          <br />
          <input type="text" id="maleweight" placeholder="Enter Weight in lbs." />
          <br />
          <input type="text" id="maleheight" placeholder="Enter height in inches" />
          <br />

          <h1>
            Mifflin Results are: <h2 id="mResultsM"></h2>
          </h1>
          <button type="btn" id="getResults" onClick={maleMifflin}>
            Mifflin Results
          </button>
          <h1>
            Harris Results are: <h2 id="hResultsM"></h2>
          </h1>
          <button type="btn" id="getResults" onClick={maleHarris}>
            HarrisResults
          </button>
        </div>
      </div>
    </div>
  );
}

export default BMR;
