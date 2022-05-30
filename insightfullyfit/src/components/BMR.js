import { Component } from "react";
import React from "react";

class Bmr extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      gender: "",
      bodyFat: "",
      weight: "",
      height: "",
      activity: "",
      bmr: "",
      suggestion: "",
      pal: "",
    };
  }
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleBodyFatChange = (event) => {
    this.setStage({ bodyFat: event.target.value });
  };
  handleWeightChange = (event) => {
    this.setStage({ weight: event.target.value });
  };
  handleHeightChange = (event) => {
    this.setStage({ height: event.target.value });
  };
  handleactivityChange = (event) => {
    this.setStage({ activity: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let gender = this.state.gender;
    let bodyFat = this.state.bodyFat;
    let weight = this.state.weight;
    let height = this.height.height;
    let activity = this.activity;
    let unit = this.unit;
    let formula = this.formula;

    if (
      age === "" ||
      gender === "" ||
      bodyFat === "" ||
      weight === "" ||
      height === ""
    ) {
      this.setStage({ error: "All Fields are Requires" });
      return;
    }

    let bmrCalc = "";
    if (formula === 0) {
      //Mifflin
      bmrCalc = Mifflin(gender, age, bodyFat, height, weight);
    } else if (formula === 1) {
      //Harris
      bmrCalc = Harris(gender, age, bodyFat, height, weight);
    } else if (formula === 2) {
      // Katch
      bmrCalc = Katch(bodyFat, weight);
    }

    let ret = parseFloat(Bmr) * parseFloat(activity);
    if (unit === "kilojoules") {
      ret = ret * 4.1868;
      document.querySelector(".ans_calculate").innerHTML =
        '<div class="container"><h4 class="text-center form-control my-3 text-danger fs-4">You should consume <span class="text-black">' +
        Math.ceil(ret) +
        " " +
        unit +
        "/day </span> of calorie to maintain your weight.</h4></div>";
    }

    function Mifflin(gender, age, height, weight) {
      let bmrCalc = 10 * weight + 6.25 * height - 5 * age + 5;
      if (gender === 1) {
        bmrCalc = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      this.set.state({ bmr: bmrCalc });
    }

    function Harris(gender, age, height, weight) {
      let bmrCalc = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
      if (gender === 1) {
        bmrCalc = 9.247 * weight + 3.098 * height - 4.333 * age + 447.593;
      }

      this.set.state({ bmr: bmrCalc });
    }

    function Katch(bodyFat, weight) {
      let bmrCalc = 370 + 21.6 * (1 - bodyFat / 100) * weight;

      this.set.state({ bmr: bmrCalc });
    }

    let activitySug = ";";
    if (bmrCalc <= 1926) {
      activitySug = "Suggestion: little or no exercise.";
    } else if (bmrCalc > 1926 && bmrCalc <= 2207) {
      activitySug = "Suggestion: Exercise 1-3 times/week.";
    } else if (bmrCalc > 2207 && bmrCalc <= 2351) {
      activitySug = "Suggestion: Exercise 4-5 times/week.";
    } else if (bmrCalc > 2351 && bmrCalc <= 2488) {
      activitySug =
        "Suggestion: Daily exercise or intense exercise 3-4 times/week.";
    } else if (bmrCalc > 2488 && bmrCalc <= 2796) {
      activitySug = "Suggestion: Intense exercise 6-7 times/week.";
    } else if (bmrCalc > 2796) {
      activitySug = "Very intense exercise daily, or physical job.";
    }
    this.setState({ sugggestion: "Suggestion: " + activitySug });

    function calculateCalories() {
      let resultPAL;
      if (this.state.activity) {
        resultPAL = (
          <div className="resultPAL">
            {this.state.bmr * this.state.activity}
          </div>
        );
      }
      this.setState({ pal: resultPAL });
    }

    
    let resultBMR;
    if (this.state.bmr) {
      resultBMR = <div className="resultBmr">{this.state.bmr}</div>;
    }

    let resultSug;
    if (this.state.suggestion) {
      resultSug = <div className="resultSug">{this.state.suggestion}</div>;
    }

    let resultPAL;
    if (this.state.pal) {
      resultPAL = <div className="resultpal">{this.state.pal}</div>;
    }
     
    return (
        <form>
      <div className="bmrcalc">
        <div className="form">
          <h2>BMR Calculator</h2>
          <div className="inputwrap">
            <label className="label">Gender</label>
            <label>
              <input
                type="radio"
                checked={this.state.gender === "1"}
                onChaneg={this.handleGenderChange}
                className="genderF"
                name="gender"
                value="1"
                required
              >
                Female
              </input>
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.gender === "2"}
                onChange={this.handleGenderChange}
                className="genderM"
                name="gender"
                value="2"
                required
              >
                Male
              </input>
            </label>
          </div>
          <div className="inputwrap">
            <label className="label"> Enter Age</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              name="age"
              className="age"
              min="0"
              max="120"
              required
            />
          </div>
          <div className="inputwrap">
            <label className="label">Weight in Kilograms</label>
            <input
              type="number"
              checked={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              className="weight"
              min="0"
              max="999"
              required
            />
          </div>
          <div className="inputwrap">
            <label className="label">Height in cm</label>
            <input
              type="number"
              checked={this.state.height}
              onChange={this.handleHeightChange}
              name="height"
              className="height"
              min="0"
              max={"272"}
              required
            />
          </div>
          <div className="inputwrap">
            <label>Body Fat %</label>
            <input
              type={"number"}
              checked={this.state.bodyFat}
              onChange={this.handleBodyFatChange}
              name="bodyFat"
              className="bodyFat"
              min={"0"}
              max={"99"}
            />
          </div>
        </div>
        <button type="button" onClick={() => this.calculateBMR()}>
          Calculate BMR
        </button>
        {resultBMR}
        {resultSug}
        <div className="workout">
          <div className="inputwrap">
            <label className="label">Workout in a Week</label>
            <select
              className="activity"
              value={this.state.activity}
              onChange={this.handleactivityChange}
              name="activity"
            >
              <option value={""}>Select your Activity</option>
              <option value={"1.2"}>Sedentary: Little or No exercise</option>
              <option value={"1.375"}>Light: Exercise 1-3 times/week</option>
              <option value={"1.55"}>
                Moderately: Moderate exercise 3-5 times/week
              </option>
              <option value={"1.725"}>
                Active: Heavy exercise 6-7 days per week
              </option>
              <option value={"1.9"}>
                Intense: Very Intense exercise daily
              </option>
            </select>
          </div>
          <botton type="button" onClick={calculateCalories}>
            Calculate Calorie
          </botton>
          {resultPAL}
        </div>
      </div>
      </form>
    );
    };
   };
  
export default Bmr;


