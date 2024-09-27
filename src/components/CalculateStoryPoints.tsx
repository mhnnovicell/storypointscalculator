import React, { useState } from "react";

export default function CalculateStoryPoints() {
  const [hours, setHours] = useState("");
  const [storyPoints, setStoryPoints] = useState("2.2");

  const calculateDoubledStoryPoints = () => {
    const hoursAsNumber = Number(hours);
    const storyPointsAsNumber = parseFloat(storyPoints.replace(",", "."));
    return (hoursAsNumber * storyPointsAsNumber).toFixed(2);
  };

  return (
    <form className="flex flex-col items-center justify-center max-w-sm p-10 mx-auto">
      <p>
        <b>Formular:</b>
      </p>
      <p>
        <b>timer * storypoints</b>
      </p>
      <div className="mb-5">
        <label
          htmlFor="hours"
          className="block my-2 text-sm font-medium text-gray-900"
        >
          Timer
        </label>
        <input
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          type="number"
          id="hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="8 timer = 1 dag"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="storypoints"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Storypoints
        </label>
        <input
          type="number"
          id="storypoints"
          placeholder="2.2"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
          value={storyPoints}
          onChange={(e) => setStoryPoints(e.target.value)}
        />
      </div>
      {Number(hours) > 0 && (
        <>
          <b>
            <p>Resultat:</p>
            <p> {calculateDoubledStoryPoints()}</p>
          </b>
        </>
      )}
    </form>
  );
}
