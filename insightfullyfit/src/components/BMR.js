import React from "react";

function BMR() {
  function femaleMifflin() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    document.getElementById("mResultsF").innerHTML = bmr;
  }

  function femaleHarris() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    document.getElementById("hResultsF").innerHTML = bmr;
  }

  function maleMifflin() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 10 * weight + 6.25 * height - 5.677 * age - 161;
    document.getElementById("mResultsF").innerHTML = bmr;
  }

  function maleHarris() {
    const age = document.getElementById("BMRage").value;
    const weight = document.getElementById("weight").value / 2.205;
    const height = document.getElementById("height").value * 2.54;
    const bmr = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    document.getElementById("hResultsF").innerHTML = bmr;
  }

  function convertHeight() {
    const feet = document.getElementById("feet").value;
    const inches = document.getElementById("inches").value;
    const convert = feet * 12 + parseInt(inches);
    document.getElementById("convert").innerHTML = convert;
  }

  return (
    <div class='BMR'>
      <h1>BMR(Basal Metabolic Rate)</h1>
      <h3>
        Basal Metabloic Rate is the number of calories your body needs to
        accomplish its most basic(basal) life-sustaining functions.
      </h3>
      <h5>If you do not know your height in inches enter below to convert</h5>
      <label>Feet:</label>
      <input type="number" id="feet" />
      <label>Inches</label>
      <input type="number" id="inches" />
      <h3>
        Height in inches: <h3 id="convert"></h3>
      </h3>
      <button type="btn" id="convertHeight" onClick={convertHeight}>
        Convert Height to inches
      </button>
      <div class="female">
        <h1 id="FemaleFormula">BMR Formulas</h1>
        <input type="text" id="BMRage" placeholder="Enter Age" />
        <br />
        <input type="text" id="weight" placeholder="Enter Weight in lbs." />
        <br />
        <input type="text" id="height" placeholder="Enter height in inches" />
        <br />
        <h3>
          Once you have entered in your information choose gender and you will
          recieve your results. Note: that you will recive different results
          depending on the formula you choose but it will mean the same when it
          comes to activities.
        </h3>
        <h5>
          The Mifflin-St Jeor formula calculates yours results based on an
          estimated average.This gives the amount of energy expended per day at
          rest. (How many calories burned on bed rest)
        </h5>
        <h1>
          Mifflin Results are: <h2 id="mResultsF"></h2>
        </h1>
        <br />
        <button type="btn" id="getResults" onClick={femaleMifflin}>
          Female Mifflin
        </button>
        <br />
        <button type="btn" id="getResults" onClick={maleMifflin}>
          Male Mifflin
        </button>
        <h5>
          The Harris-Benedict is the amount of energy required to maintain the
          body's normal metabolic activity, such as respiration, maintenance of
          body temperature (thermogenesis), and digestion.
        </h5>
        <h1>
          Harris Results are: <h2 id="hResultsF"></h2>
        </h1>
        <button type="btn" id="getResults" onClick={femaleHarris}>
          Female Harris
        </button>
        <br />
        <button type="btn" id="getResults" onClick={maleHarris}>
          Male Harris
        </button>
      </div>
      <div class='Activity'>
        <h4>Calories needed for Seditary Exercise:<h5 id='seditary'></h5></h4>
          <button type='btn' id="sed">Get Results</button>
      </div>
    </div>
  );
}

export default BMR;
