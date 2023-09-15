import React, { useState } from "react";
import W12MHeader from "./W12MHeader";
import W12MInputSpeciesName from "./W12MInputSpeciesName";
import W12MInputPlanetName from "./W12MInputPlanetName";
import W12MInputNumberOfBeings from "./W12MInputNumberOfBeings";
import W12MInputWhatIs from "./W12MInputWhatIs";
import W12MInputReasonForSparing from "./W12MInputReasonForSparing";
import W12MButtonSubmit from "./W12MButtonSubmit";

import validateSpeciesName from "./validateSpeciesName";
import validatePlanetName from "./validatePlanetName";
import validateNumberOfBeings from "./validateNumberOfBeings";
import validateReasonForSparing from "./validateReasonForSparing";
import validateWhatIs from "./validateWhatIs";

const W12MForm: React.FC = () => {
  const [speciesName, setSpeciesName] = useState("Some name");
  const [planetName, setPlanetName] = useState("Some planet name");
  const [numberOfBeings, setNumberOfBeings] = useState("2");
  const [reasonForSparing, setReasonForSparing] = useState("some reasons...");
  const endPoint: string = "someendpoint";
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        speciesName,
        planetName,
        numberOfBeings,
        reasonForSparing,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data sent to server");
        } else {
          console.error("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="w12MForm">
      <form onSubmit={handleFormSubmit}>
        <W12MHeader />
        <W12MInputSpeciesName
          state={speciesName}
          setState={(value) => setSpeciesName(value)}
          validate={validateSpeciesName}
        />
        <W12MInputPlanetName
          state={planetName}
          setState={(value) => setPlanetName(value)}
          validate={validatePlanetName}
        />
        <W12MInputNumberOfBeings
          state={numberOfBeings}
          setState={(value) => setNumberOfBeings(value)}
          validate={(value) => validateNumberOfBeings(parseInt(value, 10))}
        />
        <W12MInputWhatIs validate={validateWhatIs} />
        <W12MInputReasonForSparing
          state={reasonForSparing}
          setState={(value) => setReasonForSparing(value)}
          validate={validateReasonForSparing}
        />
        <W12MButtonSubmit />
      </form>
    </section>
  );
};

export default W12MForm;
