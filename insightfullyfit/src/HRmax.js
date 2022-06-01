import React from "react";

function HRmax() {
  function getHRmaxresults(){
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    document.getElementById('hrmax').innerHTML = HRmax;
  }

  function get50perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const fifty = HRmax * 0.5;
    document.getElementById("50perc").innerHTML = fifty;
  }

  function get60perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const sixty = HRmax * 0.6;
    document.getElementById("60perc").innerHTML = sixty;
  }

  function get70perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const seventy = HRmax * 0.7;
    document.getElementById("70perc").innerHTML = seventy;
  }

  function get80perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const eighty = HRmax * 0.8;
    document.getElementById("80perc").innerHTML = eighty;
  }

  function get90perc() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    const ninety = HRmax * 0.9;
    document.getElementById("90perc").innerHTML = ninety;
  }

  return (
    <div>
      <div id="HRmaxInputs">
        <h1>HRmax = 220 - Age</h1>
        <h4>
          Enter your age below to get the HRmax for your age: HRmax is your max
          bpm(beats per minute)
        </h4>
        <h6>
          The HRmax Caclulator is meant to give you your max hearts beats per
          minute and allow you to choose one or all percentages to see your max
          at that percent. Afterwards you can look at the Zones below to see
          what exercises or workouts are meant for that percentage. The zones
          below explain what that zone does to your body such as improving
          endurance, best for fat lost, muscle gain, etc.
        </h6>
        <input type="text" id="HRmaxAge" placeholder="Enter Age" required />
        <br />
        <button type="btn" id="getHRmaxResults" onClick={getHRmaxresults}>
          Get 50%
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
      </div>
      <div class="ExplainPercent">
        <h1>Zone 1: 50-60%</h1>
        <h3>
          In zone 1 you will be at a Very Light workouts to get warmed up, cool
          down, or recovery. Getting warmed up and stretched out is important
          before moving on to other zones. If not you are more prone to injury.
        </h3>
        <h5>Example workouts: walking or cycling</h5>
        <h1>Zone 2: 60-70%</h1>
        <h3>In zone 2 you will be doing Light workouts </h3>
        <h5>Example workouts: </h5>
        <h1>Zone 3: 70-80%</h1>
        <h3>In zone 3 you will be at Moderate Level workouts </h3>
        <h5>Example workouts:</h5>
        <h1>Zone 4: 80-90%</h1>
        <h3>In zone 3 you will be at Hard level workouts and </h3>
        <h5>Example workouts:</h5>
        <h1>Zone 5: 90-100%</h1>
        <h3>
          In zone 5 you will be at the Extreme level workouts and will be for a
          short duration
        </h3>
        <h5>Example workouts:</h5>
      </div>
    </div>
  );
}

export default HRmax;
