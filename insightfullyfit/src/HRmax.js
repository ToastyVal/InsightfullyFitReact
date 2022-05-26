import React from "react";

function HRmax() {
  function getHRmaxresults() {
    const age = document.getElementById("age").value;
    const results = 220 - age;
    document.getElementById("age").value = results;
  }

  function HRmaxperc() {
    const HRmax = document.getElementById("getPerc").value;
    const fifty = 0.5;
    const sixty = 0.6;
    const seventy = 0.7;
    const eighty = 0.8;
    const ninety = 0.9;
    const perc = document.getElementsByName("perc");

    let Max = "";
    if (perc == 0) {
      Max = FiftyPerc(HRmax, fifty);
    } else if (perc == 1) {
      Max = SixtyPerc(HRmax, sixty);
    } else if (perc == 2) {
      Max = SeventyPerc(HRmax, seventy);
    } else if (perc == 3) {
      Max = EightyPerc(HRmax, eighty);
    } else if (perc == 4) {
      Max = NinetyPerc(HRmax, ninety);
    }

    function FiftyPerc(HRmax, fifty) {
      let results = HRmax * fifty;
      return results;
    }

    function SixtyPerc(HRmax, sixty) {
      let Max = HRmax * sixty;

      return Max;
    }

    function SeventyPerc(HRmax, seventy) {
      let Max = HRmax * seventy;

      return Max;
    }

    function EightyPerc(HRmax, eighty) {
      let Max = HRmax * eighty;

      return Max;
    }

    function NinetyPerc(HRmax, ninety) {
      let Max = HRmax * ninety;

      return Max;
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" id="age" placeholder="Enter Age" />
      <br />
      <button type="button" id="getHRmax" onClick={getHRmaxresults} />
      <br />

      <select class="percWanted" name="perc">
        <option value="0">50 Percent</option>
        <option value="1">60 Percent</option>
        <option value="2">70 Percent</option>
        <option value="3">80 Percent</option>
        <option value="4">90 Perent</option>
      </select>
      <br />

      <input type="text" id="getPerc" placeholder="Enter HRmax" />
      <br />
      <button type="btn" id="HRmacperc" onclick={HRmaxperc} />
    </div>
  );
}

export default HRmax;
