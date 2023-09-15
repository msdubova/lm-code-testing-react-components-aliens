import { render, screen } from "@testing-library/react";
import W12MInputWhatIs from "./W12MInputWhatIs";
import validateWhatIs from "./validateWhatIs";

const mockValidate = (value: string) => {
  return [];
};

test("Default value checking", () => {
  const defaultValue = "4";

  render(<W12MInputWhatIs validate={mockValidate} />);

  const selectElement = screen.getByLabelText("What is 2+2?");
  expect(selectElement).toHaveValue(defaultValue);
});

test("validation returns errors for invalid values", () => {
  const invalidWhatIs = "Not 4";

  const validationErrors = validateWhatIs(invalidWhatIs);

  expect(validationErrors).toEqual(['You must select "4".']);
});

test("validation doesn't return errors for valid values", () => {
  const validWhatIs = "4";

  const validationErrors = validateWhatIs(validWhatIs);

  expect(validationErrors).toEqual([]);
});
