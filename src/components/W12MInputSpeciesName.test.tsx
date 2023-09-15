import { render, screen } from "@testing-library/react";
import W12MInputSpeciesName from "./W12MInputSpeciesName";
import validateSpeciesName from "./validateSpeciesName";
const mockValidate = (value: string) => {
  return [];
};

test("renders input Species name", () => {
  const speciesName = "";
  const setSpeciesName = jest.fn();
  render(
    <W12MInputSpeciesName
      state={speciesName}
      setState={(value) => setSpeciesName(value)}
      validate={mockValidate}
    />
  );
  const inputById = screen.getByLabelText(/Species Name/i);
  expect(inputById).toBeInTheDocument();
});

test("validation returns errors for invalid values", () => {
  const invalidSpeciesName = "C";

  const validationErrors = validateSpeciesName(invalidSpeciesName);

  expect(validationErrors).toEqual([
    "Species Name must be between 3 and 23 characters.",
  ]);
});

test("validation doesn't return errors for valid values", () => {
  const validSpeciesName = "Humans";

  const validationErrors = validateSpeciesName(validSpeciesName);

  expect(validationErrors).toEqual([]);
});
