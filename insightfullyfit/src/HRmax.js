import React from "react";

function HRmax() {
  function getHRmaxresults() {
    const age = document.getElementById("HRmaxAge").value;
    const HRmax = 220 - age;
    document.getElementById("hrmax").innerHTML = HRmax;
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
          In zone 1 you will be at a Very Light workouts/ exercises to get
          warmed up, cool down, or recovery. Getting warmed up and stretched out
          is important before moving on to other zones. If not you are more
          prone to injury.
        </h3>
        <h5>
          Example workouts: walking at casual pace, light jog, elliptical
          machine, cycling at casual pace, and rowing at a steady pace
        </h5>
        <h1>Zone 2: 60-70%</h1>
        <h3>
          In zone 2 you will be doing Light exercises/ workouts that you should
          be able to do for a long period of time. In this zone you will be
          improving your general endurance which means it will get better at
          oxidizing burning fat and muscle fitness along with capillary density
          will increase.
        </h3>
        <h5>
          Example workouts: walking at casual pace, light jog, elliptical
          machine, cycling at casual pace, and rowing at a steady pace
        </h5>
        <h1>Zone 3: 70-80%</h1>
        <h3>
          In zone 3 you will be at Moderate Level workouts that will improve the
          efficiency of clood circulation in skeletal mucles along with the
          heart. This zone will improve efficiently, make moderate efforts
          easier, and start producing lactic acid build up in your bloodstream.
        </h3>
        <h5>
          Example workouts: walking two miles in 30 minutes, biking five miles
          in 30 minutes, swimming laps for 20 minutes, playing volleyball for 45
          minutes
        </h5>
        <h1>Zone 4: 80-90%</h1>
        <h3>
          In zone 3 you will be at Hard level workouts/ exercises that will be
          aerobic and leave you breathing hard. This zone will improve your
          speed endurance and make your body better at using carbohydrates for
          energy. Your body will also get better at withstanding higher and
          highre levels of lactic acid build up in your bloodstream.
        </h3>
        <h5>
          Example workouts: Jump lunge. Work 20sec Rest 10sec. Explode off the
          ground and change legs in the air on each rep, high knees. Work 20sec
          Rest 10sec. Run on the spot, bringing your knees as high as possible,
          jump squat, do about 8 times to complete hard intenstiy
        </h5>
        <h1>Zone 5: 90-100%</h1>
        <h3>
          In zone 5 you will be at the Extreme level workouts/ exercises will be
          for a short duration and will be using maximum efforts. The reason
          this zone is only for a few minutes is because the lactic acid build
          up will happen faster and will not be able to continue at this
          intensity. This intenisty is for expercienced training and is not
          recommended for people just starting their fitness journey.
        </h3>
        <h5>
          Example workouts: do 5 rounds of 5x Back Squat or Difficult but
          Doable, 2x Broad Jumps, 60 second rest and while resting do the Pec
          Ball
        </h5>
      </div>
    </div>
  );
}

export default HRmax;
