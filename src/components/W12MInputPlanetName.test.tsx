import { render, screen } from "@testing-library/react";
import W12MInputPlanetName from "./W12MInputPlanetName";
import validatePlanetName from "./validatePlanetName";

const mockValidate = (value: string) => {
  return [];
};
test("renders input Planet name", () => {
  const planetName = "";
  const setPlanetName = jest.fn();
  render(
    <W12MInputPlanetName
      state={planetName}
      setState={(value) => setPlanetName(value)}
      validate={mockValidate}
    />
  );
  const inputById = screen.getByLabelText(/PLanet Name/i);
  expect(inputById).toBeInTheDocument();
});

test("validation returns errors for invalid values", () => {
  const invalidPlanetName = "A";

  const validationErrors = validatePlanetName(invalidPlanetName);

  expect(validationErrors).toEqual([
    "Planet Name must be between 2 and 49 characters.",
  ]);
});

test("validation doesn't return errors for valid values", () => {
  const validPlanetName = "Earth";

  const validationErrors = validatePlanetName(validPlanetName);

  expect(validationErrors).toEqual([]);
});
